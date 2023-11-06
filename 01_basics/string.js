const name = "Mahendra Tekude";
const repoCount = 50;


console.log(`My name is ${name} and repo count is ${repoCount}`);
//String interpolation

const gamename = new String("Cricket");
console.log(gamename);

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(`The game name length is ${gamename.length}`);
console.log(`The game name is ${gamename.toUpperCase()}`);
console.log(`The game name is ${gamename.toLowerCase()}`);

console.log(`The game name starts with ${gamename.startsWith("Cri")}`);
console.log(`The game name ends with ${gamename.endsWith("ket")}`);

console.log(`The game name contains ${gamename.includes("ket")}`);

console.log(gamename.charAt(3));
console.log(gamename.indexOf("ket"));
console.log(gamename.substring(1,3));
