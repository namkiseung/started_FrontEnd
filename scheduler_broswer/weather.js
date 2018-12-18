const weather = document.querySelector(".js-weather");
const API_KEY = "f439597fdf3c1f2b556239e196a33024";
const COORDS = 'coords';
function handleGeoError(){ //좌표를 가져오는데 실패처리
    alert("위치 정보를 사용할 수 없습니다.");
}
function getWeather(lat, lng){
    //가져올데이터를 인자로
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric
        `).then(function(response){
            return response.json();
        })
        .then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `위치 : ${place} 온도 : ${temperature}도`;
        });
}
function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}
function handleGeoSucces(position){ //좌표를 가져오는데 성공처리
    // console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj={
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function askForCoords(){ //navigator API사용
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
        
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        //console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}
function renew(){
    window.navigator.geolocation.watchPosition(handleGeoSucces, handleGeoError, handleGeoSucces);
}
function init(){
    weather.addEventListener('click',renew)
    loadCoords();
}
init();