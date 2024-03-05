//Event bubbling & capturing
//Stop propagation, Immediate Propagation & Prevent default


//Event Bubbling : Event bubbling is a term used to describe the way that events propagate through the DOM (Document Object Model) tree. When an event is triggered on an element, it will first be executed on that element, and then it will be passed on to its parent element, and so on, until it reaches the top of the tree. This process is known as event bubbling.

//child tag to parent tag, even click on button , div tag is also effected which we use here so we can use body , so called event bubbling 
// var div = document.querySelector("div")
// var button = document.querySelector("button")

// div.addEventListener("click",()=>{
//     console.log("div123")
// })

// button.addEventListener("click",()=>{
//     console.log("button234")
// })

//Event Capturing : Parent tag to child tag
// we can add true in listener 

// var div = document.querySelector("div")
// var button = document.querySelector("button")

// div.addEventListener("click",()=>{
//     console.log("div123")
// },true)

// button.addEventListener("click",()=>{
//     console.log("button234")
// },true)


//Event Stop Propagation : we stop propagation behaviour so not to parent tag , we use event object to prevent default behaviour

// var div = document.querySelector("div")
// var button = document.querySelector("button")

// div.addEventListener("click",()=>{
//     console.log("div123")
// })

// button.addEventListener("click",(event)=>{
//     event.stopPropagation();
//     console.log("button234")
// })


//Event Stop Immediate Propagation: 
//we can add my listener on same button
var div = document.querySelector("div")
var button = document.querySelector("button")

div.addEventListener("click",()=>{
    console.log("div123")
})

button.addEventListener("click",(event)=>{
   
    console.log("button234")
})

button.addEventListener("click",(event)=>{
    event.stopImmediatePropagation();
    console.log("buttonNEW")
})

