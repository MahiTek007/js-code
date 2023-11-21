//Map

let myMap = new Map();
myMap.set(1, "a");
myMap.set(2, "b");
myMap.set(3, "c");
myMap.set(4, "d");

console.log(myMap);

for (const [key, value] of myMap){
    console.log(`Kay : ${key} And Value: ${value}`);
}

const myObject = {
    'game1':'NFS',
    'game2':'SPIDER_MAN'
}
// for (const [key,value] of myObject) {
//     console.log(`${key} : ${value}`);
// }

const myObj={
    js:"javascript",
    html:"html",
    css:"css",
    cpp:"c++",
    java:"java"

}
//for in loop
for (const key in myObj) {
  console.log(`${key} shortcut for ${myObj[key]}`);
}


const programmingLanguages = ["Java", "JavaScript", "JavaScript","html", "CSS", "C++", "C#", "Python", "PHP", "Ruby"];

for (const [key] in programmingLanguages) {
    console.log(`${Number(key)+1} : ${programmingLanguages[key]}`);
}


for (const key in myMap) {
    console.log(`${key}`);
 }

for (const key of myMap) {
   console.log(`${key}`);
}



//