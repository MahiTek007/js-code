let a= 10;
const b = 20;
var c = 30;

if (true) {         
    let a= 20;
    // b=30;  we can not reinitialized vslue of b beacuse its a constant value
    c=33;
    console.log(a,b,c);
}

console.log(` a: ${a}\n b: ${b}\n c: ${c}`);


function one() {      
    const userName="Mahendra"
    function two(){
        const webside="youtube.com";
        console.log(userName);
        console.log(webside);
    }
    // console.log(webside);
    two();
}one();

if (true) {
    const userName="Mahendra"
    function two(){
        const webside="youtube.com";
        console.log(userName);
        console.log(webside);
    }
    //  console.log(webside);
    two();
}



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function addOne(num){
    return num+1;
}
const aone=addOne(10);
console.log(aone);

const atwo= function addTwo(num){
    return num+2;
}

console.log(atwo(10));
