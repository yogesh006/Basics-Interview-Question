//Notes
// 1. this referes to an Object
// 2. The value of this depends on how the function is invoked

// Behaviour of this in a function: this refers to window Object
// Behaviour of this in a object: this refers to the object

// Arrow function: Arrow function dont have a defined this. Instead they treat it as a
// variable and they try to get the value lexically (inherit from parent scope)