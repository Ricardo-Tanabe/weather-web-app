require('dotenv').config();
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

async function getWeather() {
    const location = 'São Luís';
    const date1 = '2025-01-15';
    const date2 = '2025-01-14';
    try {
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${date1}/${date2}?key=${apiKey}`;
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error ('Sem resposta');
        }
        const data = await response.json();
        if(!data) {
            throw new Error('Invalid data format');
        }
        console.log(data);
    } catch(error) {
        console.error(error);
    }
}

getWeather();