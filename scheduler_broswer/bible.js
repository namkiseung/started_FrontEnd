const bible_data = document.querySelector(".js-bible");
function init(){
    fetch("http://ibibles.net/quote.php?kor-mat/2:11-2:12")
    .then(function(){
        Response.json();
        console.log(Response.json);
        bible_data.innerText=`${Response.json}`;
    })
    .then(function(json){
       console.log(json); 
    });
}
init();