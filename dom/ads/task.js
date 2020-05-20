setInterval(() => {
    for(i = 0; i < document.getElementsByClassName("rotator__case_active").length; i++){
        let currentActiveItem = document.getElementsByClassName("rotator__case_active").item(i);
        let test = currentActiveItem.nextElementSibling;    
    
        if(test !== null){
            let nextActiveItem = currentActiveItem.nextElementSibling;
            currentActiveItem.className = "rotator__case"; 
            nextActiveItem.style.color = nextActiveItem.dataset.color;
            nextActiveItem.className = "rotator__case rotator__case_active";        
        } 
        else {        
            nextActiveItem = currentActiveItem.parentElement.getElementsByClassName("rotator__case").item(0);

            nextActiveItem.className = "rotator__case rotator__case_active";
            nextActiveItem.style.color = nextActiveItem.dataset.color;
            currentActiveItem.className = "rotator__case";
        }
    }

}, 1000)

