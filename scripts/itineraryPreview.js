import { getState } from "./dataAccess.js"

export const ItineraryPreview = () => {
    let state = getState()

    let html = `<h1>Itinerary Preview</h1>`

    if(typeof state.parkName !== 'undefined') {
    html += `<section class="chosenPark">
        ${state.parkName}
    </section>`
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