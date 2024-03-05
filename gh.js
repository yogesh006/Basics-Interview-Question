let L=5;
function getName(){
    a={
        lk:"78"
    }
    
    return function(){
        console.log(a.lk)
    }
    //console.log(m)
}

const k=getName()
k()