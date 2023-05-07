const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const e404 = document.querySelector('.not-found');

search.addEventListener('click',()=>{
    const apiKey = '6d0ffc86690060c0ff5d4ac83f99d677';
    const city = document.querySelector('.search-box input').value;
    if(city === '') return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(json => {
        if(json.cod === "404"){
            container.style.height = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            e404.style.display = 'block';
            e404.classList.add('fadeIn');
            return;
        }
        e404.style.display = 'none';
        e404.classList.remove('fadeIn');
        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box temperature');
        const description = document.querySelector('.weather-box description');
        const humidity = document.querySelector('.weather-box humidity');
        const wind = document.querySelector('.weather-box wind');
        
        switch (json.weather[0].main){
            case 'Clear':
                image.src= 'images/clear.png';
                break;
        }
    })
})