/*let a= new String("Hello");
let b="Hello";

if(a==b)
{
    console.log("Yes");
}
else
{
    console.log("No");
}*/

// const obj = {
//     name: 'Ajay',
//     lastName: 'Tiwari'
// }

// const obj = {
//     "name": 'Ajay',
//     "lastName": 'Tiwari'    //in json everything in double quotes except number and boolean
// }
// const str = JSON.stringify(obj);  //convert object to string using JSON
// document.write(str); 

// const obj = {
//     "name": "Shubham",
//     "lastname": "Tiwari"
// }

// obj.age = 20; //property is changing only, property can be changed, no re-assignment can be done, new property will be added in obj address area only
// console.log(obj);






// ARRAY

// let arr=[1,2,34];
// arr=[2,3,4];
// console.log(arr);

// const arr=[1,2,34];
// arr[1]=20;
// console.log(arr);
// arr[10]=40;
// console.log(arr);

// arr.push("Shubh");
// console.log(arr);
// console.log(typeof(arr));


// //dot operator in obj can't be used on number

// //array methods - maps, filter, reduce

// console.log(Array.isArray(arr));   //returns true if


//Write a function to check if a given object is object or array

// function checkifobject(val) {
//     return Array.isArray(val)? "It's an array" : Not an array;

//     // if(Array.isArray(arr))
//     // {
//     //     console.log("It's array");
//     // }
//     // else
//     // {
//     //     return false;
//     // }
// }

// let val = [1,2,3,4,5];
// console.log(checkifobject(val));

// // const obj={
// //     name: Shubh,
// //     age:12,
// // }
// // console.log(checkifobject(obj));

// function  checkIfObject(x){
//     if(Array.isArray(x)){
//         console.log("Not object");
//     }
//     else if(typeof(x)=="object")
//     {
//         console.log("object");
//     }
//     else
//     {
//         console.log("Not object");
//     }
// }
// const x={
//     name: "shubham",
// }
// checkIfObject(x);


//Homework - for of and for in, for all loop to read

// const arr=['name', 2, true];
// const obj={
//     'name':"ajay", 
//     age:20,
//     1:'else',
// };
// for(let i=0;i<=2;i++)
// {
//     console.log(arr[i]);
// }
// for(let i=0;i<=2;i++)
// {
//     console.log(obj[i]);
// }


// for(let i of arr) //access the array, only works for array
// {
//     console.log(i);
// }

// console.log('------------------------');

// for(let i of obj){
//     console.log(i) //
// }  

// for(let i in arr) // for in a special kind of loop, it access the keys and prints the indexs, keys
// {
//     console.log(i);
// }

// console.log('------------------------');

// for(let i in obj){
//     console.log(i) //
// }  




