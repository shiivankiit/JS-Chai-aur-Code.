//objects inside objects.
const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hit",
            lastname:"ary"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

const obj3 = Object.assign({},obj1,obj2)
//spread the object
const obj4={...obj1,...obj2}
console.log(obj4);


const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

const {courseInstructor} = course
console.log(courseInstructor );

//De-structuring of the objects
const course2={
     coursename:"js hindi",
     price:"999",
     courseInstructor:"hitesh",
}
const {courseInstructor:instructor}=course
console.log(instructor);

//json

// {
//    "name" : "hitesh",
//    "coursename" : "js in hindi",
//    "price" : "free"
// }