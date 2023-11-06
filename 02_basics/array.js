//array

let myArray = [1,2,3,4,5,6,7,8,9,10];
console.log(myArray);
console.log(myArray.length);
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[myArray.length-1]);
//Array Methods

myArray.push(100);      //add element to the end of the array
console.log(myArray);

myArray.unshift(100);    //add element to the beginning of the array
console.log(myArray);

myArray.shift(); //remove element to the beginning of the
console.log(myArray);

myArray.pop(); //remove element to the end of the array
console.log(myArray);

myArray.reverse(); //reverse the order of the array
console.log(myArray);

myArray.sort(); //sort the array in ascending order
console.log(myArray);

myArray.splice(2,1); //remove element at index 2
console.log(myArray);

myArray.includes(100); //check if the element is present in the array
console.log(myArray.includes(100));

myArray.indexOf(100); //find the index of the element
console.log(myArray.indexOf(100));

myArray.lastIndexOf(100); //find the last index of the element in the array
console.log(myArray.lastIndexOf(100));

const newArray = myArray.join();
console.log(newArray);


//diffrence between slice ,splice
const myArray1= [1,2,3,4,5,6,7,8];
console.log(`slice Method used\nA : ${myArray1}`);

const nArray = myArray1.slice(1,5);
console.log(`slice Method used\n a : ${nArray}`);

console.log(`B : ${myArray1}`);

const mArray = myArray1.splice(1,5);
console.log(`slice Method used\n b : ${mArray}`);

console.log(`C : ${myArray1}`);


