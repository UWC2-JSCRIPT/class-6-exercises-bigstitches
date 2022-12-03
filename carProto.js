/**
 * Car class
 * @constructor
 * @param {String} model
 */

class Car {
    constructor(model) {
        this.model = model;
        this.currentSpeed = 0;
        
        // instance methods
        /*
        this.accelerate = function () {
            this.currentSpeed++;
        }
        this.brake = function () {
            this.currentSpeed--;
        }
        */
    }
    
    // prototype methods - moved from instance so children classes can refer to them in their (the children's) methods
    accelerate () {
        this.currentSpeed++;
    }
    brake () {
        this.currentSpeed--;
    }
    
    toString = function () {
        return(`model:${this.model}, currentSpeed:${this.currentSpeed}`);
    }
    static sort(a, b) {
        return b.currentSpeed - a.currentSpeed;
    }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

const honda = new Car('Honda');
honda.accelerate();
honda.accelerate();
honda.brake();
console.log(honda.toString());

const mazda = new Car('Mazda');
mazda.accelerate();
mazda.accelerate();

const cars = [honda, mazda];
console.log(cars.sort(Car.sort));


class Porsche extends Car {
    constructor(model) {
        super('Porsche');
        this.turboCharged = true;
    }
}

const dreamCar = new Porsche('911');
console.log(dreamCar.toString());
// test
// console.log(`${dreamCar.turboCharged} ${honda.turboCharged}`);

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */
class ElectricCar extends Car {
    constructor(model, motor) {
        super(model);
        this.motor = 'electric';
        /*
        this.accelerate = function () {
            console.log('here');
            Car.prototype.accelerate();
            super.accelerate();
        }
        */
    }
    
    accelerate() {
        /*
        super.toString();
        super.__proto__;
        console.log(super.__proto__);
        console.log(super.toString(), 'here');
        console.log(this.__proto__.toString());
        console.log(Car.prototype)
        */
        // call parent prototype method twice 
        super.accelerate();
        super.accelerate();
        //super.accelerate();
    }
    // prototype method
    toString = function () {
        return(`Electric model:${this.model}, currentSpeed:${this.currentSpeed}`);
    }
}
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const polaris = new ElectricCar('Polaris');
polaris.accelerate();
polaris.accelerate();
polaris.brake();
console.log(polaris.toString());