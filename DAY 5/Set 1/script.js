// let arr=[2,10,21,32]
// function printPretty(elem)
// {
//     console.log(': ', elem);
// }

// function printArray(arr){
    // for(let i=0;i<arr.length;i++)
    // {
    //     console.log(arr[i]);
        // printPretty(arr[i]);
    // }
    // arr.forEach(printPretty);

    // arr.forEach((a,b,c)=>
    // {
    //     console.log(':',a,b,c);
    // });
//     arr.map((a,b,c)=>
//     {
//         console.log(':',a,b,c);
//     });
// }
// printArray(arr);


//ASYNCHRONOUS JAVASCRIPT

// function printPretty(elem)
// {
//     console.log("prettyStart");
//     let ans=2+3;
//     console.log(ans);
//     console.log('prettyEnd');
// }

//time is in milisecond
// setTimeout(printPretty, 1000);

// console.log("GEC End");


// Promises

// console.log("start");

// const req = fetch("https:\\api.github.com\users\deepak3440");
// console.log(req);
// req.then(()=>console.log('Fetched'));
// console.log("End");

console.log("Start");
const req = fetch('https://dummyjson.com/products/1')
const res = req.then(res => res.json)
res.then((data) => console.log(data))
console.log("End"); 

