function getInfo(e){
    console.log("Button Clicked");
    const d=document.querySelector("d");
    const el=document.createElement('p');
    el.innerText= "Hello World!";
    d.prepend(el);
}

