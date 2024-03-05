// function flattenObject(obj, parent){
//     const finalObj = {}
//     const generateFlattenObject=(obj, parent)=>{
//         for(let key in obj){
//            const newParent = parent+key
//             const value = obj[key]
//             if(typeof value === 'object'){
//                 generateFlattenObject(value, newParent+".") // generateFlattenObject( {P:23,o:{},Q:[]}, C. )
//             }else{
//                 finalObj[newParent] = value
//             }
//         }
//     }
//     generateFlattenObject(obj,parent) // made recursive call
//     return finalObj;
// }

function flattenObject1(obj, parent) {

    const finalObj = {}
    const generateFlattenObject = (obj, parent)=>{
        for(let key in obj){
            const newParent = parent+key
            const value = obj[key]
            if(typeof value== 'object'){
                generateFlattenObject(value, newParent+".")
            }else{
                finalObj[newParent] = value
            }
        }
    }
    generateFlattenObject(obj, parent)
    return finalObj;

}


// function flattenObject2 (obj, parent){
    
//     const finalObj = {}
   
//     const generateFlattenObject = (obj, parent)=>{
//         for(let key in obj){
//             const newParent = parent+key
//             const value = obj[key]
//             if(typeof value == 'object'){
//                 generateFlattenObject(obj, newParent+".")
//             }else{
//                 finalObj[newParent] = value
//             }
//         }
//     }
//     generateFlattenObject(obj, parent)
//     return finalObj
// }
const obj = {
    A:"12",
    B:23,
    C:{
        P:23,
        O:{
            L:56
        },
        Q:[1,2]
    },
    D:{
        R:{
            S:"Ram",
            T:{
                W:"MIke",
                X: 76
            }
        },
        Z:98
    }
};

console.log(flattenObject1(obj, ""))

//expected

// {
//     a:12,
//     b:23,
//     c.p:23,
//     c.o.l:56,
//     c.Q.0:1,
//     c.Q.1:2
// }

//parent is key of object, first create an empty object which contains final output and use recursion