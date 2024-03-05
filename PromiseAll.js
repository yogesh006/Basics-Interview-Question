//takes bunch array of promises, It waits for all promise to complete then it's print it values and if any Promise fails then PromiseAll result shows fail

//Create also polyfills for PromiseAll

function showText(text,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(text)
        },time)
    })

}

// Promise.all([showText('hello',1000),Promise.resolve('hi')]).then((value)=>{
//     console.log(value)
// })
// //[ 'hello', 'hi' ]

// Promise.all([showText('hello',1000),Promise.resolve('hi'),Promise.reject('bye')]).then((value)=>{
//     console.log(value)
// })

// //  code: 'ERR_UNHANDLED_REJECTION'



/** CREATE POLYFILLS of PROMISEALL */
function myPromiseAll(promises){
    let result=[]
    return new Promise((resolve,reject)=>{
        promises.forEach((p,index)=>{
            p.then((res)=>{
                result.push(res);
                if(index=== promises.length-1){
                    resolve(result)
                }

            }).catch((err)=>reject(err));
        })
    })
}

myPromiseAll([showText('hello',1000),Promise.resolve('hi')]).then((value)=>{
    console.log(value)
})
