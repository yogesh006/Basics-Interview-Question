//Debouncing  
//concept is provide by webapi not provide by javascript

//Debouncing in JavaScript is a technique that can be used to limit the rate at which a function is called. It is often used in situations where a function is being called repeatedly, such as when a user is typing in a search field or when a page is being scrolled, page resize.
//make performance down
//we try to make function not call again again, or after specific interval function call,or when no user not requiest anything

//Like in flipkart search, son ask cake from mom , dubara time start when ask again

//after complete type Laptop in search bar Laptop search results show after a millisec, not every time when character type


//here function call on every character , we use to get call after a specific time using setTimout WebApi callback func
// let counter = 0
// function getData(){
//     console.log("fetching Data" + counter++)
// }


let counter = 0
function getData(){
    console.log("fetching Data" + counter++)
}

function myDebounce(call,d){
    let timer;
    //clousure concept
    return function(...args){
        if(timer) clearTimeout(timer)
       timer= setTimeout(()=>{
            call()
        },d)
    }
}

const BetterFunction = myDebounce(getData,1000) //(callback,delay)

//================================//

//THROTTLING

/**
 * 
 * 
 * Throttling is a technique used to limit the rate at which a function can be executed. It can be useful in a variety of situations, such as preventing a function from being called too frequently, or limiting the amount of resources a function can consume.
 * 
 */
//Usecase button
//Application button on click data save in database,
//if button click 2 times then data is saved in database : we can achieve through jquery, butlet me use throttling
//here we disabled the button till it's task completed, after a specific time func call


const mythrottle=(fun,d)=>{
    return function(){
        document.getElementById("myid").disabled=true;
        setTimeout(()=>{
            fun();

        },d)
    }
}



const newFun=mythrottle(()=>{
    document.getElementById("myid").disabled=false;
    console.log("user clicked;;;;")
},5000)
