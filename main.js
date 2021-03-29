var databaseUrl = "https://35f67429c67b.ngrok.io";

var usernameInput = document.getElementById("username-input");
var ipInput = document.getElementById("ip-input");

var usernameEntries = [];

function addUsernameEntry()
{
  usernameEntries.push([usernameInput.value, ipInput.value]);
}

var messages = document.getElementById("message-text");

function grabMessages()
{
  (async () => {
    const response = await fetch(databaseUrl + "/messages.txt", {mode: "cors"});
    const text = await response.text();
    
    messages.innerHTML = text;
  })();
}

grabMessages();

document.getElementById("send-form").action = "databaseUrl";
