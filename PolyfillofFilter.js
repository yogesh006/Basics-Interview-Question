//Polyfill of Array.filter

Array.prototype.myFilter = function(callbackFn){
    const output = []
    this.forEach((element, index) =>{
        console.log("value of this :: "+this)
        if(callbackFn(element, index, this)){
            output.push(element)
        }
    })
    return output
}

// Array.prototype.myMap = function(callback1){
//     const mapValues = []
//     this.forEach((element, index)=>{
//         mapValues.push(element, index, this);
//     })
//     return mapValues
// }

console.log([1,2,3,4,5,6].myFilter((e)=> e%2==0))