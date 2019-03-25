//2.3.1 
//2.3.2
//2.3.3


/**
 * interface Composite{
 *      function add(child);
 *      function remove(child);
 *      function getChild(index);
 * }
 * 
 * 
 * interface FromItem{
 *      function save();
 * 
 * }
 */



 //CompositeForm class
var CompositeFrom = function (id, method, action) { // implements Composite, FormTem
    this.implementsInterFaces = ['Composite', 'FromItem'];
};

// Implement the Composite interface

CompositeFrom.prototype.add = function (child) {

};

CompositeFrom.prototype.remove = function (child) {

};

CompositeFrom.prototype.getChild = function (index) {

};

//Implement the FromItem interface.
CompositeFrom.prototype.save = function () {

};

function addForm(formInstance) {
    if (!implements(formInstance, 'Composite', 'FormItem')) {
        throw new Error('Object does not implement a required.');
    }
}

//The implements function, which checks to see if an object declares that it
// implements the required interfaces.

function implements(object) {
    for (var i = 1; i < arguments.length; i++) { //Looping through all arguments
        var interfaceName = arguments[i]; //after th efirst one.
        var interfaceFound = false;
        for (var j = 0; j < arguments.length; j++) {
            if (object.implementsInterFaces[j] == interfaceName) {
                interfaceFound = true;
                break;
            }
        }
        if (!interfaceFound) {
            return false; //An interface was not found.
        }
    }
    return true; //All interfaces were found;
}



