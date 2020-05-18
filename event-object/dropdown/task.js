let allDDValue = Array.from(document.getElementsByClassName("dropdown__value")); // "Заголовки" списка

allDDValue.forEach(element => {        // Обработчик для каждого "заголовка" списка -                                         
    let ownDropList = element.parentElement.querySelector(".dropdown__list");   
    element.addEventListener("click", function() {        
        ownDropList.classList.add("dropdown__list_active");  // Меняет CSS самого списка   
    })

    let allOwnDropLinks = Array.from(ownDropList.getElementsByClassName("dropdown__link")); // Ссылки каждого списка

    allOwnDropLinks.forEach(link => { // Обработчик каждой ссылки -
        link.addEventListener("click", function(event) {
            event.preventDefault();
            element.textContent = link.textContent;  // Устанавливает текст из жмякнутой ссылки 
            ownDropList.className = "dropdown__list";    //   "заголовком" текущего списка и закрывает его     
        }, false);
    })
});
