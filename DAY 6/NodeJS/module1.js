function sum(a,b){
    console.log(a+b);
}

function sub(a,b){
    console.log(a-b);
}

function mul(a,b){
    console.log(a*b);
}

function div(a,b){
    console.log(a/b);
}


//key sum and its value is sum too, key mul and its value is mul too
//multiple files export using object key value pair

// module.exports = {
//     sum: sum,
//     sub: sub,
//     mul: mul,
//     div: div,
// } 


//in ES6, if we don't give key then the value becomes the key itself in an object
module.exports = {
    sum,
    sub,
    mul,
    div,
} 

