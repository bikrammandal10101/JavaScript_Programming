// JavaScript Arrow Function ✅ 

// this keyword
// this keyword refers to the object that is executing the current function.
/*
const person = {
    firstName: "Mr.",
    lastName: "Bikram",
    getFullName() {
        console.log(this.firstName + " " + this.lastName);
    }
};

person.getFullName();
*/

// try & catch 
// The try statement defines a block of code to be tested for errors.
// The catch statement defines a block of code to be executed if an error occurs.

try {
    // code to try
} catch (error) {
    // code to handle the error
}

/*
try {
    console.log(a);
} catch (error) {
    console.log(error);
    console.log("Variable a is not defined");
}
*/

// Miscellaneous Topics
// Arrow Function
// The arrow function is a new way to write functions in JavaScript.
/*
// Explicit Return
const sum = (a, b) => {
    return a + b;
}
console.log(sum(4, 5));

// Implicit Return
const mul = (a, b) => (
    a * b
);
console.log(mul(4, 5));

const square = num => {
    return num * num;
}
console.log(square(5));

const hello = () => {
    console.log("Hello");
}
hello();
*/

// Template Literal
// Template literals are strings that allow embedded expressions.
/*
const firstName = "Mr.";
const lastName = "Bikram";
const fullName = `${firstName} ${lastName}`;
console.log(fullName);
*/

// Destructuring
// Destructuring is a way to extract values from arrays or objects and assign them to variables.
/*
const person = {
    firstName: "Mr.",
    lastName: "Bikram",
    fullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
};

const { firstName, lastName } = person;
console.log(firstName);
console.log(lastName);
*/

// set timeout
// The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
/*
console.log("Hi there...");

setTimeout( () => {
    console.log("Chandigarh University (CU)...");
}, 2000);

console.log("Welcome to...");
*/

// set interval
// The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
/*
let timer = setInterval( () => {
    console.log("Chandigarh University (CU)...");
}, 2000);

clearInterval(timer);
*/

// this with Arrow Function
/*
const student = {
    name: "Bikram",
    marks: 81,
    prop: this, // Global Scope

    getName: function() {
        console.log(this);
        return this.name;
    },

    getMarks: () => {     // Parent Scope
        console.log(this);
        return this.marks;
    }

    getInfo1: function () {
        setTimeout( () => {
            console.log(this);    // Student Scope
        } , 2000);
    }

    getInfo2: function () {
        setTimeout( function() {
            console.log(this);    // Window Scope
        } , 2000);    
    }
};

student.getName();
student.getMarks();
student.getInfo1();
student.getInfo2();
*/

// this with Template Literal
/*
const person = {
    firstName: "Mr.",
    lastName: "Bikram",
    fullName: () => {
        console.log(`${this.firstName} ${this.lastName}`);
    }
};

person.fullName();
*/

// Qs. Write a arrow function that returns the square of a number n.
/*
const square = n => {
    return n * n;
}
console.log(square(5));
*/

// Qs. Write a function that prints "Hello World" 5 times at intervals of 2 seconds.
/*
let timer = setInterval(function() {
    console.log("Hello World");
}, 2000);

setTimeout(function() {
    clearInterval(timer);
}, 10000);
*/
