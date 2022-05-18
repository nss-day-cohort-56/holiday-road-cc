import { BizarresDropdown } from "./attractions/AttractionProvider.js"
import { ParksDropdown } from "./parks/ParkProvider.js"

export const HolidayRoad = () => {
    return `<h1 class="header">Holiday Road</h1>
                <section class="parkList">
                    <h3>Parks</h3>
                    ${ParksDropdown()}
                </section>
                <section class="bizarreList">
                    <h3>Bizarres</h3>
                    ${BizarresDropdown()}
                </section>`
}