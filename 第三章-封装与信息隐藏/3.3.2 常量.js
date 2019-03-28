/**
 * 
var Class = (function () {
    //Constants(Created as private static attributes).
    var UPPER_BOUND = 100;
    //Constructor.
    var ctor = function (constructorArgument) {

    };
    //privileged static method.
    ctor.getUPPER_BOUND = function(){
        return UPPER_BOUND;
    };

    //return the constructor
    return ctor;
})();
 */

var Class = (function(){
    var constants = {
        UPPER_BOUND:100,
        LOWER_BOUND:-100
    };

    //Constructor.
    var ctor = function(constructorArgument){

    };
    //Priviledged static method.
    ctor.getConstant = function(name){
        return constants[name];
    };
    return ctor
})();

