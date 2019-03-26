var Book = function (isbn, titile, author) {
    if (!this.checkISBN(isbn)) throw new Error("Book : Invalid ISBN");
    this.isbn = isbn;
    this.title = title || 'No title specified';
    this.author = author || 'No author specified';
}

Book.prototype = {
    checkISBN: function (isbn) {
        if(isbn == undefined || typeof isbn !='string'){
            return false;
        }

        isbn = isbn.replace(/-/,'');//Remove dashes
    }
};