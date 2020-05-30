const requestURL = 'https://netology-slow-rest.herokuapp.com/poll.php'

function sendRequest(method, url, telo) {
    return new Promise( (resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url)
        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.onload = () => {
            if(xhr.response >= 400){
                reject(xhr.response)
            } else {
                resolve(xhr.response, )
            }
        }
        xhr.onerror = () => {
            reject(xhr.response)
        }

        xhr.send(telo)
    })
}

sendRequest('GET', requestURL, body = null)
.then(data => {
    let metaData;
    let answer;
    document.getElementById("poll__title").innerText = data.data.title;
    data.data.answers.forEach(element => {
        answer = data.data.answers.indexOf(element)
        document.getElementById("poll__answers").insertAdjacentHTML("beforeEnd",
            `<button class="poll__answer" id=${answer}>
                ${element}
            </button>`
        )
    });    
    metaData = `vote=${data.id}`
    return new Promise( (resolve, reject) => {
        resolve(metaData)
    })
})
.then((metaData) => clickListener(metaData) )

function clickListener(data) {
    Array.from(document.getElementsByClassName("poll__answer")).forEach(element => {
        element.addEventListener('click', (event) => {
            data += `&answer=${element.id}`            
            sendRequest('POST', requestURL, data)
                .then( (response) => {
                    console.log(response)
                })
         
        })
    })
}

