//Polyfill of Array.map

Array.prototype.myMap = function(callbackFn){
    const output= []
    console.log(`value of this is  ${this}`)
    this.forEach((element, index)=>{
        console.log(`the data of element is ${element} and index is ${index}`)
        output.push(callbackFn(element, index, this))
        console.log(`the  of this  in every iteration is ${this}`)
        console.log(`value of output in every iteration ${output}`)
    })
    return output
}

console.log([1,23,4,5].myMap((e)=> e*10))

//console.log([1,2,3,4,5,6].myMap((e)=> e%2==0))