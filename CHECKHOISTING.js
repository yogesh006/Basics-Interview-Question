

// function foo(){
//     console.log('Hello');
// }
// foo();

// function foo(){
//     let a=10;
//     if(true){
//         let a=20;
//         console.log('inside ',a)//20
//     }
//     console.log('outside ',a);//10
// }

// function foo(){
//     let a=10;
//     if(true){
//          a=20;
//         console.log('inside ',a)//20
//     }
//     console.log('outside ',a);//20
// }

// foo()

//-----------
//closure
//dataprivacy
// function createClosures(){
//     let count = 0;
//     return function(){
//        return ++count;
//     }
// }

// const c1  = createClosures();

// console.log(c1());
// console.log(c1());

//modulepattern

// const closures  = (function(){
//     let result = 0

//     return {
//         add:function(x){
//             result+=x
//         },
//         substract:function(x){
//             result-=x
//         },
//         getResult:function(){
//             return result
//         }
//     }
// })()

// closures.add(5)
// closures.substract(3)
// console.log(closures.getResult())


//currying
// function add(a){
//     return function(b){
//         console.log(a," value of a")
//         console.log(b," b")
//         return a+b
//     }
// }

// const value = add(10)
// console.log(value(12))

