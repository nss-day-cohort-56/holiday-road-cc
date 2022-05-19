import { getItineraries } from "./dataAccess.js"


export const savedItineraries = () => {
    let itineraries = getItineraries()
    console.log(itineraries)
    let html = '<h3>Saved Itineraries</h3>'
    let number = 1
    itineraries.map(itinerary => {
        html += `<section class="savedItineraries">
        Itinerary #${number}:
        Park: ${itinerary.park}
        Bizarre: ${itinerary.bizarre}
        Eatery: ${itinerary.eatery}
        </section>`
        number++
    })

    return html
}