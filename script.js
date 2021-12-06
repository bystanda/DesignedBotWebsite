function openWin() {
  var myWindow = window.open("", "", "width=400, height=200");
  myWindow.opener.document.getElementById("demo").innerHTML = 
  "A new window has been opened.";
}