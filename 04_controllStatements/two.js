// //Looping Statement

// const codings =['js','java',"python","cpp"];
// let i=1;
// codings.forEach((item)=>{
//     console.log("Coding Languages",`${i++} is:`,item);
// })

// const myNumber=[1,2,3,4,5,6,7,8,9]
// const newNum= myNumber.filter((ietm)=>ietm>5)
// console.log(`Numbers are greater than 5 is` );
// newNum.forEach((num)=>console.log(`${num}`));



const books=[
    { bookId:1,bookName:'The India Story' ,authorName:'Bimal Jalal', bookEditions:2, publishYear:1999},
    { bookId:2,bookName:'Listen to Your Heart: The London Adventure', authorName:'Ruskin Bond', bookEditions:3,publishYear:2000},
    { bookId:3,bookName:'Business of Sports: The Winning Formula for Success', authorName:'Vinit Karnik', bookEditions:5,publishYear:2000},
    { bookId:4,bookName:'A Place Called Home', authorName:'Preeti Shenoy', bookEditions:5,publishYear:2001},
    { bookId:5,bookName:'Modi @20: Dreams Meeting Delivery', authorName:'VP Venkaiah Naidu', bookEditions:5,publishYear:2015}
]

const userSelect= books.filter(book => book.bookEditions===2);
userSelect.forEach((book)=>{
    console.log(`Book Id is ${book.bookId}\n Book Name is: ${book.bookName}`);
})