//read file
const fs = require("fs");
const http =require("http"); //cread http
const url = require('url');


//read data from the file to check (we can read data or not)
const data = fs.readFileSync("./data.json","utf8");
const dataObj = JSON.parse(data).products;  //make data color full


//adding form here to make search option above
const inputElement = `
<form action='/product' method="GET">
    <input type="text" name="productNmae">
    <button type="submit">Search</button>
</form>    
`

// console.log(dataObj); //to print data in terminal


//create card template
const cardTemplate = `
    <div class="product-card">
        <h3>_TITLE</h3>
        <img src="_IMAGE" alt="PRODUCT_IMAGE"/>
        <a href="_PRODUCT_LINK">more info</a>
    </div>

`;

const styleSheet = `
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.product-card {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 10px;
    padding: 20px;
    width: 300px;
    transition: box-shadow 0.3s ease;
}

.product-card h4 {
    color: #333;
}

.product-card p {
    color: #666;
}

.product-card:hover {
    background-color: #dbff77; /* Change background color on hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
    transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
}

.product-card:hover h4 {
    color: #ff5733; /* Change title color on hover */
}

.product-card:hover p {
    color: #0fc22d; /* Change title color on hover */
}
.product-card img {
    max-width: 100%; 
    height: auto; 
    display: block; 
    margin-top: 10px;
}`
//creating for loop to show result
let result = [];
for(let i = 0;i<dataObj.length;i++){
    let temp = cardTemplate;
    temp = temp.replace('_TITLE',dataObj[i].title);  // taking title from json file and printing 
    temp = temp.replace('_IMAGE',dataObj[i].images[0]); // taking images from json file and printing it and writing image[0] because pehle index vala link open ho because multilple link hai json m too pehle open ho us k lea index de rahe h images[0] me.
    temp = temp.replace('_PRODUCT_LINK',/product?id=${i});
    result.push(temp);
}
result = result.join('');
// console.log(result);


//create server
const server = http.createServer((req,res)=>{
    const {pathname, query} = url.parse(req.url, true);
        // const pathname = path.pathname;
        console.log('\n',pathname,'\n');
        if(pathname =='/home'){
            res.writeHead(200,{"content-Type":"text/html"});
            res.end(`
            <html>
                <head>
                    <title>Home</title>
                    <style>${styleSheet}</style>
                </head>
                <body>
                
                        <div class='container'>
                            ${inputElement+result}
                        </div>
                </body>
            </html>
            
            `
        );
        }
        else if(pathname=='/product'){
            // res.end('product '+ query.id);
            res.writeHead(200,{"content-Type":"text/html"});
            const id= query.id;
            
            //making edit here.....................
            const pName= query.productNmae;

            const item = dataObj[id]
        //     res.end(`
                
        //         <div class='product-card'>
        //         <div style="display: flex; justify-content: center; color: black; ">
        //             <a href="./home" style="color: black; background-color: rgb(46, 184, 184);
        //             text-decoration: none;
        //             padding: 10px; border-radius: 20px; box-shadow: 10px;
        //             transition: color 0.3s ease; " onmouseover="this.style.color='red'" onmouseout="this.style.color='black'">Home</a>
        //         </div>
        //             <h4>${item.title}</h4>
        //             <img src="${item.images[0]}" alt="image"></img>
        //             <p>${item.description}</p>
        //             <p>${item.price}</p>
        //             <p>${item.rating}</p>
        //         </div>
        // `)

        if(pName){
            const searchNameResults = dataObj.filter((elem)=>{
                if(elem.title.includes(pName)){
                    return true;
                }
                else{
                    return false;
                }
            })
            res.end(JSON.stringify(searchNameResults));
        }


        // const productData= dataObj[id];
        // // console.log(dataObj[id])
        // res.end(productData.title);
    }
    else{
        res.end('<h3>error......</h3>');
    }

    // res.end(result);
});
server.listen(2200);  //listen server se server call hoga or jo us k aandar h vo sab read hoga to dispaly hoga because res.end('hello')=>respond send karega