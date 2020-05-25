let widgetButton = document.getElementsByClassName("chat-widget").item(0);
const messages = document.querySelector( '.chat-widget__messages' )

function getAnswer() {
    const answers = [
        'Аллё, добрый день!',        
        '1', "2", "3"        
    ],
      index = Math.floor(Math.random() * answers.length);
    return answers[index];
  }

widgetButton.addEventListener("click", () => {
    widgetButton.classList.add("chat-widget_active");
})
document.addEventListener('keypress', (event) => {
    let inputText = document.getElementById("chat-widget__input").value
    if(event.key === "Enter" && inputText !== ""){        
        let currentTime = new Date();
        currentTime = `${currentTime.getHours()}:${currentTime.getMinutes()}`
        
        document.getElementById("chat-widget__input").value = "";
        messages.innerHTML += `
                            <div class="message message_client">
                                <div class="message__time">${currentTime}</div>
                                <div class="message__text">
                                    ${inputText}
                                </div>
                            </div>
                            `;
        setTimeout(() => {
            let currentTime = new Date();
            currentTime = `${currentTime.getHours()}:${currentTime.getMinutes()}`
            messages.innerHTML += `
                                <div class="message">
                                    <div class="message__time">${currentTime}</div>
                                    <div class="message__text">
                                        ${getAnswer()} 
                                    </div>
                                </div>
                                `;  
                            }, 2000)                                                 
    } 
  
})