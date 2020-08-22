var user_bot = [

{
	user : "hello",
	bot : "hey"
},

{
	user : "how are you",
	bot : "I'm fine, and you?"
},

{
	user : "fuck you",
	bot : "Oh! you're rude, FUCK YOU!"
},

{
	user : "lee",
	bot : "South Foke!"
}


];

var chat_text = document.getElementsByClassName("chat_text")[0];
var textbox = document.getElementsByClassName("textbox")[0];

const send_click = () =>{
	var usertextdiv = document.createElement("div");
	usertextdiv.setAttribute("class","usertextdiv");
	var usertext = document.createElement("div");
	usertext.setAttribute("class","usertext");
	usertextdiv.appendChild(usertext);
	usertext.textContent = textbox.value;
	chat_text.appendChild(usertextdiv);
	textbox.value= "";

	var bottextdiv = document.createElement("div");
	bottextdiv.setAttribute("class","bottextdiv");
	var bottext = document.createElement("div");
	bottext.setAttribute("class","bottext");
	bottextdiv.appendChild(bottext);
	bottext.innerHTML = "<div class='dot3'><div class='fdot'>.</div><div class='sdot'>.</div><div class='tdot'>.</div></div>";
	chat_text.appendChild(bottextdiv);
}









