//high order loop

//for of loop
const arr= [1,2,3,4,5]
for (const num of arr) {
    console.log(num);   
}

const greeting="hellow world";

for (const greet of greeting) {
    if(greet != ' '){
        console.log(`each char is ${greet}`);
    }else{
        continue;
    }
    
}

//Map

const map = new Map();
map.set('IN',"India")
map.set('USA',"United States of Amarica")
map.set('Fr',"france")

console.log(map);

for (const [key,value] of map) {
    console.log(key,":",value);
    
}

const myob = {
    'game1' : 'NFS',
    'game2' : 'spiderman'
}
//can't use for of for objects
// for (const [key,value]of object) {
//     console.log(key,value);
    
// }

//for in for objects
for (const key in myob) {
    console.log(myob[key]);
}
//for in loop of arr
for (const i in arr) {
    console.log(arr[i]);
}
//for in loop for map can,t itrate
// for (const key in map) {
//    console.log(key);
// }


//for each loop

const coding = ['js','ruby','Cpp']
coding.forEach((element, index,arr)=> {
    console.log(element,index,arr);
});


const mucoding = [
    {
        languageName : "javascript",
        languagefilename : "Js"
    },
    {
        languageName : "java",
        languagefilename : "jave"
    },
    {
        languageName : "C",
        languagefilename : "c"
    }
]

mucoding.forEach((item)=>{
    console.log(item.languageName);
})


