import { motion, animate } from 'framer';

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('pt-BR', options).format(now);

    document.getElementById('weekday').textContent = `${formattedDate}`;
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

async function getWeather() {
    const location = 'SãoLuís,MA,Brasil';
    const date1 = '2025-01-15';
    const date2 = '2025-01-16';
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
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
        const previousDay = data.days[0];
        const currentDay = data.days[1];
        return [previousDay, currentDay];
    } catch(error) {
        console.error(error);
        return [];
    }
}

// getWeather();
setInterval(updateClock, 1000);
updateClock()