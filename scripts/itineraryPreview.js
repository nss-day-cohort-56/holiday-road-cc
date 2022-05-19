import { getState, getWeather } from "./dataAccess.js"

export const ItineraryPreview = () => {
    let state = getState()
    let weather = getWeather()
    let html = `<h1>Itinerary Preview</h1>`
    
    if(typeof state.parkName !== 'undefined') {
        html += `<section class="chosenPark">
        ${state.parkName}
        <div class="forecast">
        5 Day Forecast:
        </div>`
        weather.map(weather => {
            if(weather.dt_txt.includes("12:00:00")){
            html += `${weather.main.temp} ${capitalizeFirstLetter(weather.weather[0].description)}<br>`
            }
        })
        html += `</section>`
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