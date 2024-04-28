// // // //

// // // const fsPromises = require('fs/promises');

// // // const pr = fsPromises.readFile('./myReadMe.txt', {encoding: 'utf8'});
// // // pr.then((res)=>{
// // //     console.log(res);
// // // })

// // //url, uri
// // //query is a part of path?

// // // http://localhost:1400/
// // const http = require('http');
// // http.createServer();

// // const app = http.createServer((req,res)=>{
// //     console.log("Request Recieved!");
// //     console.log(req.url);
// //     res.end('hello');
// // });

// // app.listen(1400, ()=>{
// //     console.log('..........server started!...............')
// // });

// const http = require('http');

// const fs = require('fs')
// const data = fs.readFileSync('./data.json','utf8');
// // console.log(data);  //to print data
// // console.log(typeof(data));  //to check data is in which format
// const dataobj = JSON.parse(data);
// // console.log(dataobj)
// const product = dataobj.product;

// const htmlTemplate = `
//     <!DOCTYPE HTML>
//     <html lang='en'>
//         <head>
//         </head>
//         <body>
//             product_page
//         </body>
//     </html>
// `
// const cardtemplate = `
//     <div class = 'product-card'>
//         <h4> title
//         </h4>
//         <p> details
//         </p>
//     </div>
// `

//     const allcards = product.map((elem)=>{
//         let newcard = cardtemplate;
//         newcard = newcard.replace('title',elem.title);
//         newcard = newcard.replace('details',elem.description);
//         return newcard;
//     });
//     // const page = htmlTemplate.replace('product_page',allcards);

//         const app = http.createServer((req,res)=>{

//             console.log(req.url);
//             res.writeHead(200,{'content-type':'text/html' })
//             res.end(page);
//         });

//     app.listen(1400,()=>{
//         console.log('...........server started.........................')
//     });

//http://localhost:1400/
// const http = require('http');

// const fs = require('fs');
// const data = fs.readFileSync('./data.json','utf8');
// const dataObj = JSON.parse(data);
// // console.log(dataObj);
// const products  = dataObj.products;
// console.log(products);

// const htmlTemplate =   `
// <!DOCTYPE HTML>
// <html>
// <head>
//     <link rel="stylesheet" href="style.css"/>
// </head>
// <body>
//     product
// </body>
// </html>
// `

// const cardTemplate = `
// <div class = 'product-card'>
// <h4>_TITTLE</h4>
// <p>_INFO</p>
// </div>
// `
// // const card1 = cardTemplate
// // .replace('_TITTLE', products[0].title)
// // .replace('_INFO',products[0].description);

// // const card2 = cardTemplate
// // .replace('_TITTLE', products[1].title)
// // .replace('_INFO',products[1].description);

// // const allCards = card1+card2;

// //---------------------------------------------------------------------------------------
// const allCards = products.map((elem)=>{
//     let newCard = cardTemplate;
//     newCard = newCard.replace('_TITTLE', elem.title);
//     newCard = newCard.replace('_INFO', elem.description);
//     return newCard;
// })

// const allCardsString = allCards.join(' ');

// //---------------------------------------------------------------------------------------

// const page = htmlTemplate.replace('product', allCardsString );

// const app = http.createServer((req, res)=>{
//     console.log('received');
//     console.log(req.url);
//     res.writeHead(200,{
//         'Content-type': 'text/html',
//     })
//     // console.log(Object.keys(req));       //keys
//     res.end(page);         //use button above tab  template literal
// });

// app.listen(1400, ()=>{
//     console.log("-----------server started----------------");
// });     //1000<port<9999

const http = require("http");
const fs = require("fs");
const data = fs.readFileSync("./data.json", "utf8");
const dataObj = JSON.parse(data);
const products = dataObj.products;

const htmlTemplate = `
<!DOCTYPE HTML>
<html>
<head>
    <title>Products</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <div class="container">
        product
    </div>
</body>
</html>
`;


const cardTemplate = `
<div class='product-card'>
<a href='http://localhost:1400/?id=_ID'>
    <h4>_TITLE</h4>
    <img src='_IMAGE' alt='_TITLE'>
    <p>_INFO</p>
</div>
`;


const allCards = products.map((elem) => {
  let newCard = cardTemplate;
  newCard = newCard.replace("_TITLE", elem.title);
  newCard = newCard.replace("_INFO", elem.description);
  newCard = newCard.replace("_IMAGE", elem.images[0]);
  newCard = newCard.replace("_ID", elem.id);

  return newCard;
});



const allCardsString = allCards.join(" ");

const page = htmlTemplate.replace("product", allCardsString);

const app = http.createServer((req, res) => {
  console.log("received");
  console.log(req.url);
  if (req.url === "/styles.css") {
    const cssFile = fs.readFileSync("./styles.css", "utf8");
    res.writeHead(200, { "Content-type": "text/css" });
    res.write(cssFile);
    res.end();
  } else {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.end(page);
  }
});

app.listen(1400, () => {
  console.log("-----------server started----------------");
});
