/**Extend function. */

/**Class Person */
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
}


function extend(subClass, superClass){
    var F = function(){};
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;

    subClass.superclass = superClass.prototype;
    if(superClass.prototype.constructor == Object.prototype.constructor){
        superClass.prototype.constructor = superClass;
    }
}

function Author(name,books){
    Author.superclass.constructor.call(this,name);
    this.books = books;
}

extend(Author, Person);

Author.prototype.getBooks = function(){
    return this.books;
}

var author1 = new Author('edward','Harry Potter');

console.log(author1.name);