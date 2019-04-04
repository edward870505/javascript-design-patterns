var Interface = require('../Interface.js');
var Library = require('../Library.js');

/** BicycleShop class.*/

/** The Bicycle interface.*/
var Bicycle = new Interface.Interface('Bicycle',['assemble','wash','ride','repair']);

/** Speedster class.*/
var Speedster = function(){

};
Speedster.prototype = {
    assemble:function(){
        
    },
    wash:function(){

    },
    ride:function(){

    },
    repair:function(){

    }
};

var BicycleShop = function () {
    BicycleShop.prototype = {
        sellBicycle: function (model) {
            var bicycle;

            bicycle = BicycleFactory.createBicycle(model);

        
            bicycle.assemble();
            bicycle.wash();
        
        }
    };
};

/**BicycleFactory namespace, with more models. */
var BicycleFactory = {
    createBicycle:function(model){
        var bicycle;
        
        switch (model) {
            case 'The Speedster':
                bicycle = new Speedster();
                break;
            case 'The Lowrider':
                bicycle = new Lowrider();
                break;
            case 'The Comfort Cruiser':

            default:
                bicycle = new ComfortCruiser();
        }

        Interface.Interface.ensureImplements(bicycle, Bicycle);

        return bicycle;
        
    }
};