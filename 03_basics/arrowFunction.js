const user = {
    name: "Mahendra",
    age: 25,
    city: "Bangalore",
    welcomeMessage: function() {
        console.log(`Welcome ${this.name}`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.name="Rahul";
// user.welcomeMessage();

//console.log(this);


// function cofee(){
//     let a = 10;
//     console.log(this.a);
// }
// cofee();

const chai = ()=> {
    let userName = "Mahendra";
    console.log(this.userName);
    console.log(this);
    console.log(userName);
}
// chai();

//Arrow Function

// const addTwoNumbers = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwoNumbers(10, 20)); 

//==OR== const addTwoNumbers = (num1, num2) => num1 + num2;
// console.log(addTwoNumbers(10, 20)); 

// const addTwoNumbers = (num1, num2) => (num1 + num2);
// console.log(addTwoNumbers(10, 20));

const user1 = {
    userName: "Mahendra",
    passwoerd: "123456789",
    address:{
        city: "Pune",
        state: "Maharashtra",
        country: "India"
    }
};

const users = ()=>{return user1}
console.log(users());

const myArray = [1, 2, 3, 4, 5];
myArray.forEach((item) => {
    console.log(item);
})