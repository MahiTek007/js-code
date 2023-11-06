const marvel_heroes = ["Thor", "Luke", "Han", "Leia"];
const dc_heroes = ["superman", "captain", "iron man", "hulk", "wizard"];

// marvel_heroes.push(...dc_heroes);
const all_Heroes=marvel_heroes.concat(...dc_heroes);

console.log(all_Heroes);

const all_NewHeroes= [...marvel_heroes,...dc_heroes];
console.log(all_NewHeroes);

const all_NewHeroes2= [...marvel_heroes,...dc_heroes];
console.log(all_NewHeroes2);

const anotherArray=[1,2,3,4,[5,6],[7,[8,9],10]];

const anotherArray2= anotherArray.flat(Infinity);
console.log(anotherArray2);


//INTERESTING  ARRAY
console.log(Array.isArray("Mahendra"));
console.log(Array.from("Mahendra"));
console.log(Array.of("Mahendra"));
console.log(Array.from({name: "Mahendra"}));
console.log(Array.of({name: "Mahendra"}));

const score=100 
const score2=200;
const score3=300;
console.log(Array.of(score,score2,score3));


