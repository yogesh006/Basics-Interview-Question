//Polyfill of Array.reduce

function myReduce(callback, initialValue){
    if(!this) throw new Error("Array is not defined")
    var array =this
    var index= 0
    var accumulator
    var n = array.length
    if(!n){
        if(initialValue) return initialValue
        else throw Error("You need to pass initial value if array is empty")
    }

    if(initialValue){
        accumulator = initialValue
    }else{
        accumulator = array[index++]// arr[0], index=1

    }

    while(index <n){
        accumulator = callback(accumulator, array[index], index, array)    
        index++;
    }

    return accumulator
}

Array.prototype.myReduce = myReduce
//const arr = []
//const arr=undefined
const arr = [1,2,3]
const initialValue =1
const callback =(prev,curr)=> prev+curr

console.log(arr.myReduce(callback,initialValue))