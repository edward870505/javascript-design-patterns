//Include syntactic sugar to help the development of our interface.
Function.prototype.method = function (name, fn) {
    this.prototype[name] = fn;
    return this;
};

(function () {
    //Use a private class.
    function _$(els) {
        this.elements = [];
        for (var i = 0, len = els.length; i < len; i++) {
            var element = els[i];
            if (typeof element === 'String') {
                element = document.getElementById(element);
            }
            this.elements.push(element);
        }
    }
    /**
     * Events
     *  addEvent
     *  getEvent
     */
    _$.method('addEvent', function (type, fn) {

    }).method('getEvent', function (e) {

    }).
    /** 
     * DOM
     *  addClass
     *  removeClass
     *  replaceClass
     *  hasClass
     *  getStyle
     *  setStyle
     */
    method('addClass', function (className) {

    }).method('removeClass', function (className) {

    }).method('replaceClass', function (oldClass, newClass) {

    }).method('hasClass', function (className) {

    }).method('getStyle', function (prop) {

    }).method('setStyle', function (prop, val) {

    }).
    /** 
     * AJAX
     *  load. Fetches an HTML fragment from a URL and inserts it into an element.
     */
    method('load', function (uri, method) {

    });

    global.$ = function () {
        return new _$(arguments);
    }

    global.installHelper = function (scope, interface) {
        scope[interface] = function () {
            return new _$(arguments);
        };
    }

})();