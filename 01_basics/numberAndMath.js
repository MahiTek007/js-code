const score = 100;
console.log(`score is ${score} and its type is ${typeof score}`);

const balance= new Number(100);
console.log(`balance is ${balance} and its type is ${typeof balance}`);


const toString = balance.toString();
console.log(`toString is ${toString} and its type is ${typeof toString}`);

console.log(balance.toFixed(2));

const otherNumber=100000000;
console.log(`otherNumber is ${otherNumber} and its type is ${typeof otherNumber} and its represent in indian standerders ${otherNumber.toLocaleString("en-IN")}\n\n\n\n\n\n`);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++Math+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 console.log(Math);
 console.log(Math.PI);
 console.log(Math.abs(-4));
 console.log(Math.floor(4.5));
 console.log(Math.round(4.6));
 console.log(Math.round(4.2));
 console.log(Math.ceil(4.5));
 console.log(Math.sqrt(4));
 console.log(Math.pow(4,2));
 console.log(Math.max(10,20)); 
 console.log(Math.min(10,20));
 console.log(Math.random());    
 console.log((Math.random() * 100)+1);
 console.log(Math.floor(Math.random() * 100)+1);
 console.log(Math.ceil(Math.random() * 100+1));



const min=10;
const max=20;

let randomNumber=Math.floor(Math.random()*(max-min+1))+min;
console.log(randomNumber);


