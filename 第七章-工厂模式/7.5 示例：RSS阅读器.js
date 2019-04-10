var Interface = require("../Interface.js");
var Library = require("../Library.js");

/** DisplayModule interface.*/
var DisplayModule = new interface("DisplayModule", [
  "append",
  "remove",
  "clear"
]);

/**ListDisplay class. */
var ListDisplay = function(id, parent) {
  //implements DisplayModule
  this.list = document.createElement("ul");
  this.list.id = id;
  parent.appendChild(this.list);
};

ListDisplay.prototype = {
  append: function(text) {
    var newEl = document.createElement("li");
    this.list.appendChild(newEl);
    newEl.innerHTML = text;
    return newEl;
  },
  remove: function(el) {
    this.list.removeChild(el);
  },
  clear: function() {
    this.list.innerHTML = "";
  }
};

/**Configuration object. */
var conf = {
  id: "cnn-top-stories",
  feedUrl: "http://rss.cnn.com/rss/cn_topstories.rss",
  updateInterval: 60,
  parent: $("feed-readers")
};

/**FeedReader class. */
var FeedReader = function(display, xhrHandler, conf) {
  this.display = display;
  this.xhrHandler = xhrHandler;
  this.conf = conf;

  this.startUpdates();
};

FeedReader.prototype = {
  fetchFeed: function() {
    var that = this;
    var callback = {
      success: function(text, xml) {
        that.parseFeed(text, xml);
      },
      failure: function(status) {
        that.showError(status);
      }
    };
    this.xhrHandler.request(
      "GET",
      "feedProxy.phph?feed=" + this.conf.feedUrl,
      callback
    );
  },
  parseFeed: function(responseText, responseXML) {
    this.display.clear();
    var items = responseXML.getElementsByTagName("item");
    for (var i = 0, len = items.length; i < len; i++) {
      var title = items[i].getElementsByTagName("title")[0];
      var link = items[i].getElementsByTagName("link")[0];
      this.display.append(
        '<a href="' +
          link.firsChild.data +
          '">' +
          title.firstChild.data +
          "</a>"
      );
    }
  },
  showError: function(statusCode) {
    this.display.clear();
    this.display.append("Error fetching feed.");
  },
  stopUpdates: function() {
    clearInterval(this.interval);
  },
  startUpdates: function() {
    this.fetchFeed();
    var that = this;
    this.interval = setInterval(function() {
      that.fetchFeed();
    }, this.conf.updateInterval * 1000);
  }
};

/**FeedManager namespace. */
var FeedManager = {
    createReader:function(){
        var displayModule = new ListDisplay(conf.id + '-display', conf.parent);
        Interface.Interface.ensureImplements(displayModule, DisplayModule);

        var xhrHandler =  XhrManager.createXhrHandler();
        Interface.Interface.ensureImplements(xhrHandler, AjaxHandler);

        return new FeedReader(displayModule, xhrHandler, conf);
    }
}
