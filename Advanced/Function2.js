function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,300,500));


const user = {
    username: "Himanshu",
    age : 21
}

function handleob(anyob){
    console.log(`Username is ${anyob.username} and age is ${anyob.age}`);
}
handleob(user)

const mrarr = [244,233,4566,55]

function newfunction(anyarray){
    return anyarray[2]
}
console.log(newfunction(mrarr));

                                           //Global and local scope


//var c =2400
let a=1000
if(true){
    let a = 10
    const b = 20
    //var c = 30
}

//console.log(a);
//console.log(b);
console.log(a);

 const one=function() {
    const username = "himanshu"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    two()
 }
 one()
 if(true){
    const username = "Tanisha"
    if (username=="Tanisha") {
        const web = "Youtube"
        console.log(username,web);
    }

 }


 //Arrow Function and this keyword
 //This is used for current context

 const usern = {
    username:"kp",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username}, welcome to web`  );
    }
 }

 usern.welcomemessage()
 usern.username="sam"
 usern.welcomemessage()
 console.log(usern)


 function chai(){
    let username = "Himanshu"
    console.log(this.username);
 }
 chai()

 const code = () =>{
    let username = "Tannu"
    console.log(this.username);
 }
code();


//Arrow function

const hi = (num1 ,num2) =>{
return num1 + num2
}
console.log(hi(1,2));

//implesit return

const hlo = (num1,num2) =>(num1 + num2)
console.log(hlo(2,3));



//Immidiately Invoked Function Expressions(IIFE)
//to remove polution of global varible add semocolen to make two iife 

(function chai() {
    console.log("db"); 
})();//Add semocolen to resolve error 

//using arrow function
((name) =>{
    console.log("DB 2",name);

})("Hiamsnhu")




 



