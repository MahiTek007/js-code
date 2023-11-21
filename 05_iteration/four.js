const number= [1,2,3,4,5];
let total =number.reduce((acc,curval)=>{
    console.log(` ${acc} and${curval}`)
    return acc + curval;
},0)
console.log(` total ${total}`);

const CourseshopingCart=[
    {
        courseName: "Javascript",
        coursePrice: 5999
    },
    {
        courseName: "Java",
        coursePrice: 7999
    },
    {
        courseName: "Python",
        coursePrice: 2999
    },
    {
        courseName: "SQL",
        coursePrice: 3999
    }
];

let totalCoursePrice = CourseshopingCart.reduce( (accumulator,currValue)=> accumulator+currValue.coursePrice,0);
console.log(`Total Course Price: ${totalCoursePrice}`);

totalCoursePrice =0;
CourseshopingCart.forEach(course => totalCoursePrice =  totalCoursePrice+course.coursePrice);
console.log(`Total Course Price: ${totalCoursePrice}`);