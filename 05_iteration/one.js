//
// looping Statements

// 1) for loop

    for (let i = 0; i <10; i++) {
        const element = i;
        if (element=== 5-1) {
            // console.log(`Element ${element+1} is Best Number`);
        }else{
            // console.log(`Element ${element+1} is printed`)
        }
    }
    
    for (let i = 0; i <10; i++) {
       console.log(`Table  Of  ${i+1} is :\n`)
       for (let j = 0; j <10; j++) {
        console.log(`${i+1} * ${j+1}= ${(i+1)*(j+1)}`);
        
       }
       console.log("\n");
    }


let array = ["a", "b", "c", "d", "e"];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(`Element ${element}`);
}

// 2) while loop
     let i=0;
     while (i < 10) {
        console.log(`Value ${i+1} is printed`);
        i++;
     }

     let myArray = ["a", "b", "c", "d", "e"];
     i= 0;
     while (i < myArray.length) {
        const element = myArray[i];
        console.log(`Element ${element}`);
        i++;
     }

// 3) do while loop
    i=0;
    do {
        console.log(`Value ${i+1} is printed`);
        i++;
    } while (i < 10);

    let myArray2 = ["a", "b", "c", "d", "e"];
    i=0;
    do {
        console.log(`Element ${myArray2[i]}`);
        i++;
    } while (i < myArray2.length);


// 4) for in loop


// 5) for of loop
    let myArray3=[1,2,3,4,5,6,7,8,9];

    for (const inum of myArray3) {
        console.log(`Element ${inum}`);
    }

    const greetings ="Hello World";
    for (const greet of greetings) {
        console.log(`Each char ${greet}`);
    }
// 6) for each loop

function printMe(elelments) {
    console.log(`Elements ${elelments}`);
}
    const pl=["js","html","css","php","java","python","c++","c#","c++","c#","c++","c"];
    pl.forEach(
        (element)=>{
            console.log(`Each element ${element}`);
        }
    )
    pl.forEach(printMe);

    pl.forEach(element=>console.log(`Each element ${element}`));

    pl.forEach((element,index,array)=>console.log(`Each element ${element} at index ${index} and array ${array}`));

    const myCode=[
        {
            languageName:"JavaScript",
            languageExtension:".js"
        },
        {
            languageName:"Java",
            languageExtension:".java"
        },
        {
            languageName:"Python",
            languageExtension:".py"
        }
    ];

    myCode.forEach(element =>{
        console.log(`Language Name is ${element.languageName} and Language Extension is ${element.languageExtension}`);
    })

// 7) break statement
for (let i = 0; i < 20; i++) {
    if (i === 5-1) {
        console.log(`Value ${i+1} is Detected`);
        break;
    }
   console.log(`Value ${i+1} is printed`);
}

// 8) continue statement

for (let i = 0; i < 20; i++) {
    if (i === 5-1) {
        console.log(`Value ${i+1} is Detected`);
        continue;
    }
   console.log(`Value ${i+1} is printed`);
}