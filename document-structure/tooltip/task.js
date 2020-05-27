let hasTooltips = Array.from(document.getElementsByClassName("has-tooltip"))

hasTooltips.forEach(item => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        let position = item.getBoundingClientRect();
        let hint = `<div class='tooltip' style='left: ${position.x}px; top: ${position.y + 17}px; display: block;'>
        ${item.title}
      </div>`;

        item.insertAdjacentHTML("afterEnd", hint);
        let toolTips = Array.from(document.getElementsByClassName("tooltip"))
                
        toolTips.forEach(tip => {
            if(item.title !== tip.innerText){
                tip.remove()
            }
        })    
    })    
})