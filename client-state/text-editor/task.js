let textArea = document.getElementById('editor')
let button = document.getElementById('button')
textArea.value = localStorage.getItem("text")

button.addEventListener('click', () => {
    textArea.value = ""
    localStorage.clear()
})

textArea.addEventListener('input', (event) => {
    localStorage.setItem("text", textArea.value)
} )

