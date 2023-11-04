let score="33";

console.log(typeof score); // OR  console.log(typeof(score));

let valueInNumber=Number(score);
console.log(valueInNumber);
console.log(typeof valueInNumber);


let s=null;

console.log(typeof s);


//"33"=> 33 easily convert into number 
//"33absdb" => NaN 
//true =>1 / false=> 0

let isLoggedIn="abc"
//let isLoggedIn=""
//let isLoggedIn=1;
//let isLoggedIn=0;
let itsBoolean=Boolean(isLoggedIn);

console.log(typeof itsBoolean);

//1=> true/ 0=> false;
//"" => false
// "aasdbn"=> true

//convert number to String

let numberValue= 23;
console.log("The type of ${numberValue} is:"+ typeof numberValue);

let isString= String(numberValue);
console.log( "The type of ${numberValue} is:"+ typeof isString);
