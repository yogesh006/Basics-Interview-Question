// What is array prototype in JavaScript?
// prototype allows you to add new properties and methods to arrays. prototype is a property available with all JavaScript objects.

//Array.reduce explain 
//can take four argument in function ,previousValue, currentValue, currindex, array
const array = [1,2,3,4]

const initialValue=0
const callback =(previousValue, currentValue, index) =>{
    console.log("At index ", index,previousValue, currentValue)
    return previousValue+currentValue
}
//const sumWithInitial = array.reduce(callback, initialValue)
// At index  0 0 1
// At index  1 1 2
// At index  2 3 3
// At index  3 6 4
// 10
const sumWithInitial = array.reduce(callback)
//output
// At index  1 1 2
// At index  2 3 3
// At index  3 6 4
// 10
console.log(sumWithInitial)




