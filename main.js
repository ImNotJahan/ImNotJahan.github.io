var databaseUrl = "https://35f67429c67b.ngrok.io";

var usernameInput = document.getElementById("username-input");
var ipInput = document.getElementById("ip-input");

var usernameEntries = [];

function addUsernameEntry()
{
  usernameEntries.push([usernameInput.value, ipInput.value]);
}

var messages = document.getElementById("message-text");
var loading = true;

function grabMessages()
{
  (async () => {
    var date = new Date();
    const response = await fetch(databaseUrl + "/messages.txt?v" + date.getTime(), {mode: "cors"});
    const text = await response.text();
    
    messages.innerHTML = text;
    loading = false;
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

var loadingText = document.getElementById("loading-text");

var k = 0;
(function waitLoop() {
  setTimeout(function() {
    loadingText.innerHTML = "Loading" + ".".repeat(k % 4);
    k++;
    
    if(loading)
    {
      waitLoop()
    };
  }, 500)
});
