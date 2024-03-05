/**
 * In JavaScript, a closure is a function that has access to the variables in its outer scope, 
 * even after the outer function has returned. 
 * 
 * Closures are frequently used in JavaScript for object data privacy,
 in event handlers and callback functions, and in partial applications,
  currying, and other functional programming patterns.
 * 
 * */

function outerScope(x){
    let variableS = x;
    return function innerFunction(){
        console.log(variableS);
    }
}

const myClosures = outerScope('Hello MoTO')
myClosures();

// function outerFunction(x) {
//     let innerVariable = x;
    
//     return function innerFunction() {
//       console.log(innerVariable);
//     }
//   }
  
//   const myClosure = outerFunction('Hello');
//   myClosure(); // Outputs: "Hello"
  /***
   * 
   * In this example, the innerFunction has access to the innerVariable variable, even after the outerFunction has returned. This is because the innerFunction is a closure, and it has access to the variables in its outer scope.

Closures are often used in JavaScript to create private variables and functions. They can also be used to create functions that have a specific context, or to create functions that can be passed around and used in different contexts.
   * 

 :=> Value Retain after calling second time, a or c ka scope ko lexical scope bolte hai
   */
//Lexical Scope
var sum =function(a){
    console.log("vierwer" + a)

    var c=4;

    return function(b){
        console.log(b);
        return a+b+c;
    }
}

var FunctionreturnedstoreHere = sum(2);
console.log(FunctionreturnedstoreHere(5));


//Parent function 2 function kar rha ho Or we can say sum of 2 or three using 1 one call

var sum = function(a,b,c){


    return{
        getSumTwo:function(){
            return a+b;
        },
        getSumThree:function(){
            return a+b+c;
        }
    }
}
var store = sum(3,4,5)
console.log(store.getSumTwo())
console.log(store.getSumThree())

var store2 = sum(7,8,9)

console.log("Another")
console.log(store2.getSumTwo())
console.log(store2.getSumThree())
// ==================================== //
/**
 * 
 *  ADV Java with SpringBoot, DS and LC, React Adv, With Project, Resume, use Medium blog 
 * 
 */

