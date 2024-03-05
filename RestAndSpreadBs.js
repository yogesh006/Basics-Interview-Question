//how to overide values in objects
//rest : alag value combine ho jate hai , spread: combine ko alag karte hai

//spread in  Array
var names=["Yogesh","Suresh","Funny"]

function getName(name1,name2,name3){
    console.log(name1,name2,name3)
}

getName(...names)//best
getName(names)

//Rest in Array

function addNumber(a,b,c,...other){
    console.log(other)
    return a+b+c
}

const res= addNumber(2,4,65,3,2,234,345,2,32)
console.log(res)


//how to override values in objects

//Rest in object

var student = {
    name:"Yogesh",
    age:28,
    hobbies:["cricket","singing"]
}
// const age=student.age
// console.log(age)
//use array destructuring
// const {age,name}=student
// console.log(age,name)
const {...rest} = student
console.log(rest)

//Spread in object
//we override value in object using spread

var newStudent = {
    ...student,
    age:35
}
console.log(newStudent)

//============================ , use spread
const a1={a:1,b:2}
const a2={c:3,d:4}
const merged = {...a1,...a2}
console.log(merged)