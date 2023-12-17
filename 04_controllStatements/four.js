const array = [1,2,3,4,5,6,7,8,9];
const sum=array.reduce((acc,currentValue)=>{
    console.log(`acc ${acc} and currentValue ${currentValue}`);

    return acc+currentValue;
},0);
console.log(sum);



const shoppingCart = [
    
    {
        name: 'js',
        price:4999
    },{
        name: 'java',
        price:3999
    },{
        name: 'python',
        price:5999
    },
]

const coursePrice = shoppingCart.reduce((acc)=>{

})