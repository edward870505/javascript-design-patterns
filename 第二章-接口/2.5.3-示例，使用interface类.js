//Constructor.
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

//Static class method
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


//ResultSet Interface.
var ResultSet = new Interface('ResultSet',['getDate','getResults']);


//ResultFormatter class, before we implement interface checking
var ResultFormatter = function(resultObject){
    /** 
     * 删除instanceof检查，用接口替代它    
     * if(!(resultObject instanceof TestResult)){
        throw new Error("ResultFormatter : constructor requires an instance "+
                        " of TestResult as an argument.");
        }
    */

    Interface.ensureImplements(resultObject,ResultSet);
    this.resultObject = resultObject;
}

ResultFormatter.prototype.renderResults = function(){
    var dateOfTest = this.resultsObject.getDate();
    var resultArray = this.resultObject.getResults();

    var resultContainer = document.createElement('div');

    var resultHeader = document.createElement('h3');
    resultHeader.innerHTML = 'Test Results from'+ dateOfTest.toUTCString();
    resultsContainer.appendChild(resultHeader);

    var resultsList = document.createElement('ul');
    resultContainer.appendChild(resultsList);

    for(var i=0, len = resultArray.length; i<len; i++){
        var listItem = document.createElement('li');
        listItem.innerHTML = resultArray[i];
        resultsList.appendChild(listItem);
    }

    return resultContainer;
};







