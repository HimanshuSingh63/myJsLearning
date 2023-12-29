// singleton --using constuctor method
//Object.create

//object litrals

const jsUser = {
    name: "Himanshu",
    age : "123",
    location : "Heavan",
    email : "himasnhu@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Friday"],
    "Full Name" : "Mr Singh",
 
}

//Ways to access values from Object
console.log(jsUser.lastLoginDays);
console.log(jsUser["Full Name"]) //Can't Access this  type using .


//change value

jsUser.email = "Hish@gamil.com"
console.log(jsUser.email);

// TO frezz any object

//Object.freeze(jsUser)

jsUser["Full Name"] = "Aditya kumar"
console.log(jsUser["Full Name"]);

jsUser.greeting = function (){
    console.log("hello js user",jsUser.name);
}

console.log(jsUser.greeting());

jsUser.greetingTwo = function (){
    
    console.log(`Hello User ${this.name}`);
}

console.log(jsUser.greetingTwo());


 
