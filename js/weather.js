const API_KEY = "a575c1fff79fed218182f994ea4c9d36"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url).then((response)=>response.json())
    .then((data)=>{
        const city = document.querySelector("#weather span:first-child")
        const weather = document.querySelector("#weather span:last-child")
        weather.innerText = `Weather : ${data.weather[0].main} / Temperature : ${data.main.temp}°C`;
        city.innerText = `City : ${data.name}`;
    })
}

function onGeoError(){
    alert("Can't find you. No weatehr for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);