/**
 * 
 * A higher-order function is a function that takes one or more functions as arguments, 
 * or returns a function as its result. Higher-order functions allow you to abstract over actions, not just values. 
 * This can make it easier to write code that is more flexible, reusable, and composable.
 * 
 */

function map(array,transform){
    let copy=[]
    for (const element of array){
        copy.push(transform(element))
    }
    return copy;
}

const number=[1,2,3,4]
const squares = map(number,x=>x*x);
console.log(squares)

/**
 * 
 * In this example, the map function is a higher-order function because it takes the transform function as an argument and applies it to each element in the array. The transform function is
 *  then used to transform each element in the array, and the resulting array of transformed elements is returned.
 * 
 */