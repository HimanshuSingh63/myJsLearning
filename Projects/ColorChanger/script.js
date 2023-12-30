const buttons = document.querySelectorAll('.button')
console.log(buttons)
const body = document.querySelector("body")


buttons.forEach((button)=>{
    console.log(button)
    button.addEventListener('click',function(event){
        console.log("Event",event)
        console.log("Event target",event.target)
        if(event.target.id === "red"){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === "blue"){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === "skyblue"){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === "orange"){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === "purple"){
            body.style.backgroundColor = event.target.id;
        }
    })
});
