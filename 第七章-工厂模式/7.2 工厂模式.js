var Interface = require('../Interface.js');
var Library = require('../Library.js');


/** The Bicycle interface.*/
var Bicycle = new Interface.Interface('Bicycle',['assemble','wash','ride','repair']);

/**Bicycle class (abstract). */
var BicycleShop = function(){};

BicycleShop.prototype = {
    sellBicycle:function(model){
        var bicycle = this.createBicycle(model);
        bicycle.assemble();
        bicycle.wash();

        return bicycle;        
    },
    createBicycle:function(model){
        throw new Error('Unsupported operation on an abstract class.');
    }
};

/** AcmeBicycleShop class.*/
var AcmeBicycleShop = function(){
    Library.extend(AcmeBicycleShop, BicycleShop);
    AcmeBicycleShop.prototype.createBicycle = function(model){
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
}