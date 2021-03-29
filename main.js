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
    const response = await fetch("imnotjahan.github.io");
    const text = await response.text();
    
    messages.innerHTML = text;
  })();
}

grabMessages();
