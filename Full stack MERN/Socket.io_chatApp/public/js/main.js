 const chatForm = document.getElementById("chat-form")
 const chatMessages = document.querySelector(".chat-messages")


 const {username, room} = Qs.parse(location.search, {
     ignoreQueryPrefix: true
 })
 const socket = io();

 //msg from server
 socket.on("message", message => {
     outputMessage(message)

     //scroll down
     chatMessages.scrollTop = chatMessages.scrollHeight;
 })

 //msg submit
 chatForm.addEventListener("submit", e => {
     e.preventDefault()

     //get msg text
     const msg = e.target.elements.msg.value

     //emit msg to server
     socket.emit("chatMessage", msg)

     //clear inp
     e.target.elements.msg.value = ''
     e.target.elements.msg.focus();
 })

 function outputMessage(msg) {
     const div = document.createElement("div")
     div.classList.add("message")
     div.innerHTML = `
     <p class="meta">${msg.username}<span>${msg.time}</span></p>
						<p class="text">
							${msg.text}
						</p>
     `;
     document.querySelector(".chat-messages").appendChild(div);
 }