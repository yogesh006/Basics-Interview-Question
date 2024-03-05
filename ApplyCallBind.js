//Apply, call & Bind


/** IMP if we use Arrow Function in function call inside object then "this is refering to window object not it's parent like in simple function" */
//Problem Statement
// let userDetails={
//     name:"Ajay",
//     Age:28,
//     Designation:"Software",
//     printDetails:function(){
//         console.log(this.name)
//     }
// }
// userDetails.printDetails();

// we use another userdetails2 object with same values so it's not a good pratice code duplication, we need to point userdetails (this) into userdetails2(this) i.e copy, we can do with call
/**let userDetails2={
    name:"Ajay",
    Age:28,
    Designation:"Software",
   
}
userDetails2.printDetails(); */


// let userDetails={
//     name:"Ajay",
//     Age:28,
//     Designation:"Software",
//     printDetails:function(){
//         console.log(this)
//     }
// }
// userDetails.printDetails();

// let userDetails2={
//     name:"Ajay",
//     Age:28,
//     Designation:"Software",
//    
// }
// //function Borrowing
// userDetails.printDetails.call(userDetails2)  
//If suppose printdetails function is outside usedetails object then  
//see below how to do


let userDetails={
    name:"Ajay",
    Age:28,
    Designation:"Software",
   
}

let  printDetails=function(state,country){
  
    console.log(this.name + " "+state  + " "+country)
}
printDetails.call(userDetails,"Delhi","India");

let userDetails2={
    name:"Vijay",
    Age:28,
    Designation:"Software",
  
}
printDetails.call(userDetails2,"Lucknow","India") 

//if no of parameter pass as a arraylist in printdetails not like single single paramet in call type
//APPLY
let userDetails3={
    name:"Mahesh",
    Age:36,
    Designation:"Software",
  
}

printDetails.apply(userDetails3,["Noida","India"]) 

//BIND
//we create copy and then invoke later when we need

let newfun = printDetails.bind(userDetails3,"Mumbai","India")
newfun();



/**
 * call and apply are methods that are available on every JavaScript function. They allow you to call a function with a specific this value and arguments, regardless of the calling context.

Here's an example of how call can be used:

Copy code
function greet(greeting) {
  return greeting + ' ' + this.name;
}

const person = { name: 'John' };

console.log(greet.call(person, 'Hello'));  // Outputs: "Hello John"
In the example above, the greet function is being called with the person object as the this value. The first argument to call is the this value that the function will be called with, and the remaining arguments are passed to the function as arguments.

apply works in a similar way, but it expects the arguments to be passed as an array:

Copy code
console.log(greet.apply(person, ['Hello']));  // Outputs: "Hello John"
bind is a method that creates a new function with a specific this value and arguments. It does not call the function immediately, but instead returns a new function that can be called later.

Here's an example of how bind can be used:

Copy code
const greetJohn = greet.bind(person);
console.log(greetJohn('Hello'));  // Outputs: "Hello John"
In the example above, the greetJohn function is bound to the person object, so when it is called, the this value inside the function will be person.
 */