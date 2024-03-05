// function sum(...args){
//     let total = 0
//     for(const c of args){
//         total+=c
//     }
//     return total
// }
// console.log(sum(1,5,6,4,7))

// //IIFE
// (function foo(){
//     console.log("Hello FOO")
//     var a=506;
//     console.log(a)
// })
// ();
// console.log(foo(a))

// //CURRYING : It helps to create a Higher Order Function and helpful for handling events
// function getSum(a){
//     console.log("value of a: "+a)
//     return function mike(b){
//         console.log("value of b: "+b)
//         return a+b
//     }
// }
// // var overallSum = getSum(3)
// // console.log(overallSum(4))
// var overallSum = getSum(3)(4)
// console.log(overallSum)

// //INFINITECURRYING
// function getSum(a){
//     return function(b){
//         if(b){
//             console.log("value of a :", a , "value of b :", b)
//             return getSum(a+b)
//         }
//         console.log("value of result :"+a)
//         return a
//     }
// }

// console.log(getSum(4)(5)(7)())


// //MEMOIZATION in JS
// const getMemoize = ()=>{
//     let sum = 0;
//     for(let i=1;i<5;i++){
//         sum+=i
//     }
//     return sum
// }
// // console.time()
// // console.log(getMemoize())
// // console.timeEnd()

// const memoize = (func)=>{
//     let cache={}
//     return function(...args){
//         let a = args[0]
//         if(a in cache){
//             console.log("value of cache key :",a, " value :" ,cache[a])
//             return cache[a]
//         }
//         else
//             {
//                 console.log("calculate first time")
//                 let result = func(a);
//                 cache[a]=result
//                 return cache[a]
//             }

//     }
 
// }

// console.time()
// const efficient = memoize(getMemoize)
// console.log(efficient(5))
// console.timeEnd()

// console.log("--------------------")
// console.time()
// console.log(efficient(5))
// console.timeEnd()

// // console.time()
// // console.log(getMemoize())
// // console.timeEnd()