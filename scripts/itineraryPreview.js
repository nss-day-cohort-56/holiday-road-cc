import { getBizarres, getState, getWeather } from "./dataAccess.js"

export const ItineraryPreview = () => {
    let state = getState()
    let weather = getWeather()
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
                html += `<div class="displayweather">${parseInt(weather.main.temp)} Degrees
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
        ${state.selectedBizarre} <button class="collapsible" id="bizarredetails">Details</button>
        <div class="content"><p>${foundBizarre.name}<br>Location: ${foundBizarre.city}, ${foundBizarre.state}<br>Description: ${foundBizarre.description}</p></div>
        </section>`


    }

    if (typeof state.selectedEatery !== 'undefined') {
        html += `<section class="chosenEatery">
        ${state.selectedEatery}
        </section>`
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
        if (itemClicked.id === "bizarredetails") {
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