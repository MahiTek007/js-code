const myCoding=[
    {
        language: "javascript",
        languageExtension: ".js"
    },
    {
        language: "python",
        lengthExtension: ".py"
    }
];

let val=myCoding.forEach(element => {
    console.log(element);
    return element;
});
console.log(val);


const myArray=[1,2,3,4,5,6,7,8];
const evenNumber=myArray.filter( element => {
    return element % 2 === 0;
})
evenNumber.forEach(element => console.log(element));
 
const oddNumber=[];
myArray.forEach(
    element=>
{
    if(element % 2!== 0){
        oddNumber.push(element);
    }
}
);
for (const key in oddNumber) {
   console.log(oddNumber[key]);
}


const books=[
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1994 },
    { title: "Jurassic Park", author: "Michael Crichton", year: 1995 },
    { title: "James House", author: " James House", year: 1999 },
    { title: "John Haddon", author: "John Haddon", year: 1999 },
    { title: " Harry Potter and the Chamber of Secrets", author: "J.K. Row", year: 1994 },
    { title: "The Lion King", author: " James House", year: 1999 },
    { title: "The Lord of Secrets", author: "J.K. Row", year: 1994 },
    { title: "The Lord of the Rings: The Return of the King", author: "J.K. Rowling", year: 1994 }
];
console.log(books.filter(book => book.year === 1994));


const num=[1,2,3,4,5,6,7,8,9,10];
const newNum=num.map( element =>{
    return Number(element+""+element);
})
console.log(
    newNum.filter(element => element % 2 === 0)
);

const newNum2=num.map(element => element*2).
                map(number => number+10).
                filter(number => {
                    return number%2===0;
                });
console.log(newNum2);

