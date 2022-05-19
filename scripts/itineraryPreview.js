import { getState, getWeather } from "./dataAccess.js"

export const ItineraryPreview = () => {
    let state = getState()
    let weather = getWeather()
    let html = `<h1>Itinerary Preview</h1>`
    
    if(typeof state.parkName !== 'undefined') {
        html += `<section class="chosenPark">
        ${state.parkName}
        <br><br>
        <div class="weatherbox">
        <div class="forecast">
        5 Day Forecast:
        </div>`
        weather.map(weather => {
            if(weather.dt_txt.includes("12:00:00")){
            html += `<div class="displayweather">${parseInt(weather.main.temp)} Degrees
            <img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png"></div><br>`
            }
        })
        html += `</div></section>`
    }
    
    if(typeof state.selectedBizarre !== 'undefined') {
        html += `<section class="chosenBizarre">
        ${state.selectedBizarre}
        </section>`
    }
    
    if(typeof state.selectedEatery !== 'undefined') {
        html += `<section class="chosenEatery">
        ${state.selectedEatery}
        </section>`
    }
    

    return html
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }