// Spread Operator

const number = [1, 2, 3, 4, 5];
const number2 = [6, 7, 8, 9, 10];
const numberCopy = [...number, ...number2];

console.log(numberCopy);

// for loop

const numArray = [1, 2, 3, 4, 5];


for (num of numArray){
    console.log(num);
}

const course = "client-side-scripting";

for (letter in course){
    console.log(letter);
}

// JS Object

const car = {
    type: "SUV",
    make: "Honda",
    year: 2015
};

console.log(car);
console.log(car.type);
console.log(car.year);

// Maps

const fruits = new Map([
    ["apple", 500],
    ["bannanas", 300]
])

console.log(fruits);
console.log(fruits.get("bananas"));

// Sets (ONLY unique values)
const letter = new Set();
letters.add("a");
letters.add("a");
letters.add("a");
letters.add("b");

// Classes
class Animal {
    constructor(species, mumOfLegs, canSwim, canFly){
        this.species = species;
        this.numOfLegs = this.numOfLegs
        this.canSwim = canSwim;
        this.canfly = canfly;
    }
};

const cat = new Animal ("Persian Cat", 4, true, false);

console.log(cat);