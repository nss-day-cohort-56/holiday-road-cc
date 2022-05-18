import { fetchParks } from "./dataAccess.js"
import { Itineraries } from "./Itinerary.js"

const mainContainer = document.querySelector(".container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)



export const render = () => {
    fetchParks().then(() => {
                mainContainer.innerHTML = Itineraries()
            }
    )
}

render()