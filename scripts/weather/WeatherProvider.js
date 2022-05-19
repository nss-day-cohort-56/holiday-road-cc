import { getWeather } from "../dataAccess.js"



export const WeatherDisplay = () => {
    let weather = getWeather()
    let html = ''
    weather.map(weather => {
        html += `${weather.description} <img src="http://openweathermap.org/img/wn/${weather.icon}@2x.png">`
    })
    return html
}