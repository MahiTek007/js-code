//Functrion to print the my name

let myName= "Mahendra Tekude";
 function sayMayName(name){
    console.log(name);
 }
//  sayMayName(myName);

function addNumbers(num1,num2){
    return num1+num2;
}
let result= addNumbers(10,20);
// console.log(result);

function userLogin(userName,password){
    if (userName==="Mahendra" && password==="123"){ 
        return `${userName} is logged in Successfully`;
    }else{
        return `${userName} is not logged in`;
    }
}
let result1= userLogin("Mahendra","123");
// console.log(result1);

function calculateCardPrice(...num1){
    return num1;                    //REST Operator
}
function calculateCardPrice(val1,val2,...num1){
    return val1,val2,num1;                    //REST Operator
}
// console.log(calculateCardPrice(1000,2000,3000,4000));

const user = {
    userName: "Mahendra",
    price: 1000,
    password: "<PASSWORD>"
}

function handleObject(obj){
        return ` ${obj.userName}\n ${obj.price}\n ${obj.password}`
}
console.log(handleObject(user));
console.log(handleObject({
    userName: "Samir",
    price: 1000,
    password: "<PASSWORD>"
}));


const myArray=[100,200,300,400,500,600];

function handleArray(arr){
    return ` ${arr[0]}\n ${arr[1]}\n ${arr[2]}\n ${arr[3]}\n ${arr[4]}\n ${arr[5]}`
}
console.log(handleArray(myArray));
console.log(handleArray([1, 2, 3, 4]));