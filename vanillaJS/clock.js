const clockContainer = document.querySelector(".js-clock");
const clockTitle = document.querySelector("h1");
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerHTML = `${hours}:${minutes}:${seconds < 10 ? `0${seconds}`: `${seconds}`}`;
}
function init() {
    setInterval(getTime, 1000);
    
}
init()