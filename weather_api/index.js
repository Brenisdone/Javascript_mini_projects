const weatherForm = document.querySelector('.weatherForm');
const card = document.querySelector('.card');
const cityInput = document.querySelector('.cityInput');
const apikey = '648bd9c46327739b0917c492a0afbc4c';

weatherForm.addEventListener("submit",async event => {
    event.preventDefault();
    
    const city = cityInput.value;

    if(city){
        try{
            const data= await getWeatherData(city);
            console.log(data);
            displayWeatherInfo(data);
        }
        catch(error){
            console.log(error);
            displayError(error);
        }
    }
    else{
        displayError("Please Enter a City.");
    }
});

async function getWeatherData(city){
    apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    response = await fetch(apiurl);
    if(!response.ok){
        throw new Error("Couldn't fetch weather data");
    }
    return await response.json();
}

function displayWeatherInfo(data){
    const {name: city,
        main: {temp,humidity},
        weather: [{description, id}]} = data;
    card.textContent = "";
    card.style.display = 'flex';

    const cityDisplay= document.createElement('h1');
    const tempDisplay=document.createElement('p');
    const humidityDisplay= document.createElement('p');
    const descDisplay=document.createElement('p');
    const weatherEmoji=document.createElement('p');

    cityDisplay.textContent=city;
    tempDisplay.textContent=`${(temp-273.15).toFixed(1)}°C`;
    humidityDisplay.textContent=`Humidity: ${humidity}%`;
    descDisplay.textContent=description;
    weatherEmoji.textContent=getWeatherEmoji(id);
    
    cityDisplay.classList.add('cityDisplay');
    tempDisplay.classList.add('tempDisplay');
    humidityDisplay.classList.add('humidityDisplay');
    descDisplay.classList.add('descDisplay');
    weatherEmoji.classList.add('weatherEmoji');

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherid){
    switch(true){
        case(weatherid >=200 && weatherid<300):
            return '⛈️';
        case(weatherid >300 && weatherid<400):
            return '🌦️';
        case(weatherid >500 && weatherid<600):
            return '🌧️';
        case(weatherid >600 && weatherid<700):
            return '❄️';
        case(weatherid >700 && weatherid<800):
            return '🌫️';
        case(weatherid === 800):
            return '☀️';
        case(weatherid >=801 && weatherid<810):
            return '☁️';
        default:
            return '❔';
    }
}

function displayError(msg){
    const errorDisplay = document.createElement('p');
    errorDisplay.textContent = msg;
    errorDisplay.classList.add('errorDisplay');
    card.textContent='';
    card.style.display='flex';
    card.appendChild(errorDisplay);
}