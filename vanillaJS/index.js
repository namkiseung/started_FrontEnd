const title = document.querySelector("#title"), CLICKED_CLASS = "clicked";

function handleClick(){
	const currentClass = title.className;
	if(currentClass !== CLICKED_CLASS){
		title.classList.add(CLICKED_CLASS);
	}else{
		title.classList.remove(CLICKED_CLASS);
	}
	console.log(currentClass);
}

function init(){
	title.addEventListener("click", handleClick);
}
init();
