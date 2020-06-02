let hasTooltips = Array.from(document.getElementsByClassName("has-tooltip"))

hasTooltips.forEach(item => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        
        let toolTips = Array.from(document.getElementsByClassName("tooltip"))
                
        toolTips.forEach(tip => {
            if(item.title !== tip.innerText){
                tip.remove()
            }
        })  

        if(document.getElementsByClassName('tooltip').item(0)){            
            document.getElementsByClassName('tooltip').item(0).classList.toggle("tooltip_active")
        } else {
            let position = item.getBoundingClientRect();
            let hint =

            `<div class='tooltip tooltip_active' style='left: ${position.x}px; top: ${position.y + 17}px;'>
                ${item.title}
            </div>`;

            item.insertAdjacentHTML("afterEnd", hint);
        }
    })    
})