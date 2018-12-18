const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
SHOWING_CN = "showing";

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `반갑습니다. ${text}님`;
}
function saveName(text){
    localStorage.setItem(USER_LS, text)
}
function handleSubmit(event){
    event.preventDefault(); //기본 이벤트 막음
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue)
}

function askForName(){  //현재유저가 not일때
    form.classList.add(SHOWING_CN); //classname추가
    form.addEventListener("submit", handleSubmit); //제출이벤트 발생하면?
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
        //she is not
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();