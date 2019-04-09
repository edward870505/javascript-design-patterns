var Interface = require('../Interface.js');
var Library = require('../Library.js');

/** DisplayModule interface.*/
var DisplayModule = new interface('DisplayModule',['append','remove','clear']);

/**ListDisplay class. */
var ListDisplay = function(id, parent){//implements DisplayModule
    this.list = document.createElement('ul');
    this.list.id = id;
    parent.appendChild(this.list);
};

ListDisplay.prototype = {
    append:function(text){
        var newEl = document.createElement('li');
        this.list.appendChild(newEl);
        newEl.innerHTML = text;
        return newEl;
    },
    remove:function(el){
        this.list.removeChild(el);
    },
    clear:function(){
        this.list.innerHTML = '';
    }
};

/**Configuration object. */
var conf = {
    id:'cnn-top-stories',
    feedUrl:'http://rss.cnn.com/rss/cn_topstories.rss',
    updateInterval:60,
    parent:$('feed-readers')
}

/**FeedReader class. */
var FeedReader = function(display, xhrHandler, conf){
    this.display = display;
    this.xhrHandler = xhrHandler;
    this.conf = conf;

    this.startUpdates();
}





