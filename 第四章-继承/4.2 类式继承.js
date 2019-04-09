/**Class Person */
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
}

//4.2.1 原型链
/**Class Author */
function Author(name, books) {
    Person.call(this, name); // Call the superclass's constructor in the scope of this.
    this.books = books; //Add an attribute to Author.
}

Author.prototype = new Person(); //Set up the prototype chain.
Author.prototype.constructor = Author; //Set the constructor attribute to Author.
Author.prototype.getBooks = function () { //Add a method  to Author.F
    return this.books;
};