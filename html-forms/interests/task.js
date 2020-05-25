const allLi = Array.from(document.getElementsByClassName("interest__check"))

allLi.forEach(element => {
    element.addEventListener('change', function(){       
        if( (element === allLi[0] && element.checked) || (element === allLi[3] && element.checked) ){
           for(item of element.closest(".interest").getElementsByClassName("interest__check")){
               item.checked = true
           } 
        }

        else if( (element === allLi[0] && element.checked === false) || (element === allLi[3] && element.checked === false) ){
            for(item of element.closest(".interest").getElementsByClassName("interest__check")){
                item.checked = false
            } 
         }
    })
})