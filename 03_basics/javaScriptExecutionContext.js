

// JavaScript Execution context
 
/*  |--------|
    |  { }   | GLOBAL EXECUTION CONTEXT ---Refers- this Keyword is used to create a new object
    |--------|
*/ 

// 1. GLOBAL EXECUTION CONTEXT 
// 2. FUNCTION EXECUTION CONTEXT
// 3. EVAL EXECUTION CONTEXT 
/*  |--------|
    |  { }   |
    |--------|
*/


// 1. GLOBAL EXECUTION CONTEXT

/*  |--------|
    |  { }   |  MEMORY CREATION PHASE
    |--------|
*/ 
//  =>EXECUTION PHASE


// Program 1 for JavaScript Execution 

let val1=10;
let val2=20;

function add(num1,num2){
    let result= num1+num2;
    return result;
}

let result1=add(val1,val2);
let result2=add(10,3);

console.log(`result is ${result1} and result2 is ${result2}`);

// OUTPUT IS result1 is ${result1} and result2 is ${result2}



/*
 1. |--------|
    |  { }   |
    |--------|    GLOBAL EXECUTION POINT THIS


 2. MEMORY CREATION PHASE
        val1=undefined;
        val2=undefined;
        add(val1,val2)=defination; 
        result1=undefined;
        result2=undefined;

 3. EXECUTION PHASE
    val1=10;
    val2=20;
    1)add(val1,val2); ====>
    |--------|
    | NVE +ET| NEW VARIABLES ENVIRONMENT + EXECUTION THREAD
    |--------|
        |
        |
        |==>1.MEMORY CREATION PHASE
                num1=undefined;
                num2=undefined;
                result=undefined;
             
             2.EXECUTION PHASE
                num1=10;
                num2=20;
                result=30;
                return result;
    result1=30;

    After the execution of the function, delete the execution thread and return the result

    2)add(10,3); ====>
    |--------|
    | NVE +ET| NEW VARIABLES ENVIRONMENT + EXECUTION THREAD
    |--------|
        |
        |
        |==>1.MEMORY CREATION PHASE
                num1=undefined;
                num2=undefined;
                result=undefined;
             
             2.EXECUTION PHASE
                num1=10;
                num2=3;
                result=13;
                return result;
    result2=13;
    After the execution of the function, delete the execution thread and return the result


*/

let num1=10;
let num2=20;

function add(num1,num2){
    let result= num1+num2;
    return result;
}
function subtract(num1,num2){
    let result= num1-num2;
    return result;
}
function operations(val1,val2){
    result1=add(val1,val2);
    result2=subtract(val1,val2);
    return [result1,result2];
}
let [a,b]=operations(num1,num2);
console.log(`result1 is ${a} and result2 is ${b}`);

/*
    1.  
    |--------|
    |  { }   |
    |--------|GLOBAL EXECUTION POINT THIS

    2.MEMORY CREATION PHASE
        num1=undefined;
        num2=undefined;
        operations(num1,num2)=defination; 
        a=undefined;
        b=undefined;
    

    3.EXECUTION PHASE
        num1=10;
        num2=20;
        1)operations(num1,num2); ====>
            |--------|
            | NVE +ET| NEW VARIABLES ENVIRONMENT + EXECUTION THREAD
            |--------|
                |
                |
                |==>1.MEMORY CREATION PHASE
                        val1=undefined;
                        val2=undefined;
                        add(val1,val2)=defination; 
                        result1=undefined;
                        sub(result1,result2)=undefined;
                        result2=undefined;

                    2.EXECUTION PHASE
                        val1=10;
                        val2=20;
                        1) add(num1,num2); ====>
                                 |--------|
                                 | NVE +ET| NEW VARIABLES ENVIRONMENT + EXECUTION THREAD
                                 |--------|
                                     |
                                     |
                                     |==>1.MEMORY CREATION PHASE
                                            num1=undefined;
                                            num2=undefined;
                                            result=undefined;

                                        2.EXECUTION PHASE
                                            num1=10;
                                            num2=20;
                                            result=30;
                                            return result;

                                After the execution of the function,delete the execution thread and return the result
                            
                        result1=30;
                            
                        2)subtract(num1,num2); ====>
                                |--------|
                                | NVE +ET| NEW VARIABLES ENVIRONMENT + EXECUTION THREAD
                                |--------|
                                    |
                                    |
                                    |==>1.MEMORY CREATION PHASE
                                            num1=undefined;
                                            num2=undefined;
                                            result=undefined;
                                        
                                        2.EXECUTION PHASE
                                            num1=10;
                                            num2=20;
                                            result=-10;
                                            return result;

                                After the execution of the function,delete the execution thread and return the result

                        result2=-10;

                     After the execution of the function,delete the execution thread and return the result
        a=result1;
        b=result2;

        result1 is ${a} and result2 is ${b} 

*/