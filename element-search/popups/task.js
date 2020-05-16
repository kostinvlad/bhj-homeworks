const popUp = setTimeout(() => {    
    let pop1 = document.getElementById("modal_main");
    let pop2 = document.getElementById("modal_success");
    pop1.className = "modal modal_active";
    
    pop1.getElementsByClassName("modal__close").item(0).onclick = () => {  // Close-cross
        pop1.className = "modal"
    }
    pop1.getElementsByClassName("modal__close").item(1).onclick = () => { // Button "do well"
        pop1.className = "modal"
        pop2.className = "modal modal_active"
    }
    pop2.getElementsByClassName("modal__close").item(0).onclick = () => {
        pop2.className = "modal"
    }
    pop2.getElementsByClassName("btn btn_success").item(0).onclick = () => {
        pop2.className = "modal"        
    }   
}, 2000)

popUp;