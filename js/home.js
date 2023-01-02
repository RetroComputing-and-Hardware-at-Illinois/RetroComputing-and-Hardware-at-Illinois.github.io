function showWindow(windowname){
    document.getElementById(windowname).style.display="block";
    document.getElementById("bottomapp").style.display="block";
    minimized = 0;
}

function closeWindow(windowname){
    document.getElementById(windowname).style.display="none";
    document.getElementById("bottomapp").style.display="none";
    document.getElementById("windowcontent").style.width="60vw";
    document.getElementById("windowcontent").style.height="70vh";
    document.getElementById("draggablewindow").style.top="5vh";
    document.getElementById("draggablewindow").style.left="20vw";
}


let rect = document.getElementById('windowcontent').getBoundingClientRect();
let prevw = rect.width - 8;
let prevh = rect.height - 8;
let prevtop = document.getElementById("draggablewindow").offsetTop;
let prevleft = document.getElementById("draggablewindow").offsetLeft;

function savewh(foo, foo2){
    prevw = rect.width - 8;
    prevh = rect.height - 8;
    prevtop = document.getElementById(foo2).offsetTop;
    prevleft = document.getElementById(foo2).offsetLeft;
    console.log(prevw);
    console.log(prevh);
    console.log(prevtop);
    console.log(prevleft);
}

let maximized = 0;
function enlargeWindow(contentname){
    if(maximized === 0){
        savewh("windowcontent","draggablewindow");
        let outputv = window.innerWidth-40;
        let outputh = window.innerHeight-107;
        document.getElementById("windowcontent").style.width=outputv+"px";
        document.getElementById("windowcontent").style.height=outputh+"px";
        document.getElementById("draggablewindow").style.top="0px";
        document.getElementById("draggablewindow").style.left="0px";
        maximized=1;
    }
    else{
        document.getElementById("windowcontent").style.width=prevw+"px";
        document.getElementById("windowcontent").style.height=prevh+"px";
        document.getElementById("draggablewindow").style.top=prevtop+"px";
        document.getElementById("draggablewindow").style.left=prevleft+"px";
        maximized=0;
    }
}

let minimized = 0;
function minimizeWindow(contentname){
    if (minimized === 0){
        document.getElementById(contentname).style.display="none";
        document.getElementById("bottomapp").style.display="block";
        document.getElementById("bottomapp").style.backgroundImage="linear-gradient(180deg, rgba(96,134,249,1) 4%, rgba(106,144,249,1) 11%, rgba(97,137,250,1) 19%, rgba(100,136,250,1) 91%, rgba(64,92,203,1) 98%)";
        minimized = 1;
    }
    else{
        document.getElementById(contentname).style.display="block";
        document.getElementById("bottomapp").style.display="block";
        document.getElementById("bottomapp").style.backgroundImage="linear-gradient(180deg, rgba(83,115,198,1) 2%, rgba(37,63,147,1) 4%, rgba(55,84,175,1) 9%, rgba(53,82,179,1) 14%, rgba(53,82,179,1) 95%, rgba(61,79,161,1) 97%)";
        minimized = 0;
    }
}

function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});
  const formattedString = dateString;
  timeDisplay.textContent = formattedString;
}
setInterval(refreshTime, 100);

const body = document.querySelector("body");
const MIN_DURATION = 10;

function makeSnowflake() {
    const snowflake = document.createElement("div");
    const delay = Math.random() * 10;
    const initOpacity = Math.random();
    const duration = Math.random() * 20 + MIN_DURATION;

    snowflake.classList.add("snowflake");
    snowflake.style.left = `${Math.random() * window.screen.width}px`;
    snowflake.style.animationDelay = `${delay}s`;
    snowflake.style.opacity = initOpacity;
    snowflake.style.animation = `fall ${duration}s linear`;

    body.appendChild(snowflake);

    setTimeout(() => {
        body.removeChild(snowflake);
        makeSnowflake();
    }, (duration + delay) * 1000);
}

for(let index = 0; index < 50; index++){
    setTimeout(makeSnowflake, 500 * index);
}

document.getElementById("windowcontent").style.resize="both";