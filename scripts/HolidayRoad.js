import { ParksDropdown } from "./parks/ParkProvider.js"
import { EateryDropdown } from "./eateries/EateryProvider.js"

export const HolidayRoad = () => {
    return `<h1 class="header">Holiday Road</h1>
                <section class="parkList">
                ${ParksDropdown()}
                </section>
                <section class="eateryList">
                ${EateryDropdown()}
                </section>
                `
}