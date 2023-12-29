const hero = ['kran','kpp','Ip']
const hero2 = ['jj','ko','klo']
//hero.push(hero2)---> ['kran', 'kpp', 'Ip', Array(3)]

//console.log(hero);

/*concate two array 
const hero3 = hero.concat(hero2)-->['kran', 'kpp', 'Ip', 'jj', 'ko', 'klo']
console.log(hero3);*/

//way to concate many arrray

//  const newheros = [...hero,...hero2]--->['kran', 'kpp', 'Ip', 'jj', 'ko', 'klo']

// console.log(newheros);

const array1 = ['1','2',['3','4'],'5']
// const array2 = array1.flat()--> ['1', '2', '3', '4', '5']
//console.log(array2);


                           //Conversion to array


// console.log(Array.isArray("Tanisha")); -->false
// console.log(Array.from("Tanisha")); -->['T', 'a', 'n', 'i', 's', 'h', 'a']

// console.log(Array.from({name:"Billu"})); []


//for variable 
let score1 = 100
let score2 = 200
let score3 = 300


//console.log(Array.of(score2,score1,score3))-->(3) [200, 100, 300]


