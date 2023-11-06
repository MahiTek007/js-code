// Primitive Data Types
// 7 Types : String, Number, Boolean, Undefined, Null, Symbol,BigInt

const score =100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp=null;
let useEmail;


const id= Symbol('200');
const anotherId= Symbol('200');
//console.log(id===anotherId); false;

const bigNumber =200121233355454545545455454n;

// Refrence Type/ Non Primitive : Object, Array, Function


const users = ["a", "b", "c", "d", "e"];

const myObject= {
    name: "John",
    age: 30,
    isLoggedIn: true,
    email: "<EMAIL>"
}

const myFunction = function () {
    console.log("Hello World");
}

console.log(typeof myFunction === "function");  