const body = document.querySelector("body");
const IMG_NUMBER = 5;
function handleImgLoad(){

}
function paintImage(imgNumber){
    const image = new Image();
    image.src = `./images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
    image.addEventListener("loadend", handleImgLoad);
}
function genRandom(){
    number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}
function init(){
    const randomNumber = genRandom(); 
    paintImage(randomNumber)
}
init();