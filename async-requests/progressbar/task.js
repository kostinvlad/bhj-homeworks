const requestURL = 'https://netology-slow-rest.herokuapp.com/upload.php'
const progress = document.getElementById( 'progress' );

document.getElementById('send').addEventListener('click', function(event) {    
    let input = document.forms.form.file
    let file = input.files[0]
    event.preventDefault()
    
    if (file) {
        upload(file);
      }
      return false;
})

function upload(file) {
    var xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', function(event) {         
        if(event.lengthComputable) {
            progress.max = event.total
            progress.value = event.loaded                       
        }    

    xhr.onload = function(event) {        
        progress.value = event.loaded
        console.log("Загрузка завершена успешно")
    }
    })
  
    xhr.open('POST', requestURL);

    xhr.send(file);
  
}