import { BizarresDropdown } from "./attractions/AttractionProvider.js"
import { ParksDropdown } from "./parks/ParkProvider.js"
import { EateryDropdown } from "./eateries/EateryProvider.js"
import { ItineraryPreview } from "./itineraryPreview.js"
import { WeatherDisplay } from "./weather/WeatherProvider.js"

export const HolidayRoad = () => {
    return `<h1 class="header">Holiday Road</h1>
                <div class="sidebyside">
                <div class="leftside">
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
                </div>
                <div class="rightside">
                <section class="itinerary">
                ${ItineraryPreview()}
                </section>
                <section class="weather">
                ${WeatherDisplay()}
                </section>
                </div>
                </div>`
}