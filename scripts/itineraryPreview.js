import { getEateries, getState, getWeather, getBizarres, saveItinerary } from "./dataAccess.js"

export const ItineraryPreview = () => {
    let state = getState()
    let weather = getWeather()
    let eateries = getEateries()

    let html = `<h1>Itinerary Preview</h1>`

    if (typeof state.parkName !== 'undefined') {
        html += `<section class="chosenPark">
        ${state.parkName}
        <br><br>
        <div class="weatherbox">
        <div class="forecast">
        5 Day Forecast:
        </div>`
        weather.map(weather => {
            if (weather.dt_txt.includes("12:00:00")) {
                html += `<div class="displayweather">${parseInt(weather.main.temp)}°
            <img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png"></div><br>`
            }
        })
        html += `</div></section>`
    }

    if (typeof state.selectedBizarre !== 'undefined') {
        let bizarres = getBizarres()
        const foundBizarre = bizarres.find((bizarre) => {
            return bizarre.name === state.selectedBizarre
        })
        html += `<section class="chosenBizarre">
        <button class="collapsible" id="bizarredetails">${foundBizarre.name}</button>
        <div class="content"><p>Location: ${foundBizarre.city}, ${foundBizarre.state}<br>Description: ${foundBizarre.description}</p></div>
        </section>`


    }

    if (typeof state.selectedEatery !== 'undefined') {
        let eateries = getEateries()
        const foundEatery = eateries.find((eatery) => {
            return eatery.businessName === state.selectedEatery
        })
        html += `<section class="chosenEatery">
        <button class="collapsible" id="eateryDetails">${state.selectedEatery}</button>
        <div class="content"><p>
        Location: ${foundEatery.city}, ${foundEatery.state}<br>
        Description: ${foundEatery.description}
        </p></div></section>`
    }

    if (typeof state.parkName !== 'undefined' && typeof state.selectedBizarre !== 'undefined' && typeof state.selectedEatery !== 'undefined') {
        html += `<button class="button" id="saveItinerary">Save Itinerary</button>`
    }
    return html
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


document.addEventListener( //have to put listener on the DOM!!
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id === "bizarredetails" || itemClicked.id === "eateryDetails") {
            itemClicked.classList.toggle("active");
            var content = itemClicked.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        }
    }
)


export const eateryDetailsHtml = () => {
    let html = ""
    let state = getState()
    let eateries = getEateries()

    if (state.eateryButton === true) {
        const foundEatery = eateries.find(eatery => {
            return eatery.id === state.eateryId
        })
        html += `<div class="content"><p>
        ${foundEatery.city}, ${foundEatery.state}<br>
        ${foundEatery.description}
        </p></div>`
    }

    return html
}

const mainContainer = document.querySelector(".container")

mainContainer.addEventListener("click", clickEvent => {
    let state = getState()
    let selectedBizarre = state.selectedBizarre
    let selectedEatery = state.selectedEatery
    let selectedPark = state.parkName
    if (clickEvent.target.id === "saveItinerary") {

        const dataToSendToAPI = {
            park: selectedPark,
            bizarre: selectedBizarre,
            eatery: selectedEatery
        }

        saveItinerary(dataToSendToAPI)
    }
})
