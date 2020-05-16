/* Не уверен, считаются ли эти две функции двумя разными обработчиками, 
плюс тут наверное сложность высокая получается */

let imgItems = document.getElementsByClassName("slider__item");
imgItems = Array.from(imgItems);

function reduceIndex(i) {    
    let next = i - 1;
    if(next < 0){        
        imgItems[imgItems.length - 1].className = "slider__item slider__item_active";
        imgItems[i].className = "slider__item"
    }
    else {
        imgItems[next].className = "slider__item slider__item_active";
        imgItems[i].className = "slider__item"
    }    
}

function increaseIndex(i) {    
    let next = i + 1;
    if(next > imgItems.length - 1){
        
        imgItems[0].className = "slider__item slider__item_active";
        imgItems[i].className = "slider__item"
    }
    else {
        imgItems[next].className = "slider__item slider__item_active";
        imgItems[i].className = "slider__item"
    }   
}

let arrows = document.getElementsByClassName("slider__arrow");
arrows = Array.from(arrows);
arrows.forEach(function(element) {
    element.addEventListener("click", function(event){
        let activeElement = document.getElementsByClassName("slider__item slider__item_active").item(0);
        let i = imgItems.indexOf(activeElement);

            if(this.className.includes("slider__arrow_prev")){                
                reduceIndex(i)
            }

            else if(this.className.includes("slider__arrow_next")){
                increaseIndex(i)
            }
    })
});

