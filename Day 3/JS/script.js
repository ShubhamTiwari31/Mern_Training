//JavaScript Intro

// // print the line
// console.log("Hello");

// // Variables in Javascript

// // declaring a variable with value "John"
// // var is oldest keyword, 
// var msg = "John";
// console.log(msg);

// // Changing the type of data stored in the variable from number to string
// var age = 10;
// age = "Done";
// console.log(age);

// //Hoisting
// /*  
// Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their 
// containing scope during the compilation phase, before the code is actually executed. This means you can use a
// variable or call a function before it's declared in your code. However, only the declarations are hoisted, 
// not the initializations
// */

// //for loop in java

// for (var i=0 ; i <5 ;i++) {
//     console.log(i);
// }
// console.log(i);


// let message = "Hello"; //reassignment allowed
// message="else";
// console.log(message);

// const message="Hello";  //no assignment or declaration, it must be initialized
// console.log(message);

// message='else'; //be default assigned var
// console.log(message);


// alert("LINKED");


//Datatypes


// let age = 20;
// age='abcd';
// console.log(typeof(age)); //tells the datatype of the variable



// Array

// let arr=['a','r','r','a','y'];
// arr[0]='abcd';
// console.log(arr);

//Type cohersion

// let str="12"; //converted to number from string
// let age=20;
// let ans=age+str;
// console.log(ans);

// let str='12';
// let age=20;
// let ans=age-(-str);
// console.log(ans);

// let str='12';
// let p=parseInt(str);
// let n=Number(str);
// console.log(p,n);

// let a='12';
// let b='12';

// if(a==b)
// {
//     console.log('yes');
// }
// else
// {
//     console.log('no');
// }

// if(a===b)
// {
//     console.log('yes again');
// }
// else
// {
//     console.log('no again');
// }

// Functions

// function print(str)
// {
//     console.log(str);
// }
// const s='Hello';
// print(s);



// function sum(a,b)
// {
//     if(a && b){
//     console.log(a+b);
//     }
//     else{
//         console.log(b);
//     }
// }
// sum(10);


// function declaration
//arrow function assignment

//conditional statements


// const obj={
//     l: 'one',
//     'name' : 'Shubham',
//     12: 'twelve',
// };

// console.log(obj.l);

// const fullName = obj.firstName + ' ' + obj.lastName;
// const fullName = '$(obj.firstName) $(obj.lastName)'; 

const x = prompt('Please tell the property to know');
console.log(x);

