let tabs = Array.from(document.getElementsByClassName("tab"));
let tabsContent = Array.from(document.getElementsByClassName("tab__content"));

tabs.forEach((element) => {
    element.addEventListener('click', () => {
        let index = tabs.indexOf(element);
        element.classList.add("tab_active");
        
        if(tabsContent[index].closest(".tabs").id === element.closest(".tabs").id){
            tabsContent[index].classList.add("tab__content_active");

            tabsContent.forEach(item => {                
                if(item !== tabsContent[index] && item.closest(".tabs").id === element.closest(".tabs").id){
                    item.className = "tab__content"                    
                }
            })

            tabs.forEach(item => {
                if(item !== element && item.closest(".tabs").id === element.closest(".tabs").id){
                    item.className = "tab"                    
                }
            })
        }
    })
})