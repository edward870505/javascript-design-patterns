var Book = function (isbn, titile, author) {
    if (!this.checkISBN(isbn)) throw new Error("Book : Invalid ISBN");
    this.isbn = isbn;
    this.title = title || 'No title specified';
    this.author = author || 'No author specified';
}

Book.prototype = {
    checkISBN: function (isbn) {
        if (isbn == undefined || typeof isbn != 'string') {
            return false;
        }

        isbn = isbn.replace(/-/, ''); //Remove dashes
        if (isbn.length != 10 && isbn.length != 13) {
            return false;
        }

        var sum = 10;
        if (isbn.length === 10) { //10 digit ISBN
            
        }


    }
};