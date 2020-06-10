/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
}
Airplane.prototype.takeOff = function() {
    this.isFlying = true;
};
Airplane.prototype.land = function() {
    this.isFlying = false;
};

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.speak = function personToString() {
        return `Hi, my name is ${name}, and I am ${age} years old.`;
    };
    this.stomach = stomach;
}

Person.prototype.toString = function personToString() {
    return `Hi, my name is ${this.name}, and I am ${this.age} years old.`;
};

let stomach = [];

const phil = new Person({
    name: "Phil",
    age: 38
});

// console.log(phil);

Person.prototype.eat = function(someFood) {
    if (stomach.length < 10) {
        stomach.push(someFood);
    }
    return stomach;
};

Person.prototype.poop = function() {
    if (stomach.length >= 10) {
        stomach.splice(0, stomach.length);
    }
    return `Whew, stinky!`;
};

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = tank;
    this.odometer = odometer;
}

let tank = 0;
let odometer = 0;

const Cruze = new Car({
    model: "Cruze",
    milesPerGallon: 26,
    tank: tank,
    odometer: odometer
});

console.log(Cruze);

Car.prototype.fill = function(gallons) {
    this.tank = this.tank + gallons;
};

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
    Person.call(this, name, age, favoriteToy);
    this.name = name;
    this.age = age;
    this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);

const lucy = new Baby({
    isChild: true,
    name: "Lucy",
    age: 5,
    favoriteToy: "trains"
});

console.log(lucy);

Baby.prototype.play = function() {
    return `Playing with ${this.favoriteToy}`;
};

lucy.play();

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Global Binding links 'this' to the entire page. Bad form.
  2. Implicit Binding applies 'this' to the object it was created in. 
  3. New Binding works inside a constructor function and applies to the object created by the constructor.
  4. Explicit Binding is used when using .call or .apply to alter the values set by a constructor.
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== "undefined") {
    module.exports = module.exports || {};
    if (Airplane) {
        module.exports.Airplane = Airplane;
    }
    if (Person) {
        module.exports.Person = Person;
    }
    if (Car) {
        module.exports.Car = Car;
    }
    if (Baby) {
        module.exports.Baby = Baby;
    }
}