const coding = ["js","ruby","jave","python"]
// const value=coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })
// console.log(value);

const munum = [1,2,3,4,5,6,7,8,9]
const newmum = munum.filter((num) =>num>4)
console.log(newmum);

const tennum=munum.map((num)=>num+10)
console.log(tennum);

//chaining with map and filter
const againnum = munum.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>40)
console.log(againnum);

//reduce 

const number=[1,2,3]
const mytotal= number.reduce((acc,cv)=>acc+cv,0)
console.log(mytotal);


const shoppingcart=[
    {
    itemName : "js",
    price : 2999

},
    {
    itemName : "py",
    price : 200

},
    {
    itemName : "mobile dev",
    price : 5000

}
   
]

const pricetopay = shoppingcart.reduce((acc,item)=>acc+item.price,0)
console.log(pricetopay);