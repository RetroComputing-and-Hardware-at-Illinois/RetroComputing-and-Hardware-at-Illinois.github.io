function showWindow(windowname){
    document.getElementById(windowname).style.display="block";
    document.getElementById("bottomapp").style.display="block";
}

function closeWindow(windowname){
    document.getElementById(windowname).style.display="none";
    document.getElementById("bottomapp").style.display="none";
}

function enlargeWindow(contentname){
    //document.getElementById(contentname).style.width="100vw";
    //document.getElementById(contentname).style.height="100vh";
}

function minimizeWindow(contentname){
    document.getElementById(contentname).style.display="none";
    document.getElementById("bottomapp").style.display="block";
}

function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});
  const formattedString = dateString;
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 100);