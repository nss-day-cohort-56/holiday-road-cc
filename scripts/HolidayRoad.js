import { BizarresDropdown } from "./attractions/AttractionProvider.js"
import { ParksDropdown } from "./parks/ParkProvider.js"
import { EateryDropdown } from "./eateries/EateryProvider.js"
import { ItineraryPreview } from "./itineraryPreview.js"

export const HolidayRoad = () => {
    return `<h1 class="header">Holiday Road</h1>
                <section class="parkList">
                <h3>Parks</h3>
                ${ParksDropdown()}
                </section>
                <section class="bizarreList">
                    <h3>Bizarres</h3>
                    ${BizarresDropdown()}
                </section>
                <section class="eateryList">
                <h3>Eateries</h3>
                ${EateryDropdown()}
                </section>
                
                <section class="itinerary">
                ${ItineraryPreview()}
                </section>`
}