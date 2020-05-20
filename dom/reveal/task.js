document.addEventListener('scroll', function(event){
    for(item of document.getElementsByClassName('reveal')){
        let topInterval = item.getBoundingClientRect().top
        let bottomInterval = item.getBoundingClientRect().bottom
        let innerHeight = window.innerHeight
        
        if(topInterval > innerHeight && bottomInterval > innerHeight || (topInterval < 0 || bottomInterval < 0)){
            item.className = "reveal";
        }
        else {            
            item.classList.add("reveal_active")
        }
    }
})