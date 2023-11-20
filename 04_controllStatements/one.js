// Conditional Statements

// use conditional Operators to check whether the expression  is a conditional   statement and  return  true  if so ( else  return false).
// conditional /Comparison Operators: <,>,<=,>=,==,!=,===,!==,&&,||,!

// There are 3 different conditional statements
// 1. if(condition){}         // if

//write a program to check whether the number is equal to 10 or not.
  let num =10 ;
      if(num==10){
        console.log(`num is equal to ${num}`);
      }



// 2. if(condition){}else{}   // else if
// Write a program to check whether the number is even or not.
let a=10;
if(a%2==0){
    console.log(`${a} is even Number`);
}else{
    console.log(`${a} is Odd Number`);
}

// 3. if(condition){}else if(condition){}else if(condition){}else{} //else if ladder
// Write a Program to Calculate Grade According to marks   

let marks=53;
if(marks>=90){
    console.log(`Your Mark is${marks} grade is O`);
}else if(marks>=80){
    console.log(`Your Mark is${marks} grade is A`);
}else if(marks>=70){
    console.log(`Your Mark is${marks} grade is B`);
}else if(marks>=60){
    console.log(`Your Mark is${marks} grade is C`);
}else if (marks>=50) {
    console.log(`Your Mark is${marks} grade is D`);
}else if(marks>=40){
    console.log(`Your Mark is${marks} grade is E`);      

}else{
    console.log(`Your Mark is${marks} grade is F`);
}

//4.switch Statements

// the switch statement is used to check the condition of the switch statement.
// Write a check the months wheither the month days
let year = 2023;
let month=10;
switch(month){
    case 1:{
        console.log(`January  month number is ${month} and day =31`);
        
        break;
    }
    case 2:{
        console.log(`February`);
        if(year%4==0){
        log(`${year} year is a leap year and day is 29`);
        }else{
            console.log(`${year} year is not a leap year and day is 28`);
        }
        break;
    }
    case 3:{
        console.log(`March  month number is ${month} and day =31`);
        break;
    }
    case 4:{
        console.log(`April  month number is ${month} and day =30`);
        break;
    }
    case 5:{
        console.log(`May month number is ${month} and day =31`);
        break;
    }
    case 6:{
        console.log(`June month number is ${month} and day =30`);
        break;
    }
    case 7:{
        console.log(`July month number is ${month} and day =31`);
        break;
    }
    case 8:{
        console.log(`August month number is ${month} and day =31`);
        break;
    }
    case 9:{
        console.log(`September month number is ${month} and day =30`);
        break;
    }
    case 10:{
        console.log(`October month number is ${month} and day =31`);
        break;
    }
    case 11:{
        console.log(`November month number is ${month} and day =30`);
        break;
    }
    case 12:{
        console.log(`December month number is ${month} and day =31`);
        break;
    }
    default:{
        console.log(`Invalid Month`);
        break;
    }

    // falsy values are ===> false,0,-0, Bigint 0n,"",NaN,null,undefined

    // truthy values are ===> true," ",false",'0',[],{},()=>{},function(){}

}

// let userEmail = "kenaa@example.com";

let userEmail = [];
if(userEmail.length===0){
    // console.log("Array is empty");
}


const user ={};

if (Object.keys(user).length === 0) {
    console.log(
        "Object is empty",
    );
}

// Nullish Coalescing Operators (??): null,undefined

let val1;
val1=5??10;
console.log(val1);
val1=null??10;
console.log(val1);
val1=undefined??10;
console.log(val1);
val1=null??10??20;

console.log(val1);

//Ternary Operators: 

// condition? true: false;

const iceTeaPrice=100;
iceTeaPrice<=80?console.log(`ice tea price is ${iceTeaPrice}`):console.log(`ice tea price is not enough to`);
