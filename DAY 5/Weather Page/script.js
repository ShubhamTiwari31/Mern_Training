function fetchAPI(){
    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=P6Y2XDD8QGZCSZ2HBZLH6LFCU';
    fetch(url)
    .then((res)=>res.json())
    .then(console.log);
}
fetchAPI();

function renderUI(data){
    const days = data.days;
    console.log(days);

    const row = document.createElement("tr");
    
    const cell1 = document.createElement("th");
    cell1.innerText = 'Date';
    row.appendChild(cell1);

    const cell2 = document.createElement("th");
    cell2.innerText = 'Maximum Tempreature';
    row.appendChild(cell2);

    // const cell3 = document.createElement("th");
    // cell3.innerText = 'Minimum Tempreature';
    // row.appendChild(cell3);
    
    root.appendChild(row);

    //make child rows
    const childRow = document.createElement("row");
    const c1 = document.createElement("th");
    cell2.innerText = 'Maximum Tempreature';
    childRow.appendChild(c1);
}

renderUI();