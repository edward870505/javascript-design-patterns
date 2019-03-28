var Book = (function () {
    //Private static attributes
    var numOfBooks = 0;
    //Private static method
    function checkIsbn(isbn) {

    }
    //Return the constructor
    return function (newIsbn, newTitle, newAuthor) { //implements Publication
        //Private attrbibutes
        var isbn, title, author;

        //Privileaged methods
        this.getIsbn = function () {
            return this.isbn;
        };
        this.setIsbn = function (newIsbn) {
            if (!checkIsbn(newIsbn)) throw new Error('Book : Invalid ISBN.');
            isbn = newIsbn;
        };
        this.getTitle = function () {
            return title;
        };
        this.setTitle = function (newTitle) {
            title = newTitle || 'No title specified'
        };
        this.getAuthor = function () {
            return this.author;
        };
        this.setAuthor = function (newAuthor) {
            author = newAuthor || 'No author specified';
        };

        //Constructor code.
        numOfBooks++; //keep track of how many Books have benn istantiated
        //with the private static attribute.
        if (numOfBooks > 50) throw new Error('Book: Only 50 instances of Book can be created.');
        this.setIsbn(newIsbn);
        this.setTitle(newTitle);
        this.setAuthor(newAuthor);
    }
})();

//Public static method
Book.convertToTitleCase = function (inputString) {

};

//Public, non-privileged methods.
Book.prototype = {
    display: function () {

    }
};