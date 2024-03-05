//Async Programming
//callback,promise, Async & Await

//Problem Statement

/**
 *  Dependency on other method to complete then other will start 
 * const datas=[
    {name:"Ajay", Profession:"Software Engin"},
    {name:"Anuj", Profession:"Mechanical Software"}
]

function getDatas(){
    setTimeout(()=>{
        let output=""
        datas.forEach((data,index)=>{
            output+=`<li>${data.name}</li>`
        })
        document.body.innerHTML=output
    },5000)
}


function createData(newdata){
    setTimeout(()=>{
        datas.push(newdata)
    },1000)//6000
}

createData({name:"Vivek",Profession:"Civil Engineer"})
getDatas();
 */


// use Callback


// const datas=[
//     {name:"Ajay", Profession:"Software Engin"},
//     {name:"Anuj", Profession:"Mechanical Software"}
// ]

// function getDatas(){
//     setTimeout(()=>{
//         let output=""
//         datas.forEach((data,index)=>{
//             output+=`<li>${data.name}</li>`
//         })
//         document.body.innerHTML=output
//     },1000)
// }


// function createData(newdata,callback){
//     setTimeout(()=>{
//         datas.push(newdata)
//         callback()
//     },2000)
// }

// createData({name:"Vivek",Profession:"Civil Engineer"},getDatas)


//Use Promise
//when use Promise no need to use callback

// const datas=[
//     {name:"Ajay", Profession:"Software Engin"},
//     {name:"Anuj", Profession:"Mechanical Software"}
// ]

// function getDatas(){
//     setTimeout(()=>{
//         let output=""
//         datas.forEach((data,index)=>{
//             output+=`<li>${data.name}</li>`
//         })
//         document.body.innerHTML=output
//     },1000)
// }


// function createData(newdata){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             datas.push(newdata)
//             let error=false
//             if(!error){
//                 resolve();
//             }
//             else{
//                 reject("Kuch sahi nhi")
//             }
         
//         },2000);
//     })
   
// }

// createData({name:"Vivek",Profession:"Civil Engineer"}).then(getDatas).catch((error)=>{console.log(error)})


//use Async & Await.
// like then and catch

const datas=[
    {name:"Ajay", Profession:"Software Engin"},
    {name:"Anuj", Profession:"Mechanical Software"}
]

function getDatas(){
    setTimeout(()=>{
        let output=""
        datas.forEach((data,index)=>{
            output+=`<li>${data.name}</li>`
        })
        document.body.innerHTML=output
    },1000)
}


function createData(newdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datas.push(newdata)
            let error=false
            if(!error){
                resolve();
            }
            else{
                reject("Kuch sahi nhi")
            }
         
        },2000);
    })
   
}
//await matlab wait karo, Like axiios, fetch from third party (Async & promises)
//createData({name:"Vivek",Profession:"Civil Engineer"}).then(getDatas).catch((error)=>{console.log(error)})
async function start(){
    await createData({name:"Vivek",Profession:"Civil Engineer"})
    getDatas();
}

start();



//Promise
/**
 * 
 * In JavaScript, a Promise is an object that represents the completion or failure of an asynchronous operation. Promises are used to handle asynchronous operations in a more synchronous fashion, making it easier to reason about and handle asynchronous code.
 * const makeRequest = () => {
  return new Promise((resolve, reject) => {
    // make an asynchronous request
    setTimeout(() => {
      // if the request was successful, resolve the Promise with the result
      resolve("Success!");
    }, 1000);
  });
};

makeRequest()
  .then(result => {
    // the Promise was fulfilled
    console.log(result);
  })
  .catch(error => {
    // the Promise was rejected
    console.error(error);
  });

  n this example, the makeRequest function returns a Promise that will be resolved with the value "Success!" after 1 second. The then method is used to register a callback that will be called when the Promise is fulfilled, and the catch method is used to register a callback that will be called if the Promise is rejected.

Promises are a powerful tool for managing asynchronous code, and they are widely used in modern JavaScript applications.


 * 
 */


//ASYNC AWAIT
/**
 * In JavaScript, async is a keyword that can be used to create functions that return a Promise. These functions can be used with the await operator, which allows you to pause the execution of the async function until the Promise is fulfilled.
 * 
 * async function getData() {
  const result = await fetch('https://example.com/data.json');
  return result.json();
}

getData().then(data => {
  console.log(data);
});

In this example, the getData function uses the fetch function to retrieve data from a remote server. The await operator is used to pause the execution of the function until the Promise returned by fetch is fulfilled. Once the Promise is fulfilled, the function returns the data in JSON format.


 */

//CALLBACKS

/**
 * 
 * In JavaScript, a callback is a function that is passed as an argument to another function and is executed after some kind of event or operation has completed. Callbacks are often used in JavaScript to perform a task after an asynchronous operation has completed, such as making an HTTP request or reading data from a file.
 * 
 * function greet(name, callback) {
  console.log('Hello, ' + name + '!');
  callback();
}

function sayGoodbye() {
  console.log('Goodbye!');
}

greet('John', sayGoodbye);

In this example, the greet function takes a name and a callback function as arguments. When the greet function is called, it logs a greeting to the console and then calls the callback function. When the greet function is called with the sayGoodbye function as the callback,

 * 
 */