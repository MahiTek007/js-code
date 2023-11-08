// Destructuring assignment

const courses = {
    courseName: "JS Class",
    price: 1000,
    coureseTeacher: "Hitesh"
}

// console.log(courses.coureseTeacher);
// courses.courseInstructor = courses
// console.log(courses.courseInstructor);

const {courseInstructor:instructor} = courses;
console.log(instructor);


//JSON== JvaScript Object Notation

// 
//  {
    // "name": "Mahendra",
    // "email": "<EMAIL>",
    // "isLoggedIn": false
// };

[
    {},
    {},
    {}
]