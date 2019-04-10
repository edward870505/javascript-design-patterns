var Interface = require('../Interface.js');
var Library = require('../Library.js');

Library.addEvent(element, 'click', getBeerById);

function getBeerById(e) {
    var id = this.id;

    aysncRequest('GET', 'beer.uri?id=' + id, function (resp) {
        //Callback Response
        console.log('');
    });
}

function getBeerById(id, callback) {
    aysncRequest('GET', 'beer.uri?id=' + id, function (resp) {
        //Callback Response
        callback(resp.responseText);
    });
}

function getBeerByIdBridge(e){
    getBeerById(this.id,function(beer){
        console.log('');
    });
}