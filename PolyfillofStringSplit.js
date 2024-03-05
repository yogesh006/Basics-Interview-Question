//polyfill of string.split()

const myStringSplit = (string, delimeter) =>{
    const res=[]
    if(delimeter ==='') return Array.from(string)
    const startSplit =(str,i) =>{
        if(i>=string.length) return
        const index = str.indexOf(delimeter)
        if(index >=0){
            res.push(str.substring(0, index))
            startSplit(str.substring(index+delimeter.length), index + delimeter.length)
            
        }
        else{
            res.push(str)
        }
    }
    startSplit(string, 0)
    return res
}

console.log(myStringSplit('The quick the fox jumps the lazy dog.', 'the'))
//Output
// [ 'The quick ', ' fox jumps ', ' lazy dog.' ]

console.log(myStringSplit('The quick the fox jumps the lazy dog.', ''))
//Output
// [
//     'T', 'h', 'e', ' ', 'q', 'u', 'i',
//     'c', 'k', ' ', 't', 'h', 'e', ' ',
//     'f', 'o', 'x', ' ', 'j', 'u', 'm',
//     'p', 's', ' ', 't', 'h', 'e', ' ',
//     'l', 'a', 'z', 'y', ' ', 'd', 'o',
//     'g', '.'
//   ]

console.log(myStringSplit('The quick the fox jumps the lazy dog.', ' '))
//Output
// [
//     'The',   'quick',
//     'the',   'fox',
//     'jumps', 'the',
//     'lazy',  'dog.'
//   ]

  ///one edge case of the delimiter being present at the beginning of the string(or substring while recusrsive call). To handle that we need to add additional check if index i === 0.