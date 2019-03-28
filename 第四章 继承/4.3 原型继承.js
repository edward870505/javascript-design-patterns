//4.3 原型式继承
//4.3.2clone函数
/**Clone function. */
function clone(object) {
    var F = function () {};
    F.prototype = object;
    return new F;
}


/**Person Prototype Object. */
var Person = {
    name: 'default name',
    getName: function () {
        return this.name;
    }
};

var reader = clone(Person);
console.log(reader.getName()); // This will output 'default name'.
reader.name = 'John Smith';
console.log(reader.getName()); //This will now output 'John Smith'.

/**Author Prototype Object. */
var Author = clone(Person);
Author.books = []; //Default value.
Author.getBooks = function () {
    return this.books;
};

var author = [];
author[0] = clone(Author);
author[0].name = 'Dustin Diaz';
author[0].books = ['JavaScript Design Patterns'];

author[1] = clone(Author);
author[1].name = 'Ross Harmes';
author[1].books = ['JavaScript Design Patterns'];

console.log(author[1].getName());
console.log(author[1].getBooks());

var CompundObject = {
    string1: 'default value',
    childObject: {
        bool: true,
        num: 10
    }
};

var compundObjectClone = clone(CompoundObject);

//Bad! Changes the value of CompoundObject.childObject.num.
compundObjectClone.childObject.num = 5;

//Better. Creates a new Object, but compoundObject must know the structure
//of that object, and the defaults. This makes CompoundObject and
//compundObjectClone tightly coupled.
compundObjectClone.childObject = {
    bool: true,
    num: 5
};

//Best approach. Uses a method to create a new object, with the same structure and
//default as the original.

var CompoundObject = {};
CompundObject.string1 = 'default value';
CompoundObject.createChildObject = function(){
    return {
        bool:true,
        num:10
    }
};

CompoundObject.childObject = CompoundObject.createChildObject();
compoundObjectClone.childObject.num = 5;


