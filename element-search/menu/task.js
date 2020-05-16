/* Клик сначала проверяет родителя ссылки, на которой вызван, на наличие в этом родителе списка с нужным
 ClassName, если находит - то это и есть наше подменю, обработчик клика отключает стандартное поведение и
 применяет нужный CSS */


let subLists = document.getElementsByClassName("menu_sub") 
subLists = Array.from(subLists);                            // Массив подсписков "menu_sub"

let links = document.getElementsByClassName("menu__link");
links = Array.from(links);                                  // Все <a/>

links.forEach(function (element) {       
    element.addEventListener("click", function(event){ // Если есть "menu_sub" применять далее логику, если нет - просто слушать.
        let dropDownList = element.parentElement.getElementsByTagName("ul").item(0);
        
        if(dropDownList.className.includes("menu menu_sub")){            // "menu_sub" в родителе элемента есть!
            event.preventDefault(); 
            
            if(dropDownList.className === "menu menu_sub menu_active"){  // Выключение элемента если активен и наоборот.
                dropDownList.className = "menu menu_sub"
            }
            else {
                dropDownList.className = "menu menu_sub menu_active"
            }
            
            subLists.forEach((item) => {                            // Отключение всех "menu_sub" от CSS-правила,  
                if(item !== dropDownList){                          // кроме того, на котором произошёл клик
                    item.className = "menu menu_sub"
                }
            })
       }
    });        
}
);

