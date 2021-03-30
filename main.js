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
while(loading)
{
  var waiting = false;
  for(var k = 0; k < 4; k++)
  {
    if(!waiting)
    {
      loadingText.innerHTML = "Loading" += ".".repeat(k);
      setTimeout(() => { waiting = true }, 2000);
    } else
    {
      k--;
    }
  }
}
