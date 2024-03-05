const memoization = (fun)=>{
    let cache = {}
    return (...args)=>{
        const argtoString = JSON.stringify(args);
        console.log("hi ", argtoString)
        if(argtoString in cache){
            console.log(`fetch log ${argtoString}`)
            return cache[argtoString]
        }
        else{
            console.log(`compouting value ${argtoString}`)
            const result = fun.apply(this,args)
            cache[argtoString] = result
            return result;
        }
    }
}
addition = (a,b,c) => a+b+c
const add = memoization(addition)
console.log(add(1,4,6))
console.log(add(1,4,6))
