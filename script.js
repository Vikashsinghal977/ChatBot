const chatInput=document.querySelector(".chat-input textarea"); 
const sendChatBtn=document.querySelector(".chat-input span");
const chatbox=document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");

let userMessage;
const API_KEY = "";

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const generateResponse = () => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const requestOptions = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`

        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {
                  role: "system",
                  content: userMessage
                }]
        })
    }
    
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return;
    //append
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    setTimeout(() => {
        chatbox.appendChild(createChatLi("Thinking...", "incoming"));
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse();
    }, 600);
    chatInput.value="";
}

const show = () => {
    var bute = document.getElementsByClassName("show-chatbot");
    console.log(9);
    bute.classList.toggle("show-chatbot");
}

sendChatBtn.addEventListener("click", handleChat);
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

