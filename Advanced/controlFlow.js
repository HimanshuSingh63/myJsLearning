const email = '';
if (email==='') {
    console.log('null nothing');
    
}
const user = []
if(user.length ===0){
    console.log('empty');
}

const myobject={
    
}
if(Object.keys(myobject).length===0){//returns array of keys
    console.log("nothng");
}


//nullish operator(??) work for null and undifined if we get null or undefined leanes them and assgnes value

let val1 = null ?? 10// it will assign 10 to the val1
let val2 =  null  ?? undefined ??20  //it will assign 10 to the val1
console.log(val1,val2);


//ternury operator
//condition ? true : false

const iceprce=130
iceprce >= 80 ? console.log('yes') : console.log('No');