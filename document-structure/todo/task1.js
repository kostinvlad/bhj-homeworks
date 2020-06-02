
// document.getElementById("tasks__list").insertAdjacentHTML( "beforeEnd", localStorage.getItem("storageTasks") )

let storageTasks = localStorage.getItem("storageTasks").split(',')
console.log(storageTasks)
let crosses = Array.from(document.getElementsByClassName("task__remove"));
let tasksList = document.getElementById("tasks__list");


if(localStorage.getItem("storageTasks")){
   
}

function renderLocalTask(taskItem){
  let task = 
  `<div class="task">
    <div class="task__title">
      ${textInput}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>`; 
  
  tasksList.insertAdjacentHTML("beforeEnd", task)
}

let button = document.getElementById("tasks__add")
button.addEventListener("click", (event) => {    
    let textInput = document.getElementById("task__input").value       
    
    task = `<div class="task">
    <div class="task__title">
      ${textInput}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>`;    
    
    if(textInput !== ""){

        tasksList.insertAdjacentHTML("beforeEnd", task)
        localDataTasks.push(textInput) 
    }

    localStorage.setItem("storageTasks", localDataTasks)
    document.getElementById("task__input").value = "";
})

crosses.forEach(element => {          
    element.onclick = () => {
        element.closest(".task").remove();    
        localStorage.setItem("storageTasks", tasksList.innerHTML);
    }  
})

