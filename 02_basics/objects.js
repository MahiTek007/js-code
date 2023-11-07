//Singleton

// Object literals

// Object.create

let mySymbol= Symbol("Department Number:");

const app = {           // Object is nothing but a key value pair.
    name: "Mahendra",
    "full_name":"Mahendra Jalindar Tekude",
    age: 25,
    [mySymbol]: 100,
    email: "ychag@example.com",
    city: "Bangalore",
    country: "India",
    loginLastedTime: ["Monday","Saturday","Sunday"]
};

console.log(`Welcome user ${app.name}`);
console.log(`My full name is ${app.full_name}`);
console.log(app["full_name"]);
console.log(`My age is ${app.age}`);
console.log(`My email is ${app.email}`);
console.log(`My city is ${app.city}`);
console.log(`My country is ${app.country}`);
console.log(`My loginLastedTime is ${app.loginLastedTime}`);
console.log(`My ${mySymbol} is ${app[mySymbol]}`);