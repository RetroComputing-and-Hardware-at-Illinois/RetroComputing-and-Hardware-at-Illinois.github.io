function showWindow(windowname){
    document.getElementById(windowname).style.display="block";
    document.getElementById("bottomapp").style.display="block";
}

function closeWindow(windowname){
    document.getElementById(windowname).style.display="none";
    document.getElementById("bottomapp").style.display="none";
    document.getElementById("windowcontent").style.width="70vw";
    document.getElementById("windowcontent").style.height="80vh";
    document.getElementById("draggablewindow").style.top="5vh";
    document.getElementById("draggablewindow").style.left="20vw";
}

function enlargeWindow(contentname){
    let outputv = window.innerWidth-40;
    let outputh = window.innerHeight-112;
    document.getElementById("windowcontent").style.width=outputv+"px";
    document.getElementById("windowcontent").style.height=outputh+"px";
    document.getElementById("draggablewindow").style.top="0px";
    document.getElementById("draggablewindow").style.left="0px";


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
