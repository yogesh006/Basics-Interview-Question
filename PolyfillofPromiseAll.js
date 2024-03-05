//console.log(typeof Array =='object') false

//Polyfills means we need to create our own function which will work in same way as our predefined function generally works

//Promise.all([array of task/api]).then([],[]).catch((err)=>{})

const dummyAPI = (time)=>{
    return new Promise((resove,reject)=>{
        setTimeout(()=>{
            resove(time)
        },time)
    })
}

const taskArray = [dummyAPI(1000), dummyAPI(3000), dummyAPI(5000)]

const promisePolyfill = (taskArray)=>{
    return new Promise((resolve,reject)=>{
        const output = []
        taskArray.forEach((promise, index)=>{
            promise.then((data)=>{
                console.log(`data is ${data}`)
                output[index] = data
                if(index === taskArray.length-1) resolve(output)
            }).catch((err)=>{
                reject(err)
            })

        })
    })
}

//use polyfill of promiseall to get the output of input array

promisePolyfill(taskArray).then((data)=>{
    console.log(`the output is ${data}`)

}).catch((err)=>{
    console.log(`the error is ${err}`)
})