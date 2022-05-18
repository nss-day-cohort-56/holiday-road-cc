import { getState } from "./dataAccess.js"

export const ItineraryPreview = () => {
    let state = getState()
    let park = state.parkName

    let html = `<h1>Itinerary Preview</h1>`

    if(typeof state.parkName !== 'undefined') {
    html += `<section class="chosenPark">
        ${park}
    </section>`
    }

    return html
}