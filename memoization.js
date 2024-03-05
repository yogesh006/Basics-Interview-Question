//Memoization is a optimization  technique that can be used to reduce 
//time-consuming calculation by saving previous input to something called cache and 
//returning the result from  it.
// in react useMemo

// let sum = 0
//  const  calc = (n) =>{
//    for(let i=0;i<=n;i++){
//     sum+=i;
//    }
//    return sum;

// }

// const result =calc(5);
// console.time();
// console.log(result)
// console.timeEnd();

//Toda closure use karenge for memoization

let sum = 0
 const  calc = (n) =>{
   for(let i=0;i<=n;i++){
    sum+=i;
   }
   return sum;

}
//{'5':15,'6': 21}
const memoize = (fun) =>{
    let cache={}
    return function(...args){
        let n = args[0]
        if(n in cache){//check if n is present in cache
            console.log("cache1")
            return cache[n]
        }  
        else{
            console.log("calculation First Time")
            let result = fun(n)
            cache[n] = result; //function result stored in cache
            return result;
        }  
    }

} 

console.time();
const efficient = memoize(calc);
console.log(efficient(5))
console.timeEnd();

console.time();
console.log(efficient(5))
console.timeEnd();

console.time();
console.log(efficient(5))
console.timeEnd();
// const result =calc(5);
// console.time();
// console.log(result)
// console.timeEnd();