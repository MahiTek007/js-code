const accountId=144553; //const means we cannot be change the constant and its unique
let accountEmail="tekudemahendra99@gmail.com";
var accountPassword="123456";
accountCity="Pune"; 
let accountState;  //Undefind  

//accountId=2        ===>       we can  not change account id because its declare as a constant using const keyword 

accountEmail="tekudemahendra@gmail.com";
accountPassword="123456789";
// we can change acount email and password because its declare using let and var keyword

console.log(accountId); 
/*
    Prefer not to use var
    because of issue in b lock scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity, accountState]);

/*  outPut
@MahiTek007 ➜ /workspaces/js-code (main) $ node 01_basics/veriables.js
144553
┌─────────┬────────────────────────────┐
│ (index) │           Values           │
├─────────┼────────────────────────────┤
│    0    │           144553           │
│    1    │ 'tekudemahendra@gmail.com' │
│    2    │        '123456789'         │
│    3    │           'Pune'           │
│    4    │         undefined          │
└─────────┴────────────────────────────┘
*/