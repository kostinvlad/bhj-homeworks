let toDoManager = {
    tasksList: document.getElementById("tasks__list"),    
    template: `<div class="task">
                    <div class="task__title">
                    <text>
                    </div>
                    <a href="#" class="task__remove">&times;</a>
                </div>`,    
    
    deleteTask: function(task){
        task.closest('.task').remove()
    },

    renderStorage: () => {
        let parsedStorage = JSON.parse( localStorage.getItem("storageTasks") );        
        parsedStorage.forEach(item => {insertToListIt(item)})        
    },

    insertToListIt: function(input) {
        if(input !== "") {
            let forInsert = toDoManager.template
            .replace('<text>', input)  
            toDoManager.tasksList.insertAdjacentHTML("beforeEnd", forInsert);
            toDoManager.uploadStorageNewState();
            let cross = Array.from(document.getElementsByClassName('task__remove')).reverse()[0]
                 
            cross.addEventListener("click", () => {
                toDoManager.deleteTask(cross);
                toDoManager.uploadStorageNewState();
    
            })
        }     
    },

    uploadStorageNewState: () => {       
        let temporary = []; 
        let array = Array.from( document.getElementsByClassName('task__title') )
        array.forEach(item => {
            temporary.push(item.innerText)
        })
        console.log(temporary)
        localStorage.setItem("storageTasks", JSON.stringify(temporary) ) 
        document.getElementById("task__input").value = ""
    }
}

let insertToListIt = function(input) {
    if(input !== "") {
        let forInsert = toDoManager.template
        .replace('<text>', input)  
        toDoManager.tasksList.insertAdjacentHTML("beforeEnd", forInsert);
        toDoManager.uploadStorageNewState();
        let cross = Array.from(document.getElementsByClassName('task__remove')).reverse()[0]
             
        cross.addEventListener("click", () => {
            toDoManager.deleteTask(cross);
            toDoManager.uploadStorageNewState();

        })
    }     
}

let button = document.getElementById("tasks__add")
button.addEventListener("click", (event) => {
    event.preventDefault();
    insertToListIt(document.getElementById("task__input").value)    
})

if( JSON.parse( localStorage.getItem("storageTasks"))  !== null ){    
    toDoManager.renderStorage()
}

