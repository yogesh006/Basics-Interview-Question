//Hoisting
/** if we variable type function it also treat as undefind if use initially in memory*/
/**
 * In JavaScript, hoisting is the behavior of moving declarations to the top of the current scope (either the global scope or the current function scope) before code execution. This means that declarations of variables and functions can be used before they are actually defined in the code.
 * 
 */

getName()//Tech Stack
console.log(a)//undefind

var a=5;
function getName(){
    console.log("Tech Stack")
}
//getName(); //TechStack
console.log(a)// a=5


/*
const test = function getName(){
    console.log("Stack Tech")
}
*/




// console.log(a)//undefind

// var a;
// function getName(){
//     console.log("Tech Stack")
//     a=5;
// }
// getName(); //TechStack
// console.log(a)// a=5