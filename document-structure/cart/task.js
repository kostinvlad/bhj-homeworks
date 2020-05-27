let controler = Array.from(document.getElementsByClassName("product__quantity-control"))

controler.forEach(element => {
    
    element.addEventListener("click", (event) => {
        let ownValue = element.parentElement.querySelector(".product__quantity-value");
        let counterValue = Number(ownValue.innerText);        

        if(counterValue > 1 && element.className.includes("product__quantity-control_dec")){            
            ownValue.innerText = counterValue -= 1;            
        }

        else if(element.className.includes("product__quantity-control_inc")) {
            ownValue.innerText = counterValue += 1;            
        }
    })    
})

let addButton = Array.from(document.getElementsByClassName("product__add"))

addButton.forEach(element => {    
    element.addEventListener("click", (event) => {
        let basket = document.querySelector(".cart__products")
        let ownValue = element.parentElement.querySelector(".product__quantity-value");        
        let src = element.closest(".product").querySelector("img").src
        let id = element.closest(".product").dataset.id

        let currentElement = `<div class="cart__product" id="${id}" data-id="${id}">
        <img class="cart__product-image" src="${src}">
        <div class="cart__product-count">${ownValue.innerText}</div>
    </div>` 

        if(!document.getElementById(id)){
            basket.insertAdjacentHTML("beforeEnd",
            currentElement)
        }
        
        else if(document.getElementById(id)){
            let increase = Number(document.getElementById(id).getElementsByClassName("cart__product-count")[0].innerText) 
            increase += Number(ownValue.innerText)
            document.getElementById(id).getElementsByClassName("cart__product-count")[0].innerText = increase           
        }
    })
})