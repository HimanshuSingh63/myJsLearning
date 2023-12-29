//const tinderuser = new Object()---> singleton object
 const tinderuser = {}
 tinderuser.id = '123abc'
 tinderuser.name = "himasnhu"
 tinderuser.age = 12
 tinderuser.email = "Himasnhu@gmail.com"


 //console.log(tinderuser);

 const reguleruser = {
    email : "Tanisha@gmail.com",
    userfullname : {
        firstname  : "Tanisha",
        Lastname : "Bhatt"

    }
 }
//console.log(reguleruser.userfullname.Lastname);

//ways to add two or more objects
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
// way 1
// const obj3 = Object.assign({},obj1,obj2)


//way 2
const obj3={...obj1, ...obj2}
console.log(obj3)

const user12 = [
    {
        id:1,
        name :"himanshu"
    },
    {
        id:1,
        name :"himanshu"
    },
    {
        id:1,
        name :"himanshu"
    },
    {
        id:1,
        name :"himanshu"
    },
    {
        id:1,
        name :"himanshu"
    }
]
console.log(user12[1].id);

console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))


const course = {
    coursename : "js",
    courseins : "Hitesh"
}
//restructure
const{courseins:Ci}=course
console.log(Ci);


