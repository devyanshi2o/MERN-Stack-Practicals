function sendMessage() {
  let input = document.getElementById("message");
  let message = input.value.trim().toLowerCase();

  if (message === "") return;

  addMessage(message, "sent");
  input.value = "";

  setTimeout(() => {
    let reply = getBotReply(message);
    addMessage(reply, "received");
  }, 1000);
}

function getBotReply(msg) {
  if (msg.includes("hello")) return "Hi there! 👋";
  if (msg.includes("how are you")) return "I'm fine! 😊";
  if (msg.includes("name")) return "I am your chatbot 🤖";
  if (msg.includes("bye")) return "Goodbye! 👋";

  return "Sorry, I don't understand 😅";
}

function addMessage(text, type) {
  let chatBox = document.getElementById("chat-box");

  let msgDiv = document.createElement("div");
  msgDiv.classList.add("message", type);

  msgDiv.innerText = text;

  chatBox.appendChild(msgDiv);

  chatBox.scrollTop = chatBox.scrollHeight;
}
document.getElementById("message").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
