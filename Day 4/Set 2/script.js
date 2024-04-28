//HOMEWORK - ARRAY AND ITERABLES ME DIFFERENCE
// //WINDOW

// console.log(window);
// window.console.log(window.innerHeight);//to check window height
// window.console.log(window.innerWidth);//to check window width

///DOCUMENT OBJECT MODEL

// console.dir(window.document);
// console.log(window.document);
// console.dir(window);
// // console.log(console);

//Selectors

// const res=document.getElementsByTagName("h3");
// console.log(res);

// const result=document.getElementById("h4kibau");
// console.log(result);

// const result=document.getElementsByClassName('div.bau');
// console.log(result);

//QUERY SELECTOR

//manipulating
// const res=document.getElementById("h21");
// res.innerText="nikal chal";
// console.log(res);

// const result=document.getElementsByTagName("div");
// result[1].innerText="bhaag yaha se";
// console.log(result);

// const result=document.getElementsByTagName("div");
// result[0].innerHTML="<p><b>Hi Hello</b></p>";
// console.log(result);

// const result=document.getElementsByTagName("p");
// result[0].setAttribute('tagName', 'h1');
// console.log(result); //can not be changed
















const nE=document.createElement("h3");
// console.log(nE);
nE.innerText= "I am a new element";
console.log(nE);

document.body.appendChild(nE);

//to insert in first div
const fdiv=document.getElementsByTagName("div");
fdiv[0].appendChild(nE);

//remove a child from file
//Homework - deep copy and shallow copy


// or you can use the id of the tag to remove it by using:
// document.getElementById("theId").remove
