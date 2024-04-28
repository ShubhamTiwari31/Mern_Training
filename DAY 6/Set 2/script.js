const arr=['Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Pune', 'India', 'Russia', 'USA']
let a2=arr.filter((a)=>{
    if(a.includes('i')||a.includes('I')){
        return true;
    }
})

const ans = arr.filter((a)=>{
    const ns = a.toLowerCase();
    if(ns.includes('india')){return true;}
    else{return false; }
});


console.log(a2);
console.log(ans);