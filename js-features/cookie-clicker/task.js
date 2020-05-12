const element  = document.getElementById("cookie")
let counter = Number(document.getElementById("clicker__counter").textContent)
element.speed = 0;

let dateFirst;

element.onclick = () => {
    counter += 1;
    let dateClick = new Date();
    if(dateFirst === undefined){
        dateFirst = dateClick;
    }
    else {
        let lastInterval = (dateClick - dateFirst) / 1000;
        console.log(lastInterval)        
        let timeClick = 1 / lastInterval;    
        console.log(`Кликов в секунду: ${timeClick.toFixed(1)}`)
        dateFirst = dateClick;
    }      

    document.getElementById("clicker__counter").textContent = counter;
    if(counter % 2 !== 0){
        element.width = 900 
        element.height = 880
    }
    else {
        element.width = 1000
        element.height = 1000
    }
    
}

