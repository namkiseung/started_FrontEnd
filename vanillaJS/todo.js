const toDoForm = document.querySelector(".js-toDoForm"),
toDoInput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos=[];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function paintToDo(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const newId = toDos.length + 1
    const delBtn = document.createElement("button");
    delBtn.addEventListener("click", deleteToDo);
    delBtn.value="X";
    span.innerText = text;
    li.id = newId;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){ //어레이를 하나로만듬
        return toDo.id !== parseInt(li.id);
    }); //이 필터는 forEach에서 function을 실행하는 것 처럼 각 item과 같이 실행됨.
    toDos = cleanToDos
    saveToDos();
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value='';
}
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(baba){
            console.log(baba)
            
            paintToDo(baba.text);
        }) //각각 한번씩 실행해줌(어레이리스트)
    }
}
function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();