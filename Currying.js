//currying function in javascripts

// 
// Currying is a programming technique in which a function is defined with multiple arguments, but instead of returning the result immediately, it returns a new function that takes the remaining arguments and returns the result. This allows you to create specialized versions of a function by "pre-filling" some of the arguments
// 

//Normal function write
// function Addition(a,b,c){
//     return a+b+c;
// }

// let res = Addition(3,4,5)
// console.log(res);

//Closure type function

// function Addition(a){
//     return function(b){
//         return function(c){
//             return a+b+c;    
//         }
//     }
// }
// // let res = Addition(2)// return full return b and c function
// // let data = res(4)// return full return c function
// // let fullthreeAddition = data(5)//return full addtion of three
// // console.log(fullthreeAddition);

// //In terms of currying 
// console.log(Addition(4)(2)(11))//Addition(a,b,c)


//RealUseCase of Currying
// userObj ={
//     name:"Yogesh",
//     age:28
// }
// function userInfo(obj){
//     return function(userinfo){
//         return obj[userinfo]
//     }
// }

// let res = userInfo(userObj);
// console.log(res('age'))


////INFINITE CURRYING

function add(a){
    return function(b){
        if(b) return add(a+b)
        return a;
    }
}

console.log(add(4)(7)(9)(1)())