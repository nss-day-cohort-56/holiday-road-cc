import { getEateries, getState, getWeather } from "./dataAccess.js"

export const ItineraryPreview = () => {
    let state = getState()
    let weather = getWeather()
    let eateries = getEateries()

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
        <button class="button" id="eateryDetails">Details</button>`
        
        html += `</section>`
    }    
    
    
    return html
}    

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}    

export const eateryDetailsHtml = () => {
    let html = ""
    let state = getState()
    let eateries = getEateries()

    if (state.eateryButton === true) {
    const foundEatery = eateries.find(eatery => {
        return eatery.id === state.eateryId
    })
        html += `<section class="eateryDescription">
        <div class="eateryAddress">${foundEatery.city}, ${foundEatery.state}</div>
        ${foundEatery.description}
        </section>`
}

    return html
}