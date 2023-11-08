//Singleton

// Object literals

// Object.create

const mySymbol=  Symbol("Department Number");

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
console.log(`My ${mySymbol.toString()} is ${app[mySymbol]}`);

// Object.keys

console.log(Object.keys(app));

// Object.values

console.log(Object.values(app));

// Object.entries

console.log(Object.entries(app));

// Object.assign

const newApp = Object.assign({},app);

console.log(newApp);

// Object.freeze

Object.freeze(newApp);

console.log(newApp);

// Object.seal

Object.seal(newApp);

console.log(newApp);

// Object.is

console.log(Object.is(newApp,app));

// Object.isExtensible

console.log(Object.isExtensible(newApp));           

// Object.preventExtensions

Object.preventExtensions(newApp);

console.log(Object.isExtensible(newApp));

// Object.getOwnPropertyDescriptor

console.log(Object.getOwnPropertyDescriptor(newApp,"name"));

// Object.getOwnPropertyNames

console.log(Object.getOwnPropertyNames(newApp));

// Object.getOwnPropertySymbols

console.log(Object.getOwnPropertySymbols(newApp));

// Object.isSealed

console.log(Object.isSealed(newApp));

// Object.isFrozen

console.log(Object.isFrozen(newApp));

/*   =================OUTPUT=====================================
 * Object.prototypeWelcome user Mahendra
My full name is Mahendra Jalindar Tekude
Mahendra Jalindar Tekude
My age is 25
My email is ychag@example.com
My city is Bangalore
My country is India
My loginLastedTime is Monday,Saturday,Sunday
My Symbol(Department Number) is 100
[
  'name',
  'full_name',
  'age',
  'email',
  'city',
  'country',
  'loginLastedTime'
]
[
  'Mahendra',
  'Mahendra Jalindar Tekude',
  25,
  'ychag@example.com',
  'Bangalore',
  'India',
  [ 'Monday', 'Saturday', 'Sunday' ]
]
[
  [ 'name', 'Mahendra' ],
  [ 'full_name', 'Mahendra Jalindar Tekude' ],
  [ 'age', 25 ],
  [ 'email', 'ychag@example.com' ],
  [ 'city', 'Bangalore' ],
  [ 'country', 'India' ],
  [ 'loginLastedTime', [ 'Monday', 'Saturday', 'Sunday' ] ]
]
{
  name: 'Mahendra',
  full_name: 'Mahendra Jalindar Tekude',
  age: 25,
  email: 'ychag@example.com',
  city: 'Bangalore',
  country: 'India',
  loginLastedTime: [ 'Monday', 'Saturday', 'Sunday' ],
  [Symbol(Department Number)]: 100
}
{
  name: 'Mahendra',
  full_name: 'Mahendra Jalindar Tekude',
  age: 25,
  email: 'ychag@example.com',
  city: 'Bangalore',
  country: 'India',
  loginLastedTime: [ 'Monday', 'Saturday', 'Sunday' ],
  [Symbol(Department Number)]: 100
}
{
  name: 'Mahendra',
  full_name: 'Mahendra Jalindar Tekude',
  age: 25,
  email: 'ychag@example.com',
  city: 'Bangalore',
  country: 'India',
  loginLastedTime: [ 'Monday', 'Saturday', 'Sunday' ],
  [Symbol(Department Number)]: 100
}
false
false
false
{
  value: 'Mahendra',
  writable: false,
  enumerable: true,
  configurable: false
}
[
  'name',
  'full_name',
  'age',
  'email',
  'city',
  'country',
  'loginLastedTime'
]
[ Symbol(Department Number) ]
true
true
 */