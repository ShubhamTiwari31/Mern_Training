// console.log('start');
// setTimeout(()=>{console.log('Timeout...')},3000)
// console.log('end');

// setTimeout(()=>{console.log('Timeout 1...')},5000)
// console.log('start');
// setTimeout(()=>{console.log('Timeout 2...')},5000)
// console.log('intermediate');
// console.log('end');

//PROMISES

// function createOrder(x,fn){
//     console.log(x);
//     setTimeout(()=>{fn('lik123'), 1000}); //Inversion of control
//     setTimeout(()=>{fn('lik123'), 1000}); 

// function makePayment(orderID){
//     console.log(orderID);
// }

// createOrder('Soap',makePayment);

// const pr = new Promise((resolve,reject)=>{
//         setTimeout(()=>{reject("out-of-stock");},4000);
// });

// setTimeout(()=>{console.log('First timeout...')}, 0)
// // console.log(pr);

// pr.then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


// setTimeout(function abc(){
//     console.log('I am one');
// }, 0);

// const pr = new Promise((res,rej)=>{
//     setTimeout(()=>{res('done')}, 0);
// })

// pr.then(function b(res){
//     console.log("promise completed: ", res);
// })

// setTimeout(function xyz(){
//     console.log("I am two");
// }, 0);

