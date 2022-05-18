import { fetchBizarres, fetchEateries, fetchParks } from "./dataAccess.js"
import { HolidayRoad } from "./HolidayRoad.js"

const mainContainer = document.querySelector(".container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)



export const render = () => {
    fetchParks()
    .then(() => fetchBizarres())
    .then(() => fetchEateries())
        .then(() => {
                mainContainer.innerHTML = HolidayRoad()
            }
    )
}

render()