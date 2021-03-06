import { fetchBizarres, fetchEateries, fetchGeocoding, fetchItineraries, fetchParks, fetchRouting, fetchWeather, getState } from "./dataAccess.js"
import { HolidayRoad } from "./HolidayRoad.js"

const mainContainer = document.querySelector(".container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)



export const render = () => {
    let state = getState()
    fetchParks()
        .then(() => fetchBizarres())
        .then(() => fetchEateries())
        .then(() => fetchItineraries())
        .then(() => {
            mainContainer.innerHTML = HolidayRoad()
        }
        )

    if (typeof state.parkLatitude !== "undefined" && typeof state.parkLongitude !== "undefined") {
        fetchWeather()
            .then(() => {
                mainContainer.innerHTML = HolidayRoad()
            }
            )
    }

    if (state.saveButton === true) {
        fetchGeocoding()
            .then(() => fetchRouting())
            .then(() => {
                mainContainer.innerHTML = HolidayRoad()

            })

    }
}

render()