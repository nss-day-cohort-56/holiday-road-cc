import { getItineraries } from "./dataAccess.js"


export const savedItineraries = () => {
    let itineraries = getItineraries()
    console.log(itineraries)
    let html = '<h3>Saved Itineraries</h3>'
    let number = 1
    itineraries.map(itinerary => {
        html += `<section class="savedItineraries">
        Itinerary #${number}: <br>
        Park: ${itinerary.park} <br>
        Bizarre: ${itinerary.bizarre} <br>
        Eatery: ${itinerary.eatery} <br><br>
        </section>`
        number++
    })

    return html
}