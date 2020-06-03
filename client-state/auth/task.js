let formDiv = document.getElementById('signin')
let requestURL = 'https://netology-slow-rest.herokuapp.com/auth.php'
let formInputs = document.getElementById('signin__form')
formDiv.classList.add("signin_active")

document.getElementById('signin__btn').addEventListener('click', (e) => {
    let form = new FormData( document.getElementById('signin__form') )
    document.getElementById('welcome').classList.remove('welcome_active')
    e.preventDefault();
    let xhr = new XMLHttpRequest;
    xhr.open('POST', requestURL)
    xhr.responseType = 'json'
    xhr.send(form)

    xhr.onload = function() { 
        if(xhr.response.success === true) {
            document.getElementById('user_id').innerText = xhr.response.user_id
            formDiv.classList.remove("signin_active")
            document.getElementById('welcome').classList.add('welcome_active')
        }
        else {
            alert('Неверный логин/пароль')
        }      
    }
})