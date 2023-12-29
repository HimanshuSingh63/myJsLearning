//Stack(primitive) Heap(Non-Primitive)


//Stack gives copy but heap gives orignal

let myname="Karan"
let anothername=myname

// console.log(anothername);

let user={
    email:"user@123.com",
    upi:"user@paytm"
}

let user2=user
user2.email="user2.com"
console.log(user2.email);

