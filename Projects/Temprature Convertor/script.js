const form = document.querySelector('form')
console.log(form);

const cToF = document.querySelector('#cToF')
cToF.addEventListener('click',(event)=>{
    const cToFvalue = event.target.checked
    console.log('ctofvalue',cToFvalue);
    if(cToFvalue === true){
        const inputlabel = document.querySelector('#inputlabel')
        inputlabel.outerHTML = "<label id='inputlabel'>Temperature in Fahrenheit: <input type=\"text\" id=\"temprature\"></label>"
        const outputlabel = document.querySelector('#outputlabel')
        outputlabel.outerHTML = "<label id='outputlabel'>Temperature in Celcius: <Input type=\"Text\" disabled id=\"result\"></label>"
    }else if(cToFvalue === false){
        const inputlabel = document.querySelector('#inputlabel')
        inputlabel.outerHTML = "<label id='inputlabel'>Temperature in Celcius: <input type=\"text\" id=\"temprature\"></label>"
        const outputlabel = document.querySelector('#outputlabel')
        outputlabel.outerHTML = "<label id='outputlabel'>Temperature in Fahrenheit: <Input type=\"Text\" disabled id=\"result\"></label>"
    }
})

form.addEventListener('submit',(event)=>{
    event.preventDefault();//to ptrevent defaulaction
    const temprature = parseFloat(document.querySelector('#temprature').value).toFixed(2)
    console.log(temprature)
    const result = document.querySelector("#result")
    console.log(result)
    if(temprature === '' || isNaN(temprature)){
        result.value ="Enter a valid number"
    }else if(cToF.checked === false){
        //temprature in Fahrenheit
        result.value = ((temprature*9/5) + 32).toFixed(2);
    }else if(cToF.checked === true){
        //temprature in Celsius
        result.value = ((temprature-32) * 5/9).toFixed(2);
    }
})
