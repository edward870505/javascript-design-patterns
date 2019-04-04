//Accessor without function callbacks：return requested data in accessors
window.API = window.API || function () {
    var name = 'Hello world';
    //Privileged mutator method
    this.setName = function (newName) {
        name = newName;
        return this;
    };
    //Privileged accessor method
    this.getName = function () {
        return name;
    }
}

//Accessor with function callbacks
window.API2 = window.API2 || function () {
    var name = 'Hello world';
    //Privileged mutator method
    this.setName = function (newName) {
        name = newName;
        return this;
    };
    //Privileged accessor method
    this.getName = function (callback) {
        callback.call(this,name);
        return this;
    }
}