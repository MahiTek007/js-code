let mydate = new Date();
console.log(`coordinates Universal Time: ${mydate.toString()}`);
console.log(`coordinates Local Time: ${mydate.toLocaleDateString()}`);
console.log(`coordinates Local Time: ${mydate.toLocaleString()}`);
console.log(`coordinates Local Time: ${mydate.toLocaleTimeString()}`);
console.log(`coordinates Local Time: ${mydate.toTimeString()}`);
console.log(`coordinates Local Time: ${mydate.toUTCString()}`);
console.log(`coordinates Local Time: ${mydate.toGMTString()}`);
console.log(`coordinates Local TimeZone: ${mydate.getTimezoneOffset()}`);
console.log(`coordinates Local Time: ${mydate.getTime()}`);
console.log(`coordinates get Full Year: ${mydate.getFullYear()}`);
console.log(`coordinates get Month: ${mydate.getMonth()}`);
console.log(`coordinates get Date: ${mydate.getDate()}`);
console.log(`coordinates get Day: ${mydate.getDay()}`);
console.log(`coordinates get Day of Week: ${mydate.getDay()}`);
console.log(`coordinates get Day of Year: ${mydate.getDayOfYear}`);
console.log(`coordinates get Day of Week: ${mydate.getDay()}`);
console.log(`coordinates get Week: ${mydate.getWeek}`);
console.log(`coordinates get Week Year: ${mydate.getWeekYear}`);
console.log(`coordinates get ISO Week: ${mydate.getISOWeek}`);
console.log(`coordinates get ISO Week Year: ${mydate.getISOWeekYear}`);
console.log(`coordinates get Hour: ${mydate.getHours()}`);
console.log(`coordinates get Minute: ${mydate.getMinutes()}`);
console.log(`coordinates get Second: ${mydate.getSeconds()}`);
console.log(`coordinates get Milliseconds: ${mydate.getMilliseconds()}`);
console.log(`coordinates get Timezone Offset: ${mydate.getTimezoneOffset()}`);
console.log(`coordinates get Timezone: ${mydate.getTimezone}`);
console.log(`coordinates get Time: ${mydate.getTime()}`);


let myCreatedDate = new Date(2023,23,23);
console.log(myCreatedDate.toDateString());


let myUpdatedDate = new Date((2023,23,2,23,23,23));
console.log(myUpdatedDate.toDateString());

let newDate= new Date("01-14-2023");
console.log(newDate.toDateString());
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(myUpdatedDate.getTime());
console.log(Date.now()/1000);

let myDate = new Date();
console.log(myDate);

myDate.toLocaleString("default",{
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true
});
