let timer = Number(document.getElementById("timer").textContent)

const timerSurprise = setInterval(() => {
    timer -= 1; console.log(timer);
    document.getElementById("timer").textContent = timer;
    if(timer < 1){
        alert("Вы победили в конкурсе!")
        clearInterval(timerSurprise)
    }
}, 1000);


