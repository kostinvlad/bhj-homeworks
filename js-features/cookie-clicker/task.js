const element  = document.getElementById("cookie")
let counter = Number(document.getElementById("clicker__counter").textContent)
element.speed = 0;

let date = new Date();
console.log(date)
element.onclick = () => {


    counter += 1;
    document.getElementById("clicker__counter").textContent = counter;
    if(counter % 2 !== 0){
        element.width = 900 
        element.height = 880
    }
    else {
        element.width = 1000
        element.height = 1000
    }
    console.log("click")
}

