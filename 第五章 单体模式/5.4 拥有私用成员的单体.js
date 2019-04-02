/**DataParser singleton, converts character delimited strings into arrays. */
var GiantCorp = global.GiantCorp || {};

GiantCorp.DataParser = {
    //Private methods.
    _stripWhitespace: function (str) {
        return str.replace(/\s+/, '');
    },
    _stringSplit: function (str, delimiter) {
        return str.split(delimiter);
    },
    //Public method.
    stringToArray: function (str, delimiter, stripWS) {
        if (stripWS) {
            str = this._stripWhitespace(str);
        }
        var outputArray = this._stringSplit(str, delimiter);
        return outputArray;
    }
};

/**DataParser singleton, converts character delimited strings into arrays. */
/** Now using true private methods. */

GiantCorp.DataParser = (function () {
    //Private attributes.
    var whitespaceRegex = /\s+/;
    //Privates methods.
    function stripWhitespace(str) {
        return str.replace(/\s+/, '');
    }

    function stringSplit(str, delimiter) {
        return str.split(str, delimiter);
    }

    //Everything returned in the object is public, but can access thr
    //members in the closure created above.
    return {
        //public method.
        stringToArray: function (str, delimiter, stringWS) {
            if (stringWS) {
                str = stripWhitespace(str);
            }
            var outputArray = stringSplit(str, delimiter);
            return outputArray;
        }
    };
})(); //Invoke the function and assign the returned object literal to
//GiantCorp.DataParser

var MyNamespace = global.MyNamespace || {};

/**Singleton as an Object Literal. */
MyNamespace.Singleton = {};

/**Singleton with Private Members, step1. */
MyNamespace.Singleton = (function () {
    //Private members
    var privateAttr1 = false;
    var privateAttr2 = [1, 2, 3];

    function privateMethod1() {

    }

    function privateMethod2() {

    }

    return { //Public members.
        publicAttr1: true,
        publicAttr2: 10,
        publicMethod1: function () {},
        publicMethod2: function (args) {}
    };
})();

/**General skeleton for a  lazy loading singleton, step 2. */

MyNamespace.Singleton = (function () {

    var uniqueInstance; //Private attribute that holds the single instance;

    function constrcutor() { //All of the normal singleton code goes here.

    }

    return {
        getInstance: function () {
            if (!uniqueInstance) {
                uniqueInstance = constrcutor();
            }
            return uniqueInstance;
            //Control code goes here.
        }
    };
})();