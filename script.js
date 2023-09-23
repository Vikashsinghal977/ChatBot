const chatInput=document.querySelector(".chat-input textarea");
const sendChatBtn=document.querySelector(".chat-input span");
const chatbox=document.querySelector(".chatbox");


let userMessage;

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const generateResponse = () => {
    const API_URL = "";
    
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return;
    //append
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    setTimeout(() => {
        chatbox.appendChild(createChatLi("Thinking...", "incoming"));
    }, 600);
}


sendChatBtn.addEventListener("click", handleChat);
