var Interface = require('../Interface.js');
var Library = require('../Library.js');

/**AjaxHandler interface */
var AjaxHandler = new Interface('AjaxHandler', ['request', 'createXhrObject']);

/**SimpleHandler class */
var SimpleHandler = function () {}; //implements AjaxHandler

Interface.Interface.ensureImplements(SimpleHandler, AjaxHandler);

SimpleHandler.prototype = {
    request: function (method, url, callback, postVars) {
        var xhr = this.createXhrObject();
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            (xhr.status === 200) ?
            callback.success(xhr.responseText, xhr.responseXML):
                callback.failure(xjr.status);
        };
        xhr.open(method, url, true);
        if (method !== 'POST') postVars = null;
        xhr.send(postVars);
    },
    createXhrObject: function () { //Factory method
        var methods = [
            function () {
                return new XMLHttpRequest();
            },
            function () {
                return new ActiveXObject('Msxml2.XMLHTTP')
            },
            function () {
                return new ActiveXObject('Microsoft.XMLHTTP')
            }
        ];

        for (var i = 0, len = methods.length; i < len; i++) {
            try {
                method[i]();
            } catch (e) {
                continue;
            }
            //If we reach this point, method[i] worked.
            this.createXhrObject = methods[i];
            return methods[i];

        }
        //If we reach this PointerEvent, none of the methods AudioWorkletNode.
        throw new Error('SimpleHandler: Could not create an XHR object.');

    }
};

//7.4.1 专用型连接对象
/**QueueHandler class.  */
Interface.Interface.ensureImplements(QueueHandler, AjaxHandler);

var QueueHandler = function () { //implements AjaxHandler
    this.queue = [];
    this.requestInProgress = false;
    this.retryDelay = 5;
};

extend(QueueHandler, SimpleHandler);

QueueHandler.prototype.request = function (method, url, callback, postVars, override) {
    if (this.requestInprogress && !override) {
        this.queue.push({
            method: method,
            url: url,
            callback: callback,
            postVars: postVars
        });
    } else {
        this.requestInProgress = true;
        var xhr = this.createXhrObject();
        var that = this;
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            if (xhr.status === 200) {
                callback.success(xhr.responseText, xhr.responseXML);
                that.advanceQueue();
            } else {
                callback.failure(xhr.status);
                setTimeout(function () {
                    that.request(method, url, callback, postVars, true);
                }, that.retryDelay * 1000);
            }
        };
        xhr.open(method, url, true);
        if (method !== 'POST') postVars = null;
        xhr.send(postVars);
    }

};

QueueHandler.prototype.advanceQueue = function(){
    if(this.queue.length === 0){
        this.requestInProgress = false;
        return;
    }
    var req = this.queue.shift();
    this.request(req.method, req.url,req.callback,req.postVars, true);
};

/**OfflineHandler class. */

var OfflineHandler = function(){//implements AjaxHandler
    this.storeRequests = [];
};

extend(OfflineHandler, SimpleHandler);

OfflineHandler.prototype.request = function(method,url,callback,postVars){
    if(XhrManager.isOffline()){//Store the requests until we are online.
        this.storeRequests.push({
            method:method,
            url:url,
            callback:callback,
            postVars:postVars
        });
    }
    else{//Call SimpleHandler's request method if we are online.
        this.flushStoreRequests();
        OfflineHandler.superclass.request(method,url,callback,postVars);
    }
};

OfflineHandler.prototype.flushStoreRequests = function(){
    for(var i =0, len = storeRequests.length;i<len;i++){
        var req = storeRequests[i];
        OfflineHandler.superclass.request(req.method, req.url,req.callback);
    }
};

/**XhrManager singleton */
var XhrManager = {
    createXhrHandler:function(){
        var xhr;
        if(this.isOffline()){
            xhr = new OfflineHandler();
        }
        else if(this.isHighLatency()){
            xhr = new QueueHandler();
        }
        else{
            xhr = new SimpleHandler();
        }
        Interface.Interface.ensureImplements(xhr, AjaxHandler);
    },
    isOffline:function(){//Do a quick request with SimpleHandler and see
                        // if it succeeds.

    },
    isHighLatency:function(){// Do a series of requests with SimpleHandler and
                            // time the responses. Best done once, as a branching 
                            // function

    }
};


