function myname(){
    console.log("billu chor");

}
console.log(myname())

// function addition(num1,num2){
//     console.log(num1+num2);

// }
// addition(1,3);


function addition(num1,num2){
    return num1 + num2;

}
const result = addition(1,4)
console.log(result);

function loginusermessage(username="billu"){
    if(username === undefined){
        console.log("please enter name ");
        return
    }
    return `${username} just login`
}
console.log(loginusermessage());