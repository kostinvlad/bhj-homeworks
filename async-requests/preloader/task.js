
let arrayLocalStorage = JSON.parse(localStorage.getItem("exchange_rates"));
let valuteList = document.createElement('div')
valuteList.id = "items"

const requestUrl = 'https://netology-slow-rest.herokuapp.com'
let loader = document.getElementById("loader");

let xhr = new XMLHttpRequest();

if(arrayLocalStorage === null){
    loadActualRates()
} else {
    renderLocalRates()
}

function renderLocalRates() {
    let oldChild = document.getElementById("items")
    for(item in arrayLocalStorage){
        valuteList.insertAdjacentHTML('beforeEnd', 
        `<div style="display: flex">
            <div class="item__code">
                ${arrayLocalStorage[item]['Charcode']}
            </div>
            <div class="item__value">
                ${arrayLocalStorage[item]['Value']}
            </div>
            <div class="item__currency">
                руб.
            </div>
        </div>`)
    }    
    oldChild.parentNode.replaceChild(valuteList, oldChild);
}

function loadActualRates() {
    let oldChild = document.getElementById("items")
        xhr.open('GET', requestUrl);
        xhr.send();
        xhr.responseType = 'json'
        loader.classList.add('loader_active');
        xhr.onload = () => {
            loader.classList.remove('loader_active');
        
            let loadedDataObj = xhr.response.response.Valute;
            let toCash = [];
            for(item in loadedDataObj){  
                toCash.push({Charcode: loadedDataObj[item]['CharCode'], Value: loadedDataObj[item]['Value']})    
                valuteList.insertAdjacentHTML('beforeEnd', 
                `<div style="display: flex">
                    <div class="item__code">
                         ${loadedDataObj[item]['CharCode']}
                    </div>
                    <div class="item__value">
                        ${loadedDataObj[item]['Value']}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
                </div>`)
            }
            
        arrayLocalStorage = [];    
        oldChild.parentNode.replaceChild(valuteList, oldChild);    
        let rates = JSON.stringify(toCash);
        localStorage.setItem("exchange_rates", rates)
        }    
}

document.getElementById('refresh').addEventListener('click', (event) => {    
    document.getElementById('items').innerHTML = "";    
    localStorage.clear()
    loadActualRates()
    
})