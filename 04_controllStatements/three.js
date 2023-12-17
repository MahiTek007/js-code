const myNumber =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

const newNum=myNumber.map((number)=>{ 
    return number*2;
})

const newNum1=newNum.map((number)=>{
    if(number>10) return number;
})
newNum1.forEach((num)=>{
    console.log(`Number  ${num}`)
})


const numbers= myNumber.map((number)=>number*10).
                        map((num)=>num+1)
                        .filter((num)=>num>10);
console.log(`Number ${numbers}`);