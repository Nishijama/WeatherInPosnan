
let weatherData = {
    temperature: undefined,
    weather: undefined,
    icon: undefined,
    sunrise: undefined,
    sunset: undefined,
    windSpeed: undefined,
}


window.addEventListener('load', async () => {
    await getData()
    const image =  getIcon(weatherData.icon);
    displayData(image)
    drawImage()
})



async function getData () {
    const api_key = 'cbf79b77dbb6f692180fd6e8e6c7b0b6'
    let city = "Poznan"
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    const res = await fetch(endpoint);
    const data = await res.json();
    
    weatherData.temperature = data.main.temp;
    weatherData.weather = data.weather[0].main;
    weatherData.icon = data.weather[0].icon;
    weatherData.sunrise = data.sys.sunrise;
    weatherData.sunset = data.sys.sunset;
    weatherData.windSpeed = data.wind.speed;
}
function getIcon(icon) {
    let image = "https://openweathermap.org/img/wn/" + icon +'@2x.png';
    return image;
}


function displayData(image) {
    const date = document.querySelector('#date')
    const time = document.querySelector('#time')
    const h1 = document.querySelector('#temp')
    const h2 = document.querySelector('#weather')
    const img = document.querySelector('#weather-img')
    
    const today = new Date();
    
    const dateNow = (today.getMonth()+1)+'-'+today.getDate();
    const timeNow = today.getHours() + ":" + today.getMinutes();
    
    date.innerText = dateNow;
    time.innerText = timeNow;
    h1.innerText = Math.floor(weatherData.temperature) + "°C"
    h2.innerText = weatherData.weather;
    img.setAttribute('src', image)

}

// canvas setup
function drawImage(){
    const canvas = document.getElementById('canvas1')
    ctx = canvas.getContext('2d')
}
