//const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = "1234abcd";
tinderUser.name="ABC";
tinderUser.email="abc@google.com";
tinderUser.isLoggedIn = false;

// console.log(tinderUser.id + "\n " + tinderUser.name + "\n " + tinderUser.email);

const regularUser = {
    email: "nnheo@example.com",
    fullName:{
        firstName: "Mahendra",
        lastName: "Tekude"
    },
    isLoggedIn: false,
    password: "<PASSWORD>"


};
// console.log(`My name is ${regularUser.fullName.firstName} ${regularUser.fullName.lastName},\n my email is ${regularUser.email},\n and my Login Status is ${regularUser.isLoggedIn}`);

//combine the two objects to create a new object with the assigned values

const obj1 = {
    1: "one",
    2: "two",
    3: "three"
};

const obj2 = {
    4: "four",
    5: "five",
    6: "six"
};

// const obj3 = {  obj1,obj2};
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1,...obj2};
// console.log(obj3);


const users = [
    {
        id: 1,
        name: "Mahendra",
        email: "<EMAIL>",
        isLoggedIn: false
    },
    {
        id: 2,
        name: "Rushi",
        email: "<EMAIL>",
        isLoggedIn: false
    },
    {
        id: 3,
        name: "Vaibhav",
        email: "<EMAIL>",
        isLoggedIn: false
    }
];

// console.log(users[0].id);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("id"));