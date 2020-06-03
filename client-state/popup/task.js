
if(getCookie("shown") !== 'true'){
    const popUp = setTimeout(() => {    
        let pop = document.getElementById("subscribe-modal");    
        pop.classList.add("modal_active")
     
    }, 2000)
}

document.getElementById("subscribe-modal").getElementsByClassName("modal__close").item(0).onclick = () => { 
    document.getElementById("subscribe-modal").className = "modal"
    document.cookie = "shown=true; path=/" 
    // console.log(document.cookie)   
    }

function getCookie(name){
    let value = "; " + document.cookie
    let parts = value.split("; " + name + "=")
    if(parts.length === 2){
        return parts
        .pop()
        .split(';')
        .shift()
    }
}

