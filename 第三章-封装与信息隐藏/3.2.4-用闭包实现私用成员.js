//Interface Constructor.
var Interface = function (name, methods) {
    if (arguments.length != 2) {
        throw new Error('Interface constrcutor called with' + arguments.length + 'arguments, but expexted exactly 2.');
    }
    this.name = name;
    this.methods = [];
    for (var i = 0, len = methods.length; i < len; i++) {
        if (typeof methods[i] !== 'string') {
            throw new Error('Interface constructor expects method names to ' +
                'passed in as a string');
        }
        this.methods.push(methods[i]);
    }
}

//Interface Static class method
Interface.ensureImplements = function (object) {
    if (arguments.length < 2) {
        throw new Error("Function Interface.ensureImplements called with" +
            arguments.length + "arguments, but expected at least 2.");
    }

    for (var i = 1, len = arguments.length; i < len; i++) {
        var interface = arguments[i];
        if (interface.constructor !== Interface) {
            throw new Error("Function Interface.ensureImplments expects arguments" +
                "two and above to be instances of Interface.");
        }
        for (var j = 0, methodsLen = interface.methods.length; j < methodsLen; j++) {
            var method = interface.methods[j];
            if (!object[method] || typeof object[method] !== 'function') {
                throw new Error("Function Interface.ensureImplements: object " +
                    "does not implement the " + interface.name +
                    " interface. Method " + method + " was not found.");
            }
        }
    }
}

//Book类
var Book = function (newIsbn, newTitle, newAuthor) {

    //Private attributes 
    //私有属性
    var isbn, title, author;

    //Private method.
    //私有方法
    function checkIsbn(isbn) {
        if (isbn == undefined || typeof isbn != "string") {
            return false;
        }

        isbn = isbn.replace(/-/, ""); //Remove dashes
        if (isbn.length != 10 && isbn.length != 13) {
            return false;
        }

        var sum = 0;
        if (isbn.length === 10) {
            //10 digit ISBN
            if (!isbn.match(/^\d{9}/)) {
                //Ensure characters 1 through 9 are digits.
                return false;
            }

            for (var i = 0; i < 9; i++) {
                sum += isbn.charAt(i) * (10 - 1);
            }

            var checksum = sum % 11;
            if (checksum === 10) checksum = "X";
            if (isbn.charAt(9) != checksum) {
                return false;
            }
        } else {
            //12 digit ISBN
            if (isbn.match(/^\d{12}/)) {
                //Ensure characters 1 through 12 are digits.
                return false;
            }

            for (var i = 0; i < 12; i++) {
                sum += isbn.charAt(i) * (i % 2 === 0 ? 1 : 3);
            }

            var checksum = sum % 10;
            if (isbn.charAt(12) != checksum) {
                return false;
            }
        }
        return true; // All tests passed.
    }

    //Privileaged methods 
    //特权方法，可以访问私有属性的公用方法
    this.getIsbn = function () {
        return this.isbn;
    };
    this.setIsbn = function (newIsbn) {
        //if (!checkIsbn(newIsbn)) throw new Error('Book : Invalid ISBN.');
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
    //初始化操作
    this.setIsbn(newIsbn);
    this.setTitle(newTitle);
    this.setAuthor(newAuthor);


    //Public, non-privileged methods. 
    //公用，非特权方法，只能间接访问属性
    Book.prototype = {
        display: function () {

        }
    }
}


//Novel类
var Novel = function (newIsbn, newTitle, newAuthor,language) {
    Novel.superclass.constructor.call(this,newIsbn,newTitle,newAuthor);
    this.language = language || 'No language specified';
};

extend(Novel,Book);

//类继承函数extend()
function extend(subClass, superClass) {
    var F = function () {};
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;

    subClass.superclass = superClass.prototype;
    if (superClass.prototype.constructor == Object.prototype.constructor) {
        superClass.prototype.constructor = superClass;
    }
}

var novel = new Novel('9787559608567','黑鹤动物传奇故事:我在草原上的牧羊犬','格日勒其木格');
console.log(novel.getIsbn());

