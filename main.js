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

var frm = document.getElementById("send-form");

function sendData()
{
  frm.submit();
  frm.childNodes[0].value = "";
}

setInterval(function() {grabMessages();}, 1000);

document.getElementById("send-form").action = databaseUrl;
