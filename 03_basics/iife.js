//IIFE immediately invoked function expression

(function(){
    console.log(`DB connected successfully`);
})();

((name) =>{
    console.log(`DB connected successfully ${name}`);
})("MAHENDRA");

