console.log("...APP Started...");

function callAPI(){
     fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=016c0157fec5421db1325d939622303d")
    .then((res)=> res.json())
    .then((data)=>renderUI(data))
}


function renderUI(data){
    //got the articles from data
    const articles=data.articles;
    const root = document.getElementById( "root" );

    //single article from array
    for(let i=0;i<articles.length;i++){
    const ar = articles[i];
    // created parent div

    const div = document.createElement('div');
    div.setAttribute("class","news-card");
    const h3 = document.createElement('h3'); 
    h3.innerText=ar.title;
   
    const img = document.createElement("img");
    img.src = ar.urlToImage;
    div.appendChild(h3);
    div.appendChild(img);
    

    const p = document.createElement("p");
    p.innerText=ar.description;
    div.appendChild(p);

    // const a = document.createElement("a");
    // a.innerText='Read more...';
    // a.target=blank;
    // a.href=ar.url;
    // div.appendChild(a);
    

    root.appendChild(div);
    
    }
}
callAPI();