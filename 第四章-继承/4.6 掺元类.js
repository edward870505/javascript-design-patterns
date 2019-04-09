/**Mixin class */
var Mixin = function () {};
Mixin.prototype = {
    serialize: function () {
        var output = [];
        for (var key in this) {
            output.push(key + ':' + this[key]);
        }
        return output.join(', ');
    }
};

augment(Author, Mixin);

/**Augment function. */
function augment(receivingClass, givingClass) {
    for (var methodName in givingClass.prototype) {
        if (!receivingClass.prototype[methodName]) {
            receivingClass.prototype[methodName] = givingClass.prototype[methodName];
        }
    }
}

/**Augment function, improved. */
function augment(receivingClass, givingClass) {
    if (arguments[2]) {
        for (var i = 2, len = arguments.length; i < len; i++) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    } else {
        for (var methodName in givingClass.prototype) {
            if (!receivingClass.prototype[methodName]) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
        }
    }
}