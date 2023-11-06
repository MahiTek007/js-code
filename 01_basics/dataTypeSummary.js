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

// console.log(typeof myFunction === "function");  

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive Data Types), Heap(Non Primitive Data Types).

let myname = "Mahendra Tekude";
let myAge = 30;
let myAnotherName = myname;
myAnotherName="Mahendra";

console.log(`My name is ${myname}`);
console.log(`my Another name is ${myAnotherName}`);

const user1 = {
    name: "John",
    age: 30,
    isLoggedIn: true,
    email: "<EMAIL>"
}
const user2 = user1;
user2.name = "Mahendra";
console.log(user1.name);
console.log(user2.name);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++