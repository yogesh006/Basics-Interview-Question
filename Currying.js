//1. Curried functions are also an important application of closure. 
//They split a function with many parameters into functions with only one parameter each.
// The context between function calls is saved thanks to closures (outer-inner pattern)

//2. Currying means that the closure does not have to receive all of its arguments at once, but separately.

//Closures and Partial function
//A closure is when you combine some state or context with code so that you can execute that code later bound to those state values even when the origin of the values is now gone. 
//Partial application is when you bind one or more (but not all) arguments of a function to values using a closure.



//program currying fn return sum of previous value

const curryFn=()=>{
    let prevSum =0
    return (newVal =0)=>{
        prevSum+=newVal
        return prevSum
    }
}
const sum = curryFn() //here we store curryfn previous value in sum here clousure is happening as sum is storing prevsum value for further step
console.log(sum(1))
console.log(sum(3))
console.log(sum(4))
console.log(sum()) 
//output
// 1
// 4
// 8
// 8

