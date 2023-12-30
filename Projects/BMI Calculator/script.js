const form =document.querySelector('form')

form.addEventListener('submit',(event)=> {
    event.preventDefault()//to prevnet submit data in server other wise it will be refresh with in seconds after submit
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector(".results")
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = 'Please give a valid height'
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = 'Please give a valid height'
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        //show the result
        if (bmi<18.6) {
            results.innerHTML = `<span>Your BMI is:<b>${bmi}</b> and you are in Under weight category 😞</span>`;
            console.log(bmi)
        } else if(18.6<=bmi>=24.9) {
           
                results.innerHTML = `<span>Your BMI is:<b>${bmi}</b> and you are in Normal weight category 😊</span>`;
                console.log(bmi)  
        }else if(bmi>24.9){
        
                results.innerHTML = `<span>Your BMI is:<b>${bmi}</b> and you are in Over weight category 😲</span>`;
                console.log(bmi)
            
        }
    }
})