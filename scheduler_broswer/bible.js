let url = "https://bible-api.com/romans+12:1-2";
let content={"reference":"John 3:16","verses":[{"book_id":"JHN","book_name":"John","chapter":3,"verse":16,"text":"\nFor God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life.\n\n"}],"text":"\nFor God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life.\n\n","translation_id":"web","translation_name":"World English Bible","translation_note":"Public Domain"}

const bible_data = document.querySelector(".js-bible");
bible_data.innerText=content.text;        
function init(){
    fetch(url)//http://ibibles.net/quote.php?kor-mat/2:11-2:12
    .then(response => {
        if (response.status == 200){ //200응답
            return response;
        }else if(response.status == 401){ //401응답
            alert("failed request api");
            return response;
        }else{
            alert(`Error ${response}`); //비즈니스 로직 처리 중 발생 에러
        }
    })
    .then(response => response.json())
    .then(json => {
       const str_data = json.string();
       //bible_data.innerText=`${str_data.text}`; 
       
       console.log(123123);
    })
    .catch(error => {
        alert("API Call Error"+error); //네트워크 등 에러 처리
    });
}
init();

