import { ParksDropdown } from "./parks/ParkProvider.js"

export const Itineraries = () => {
    return `<h1 class="header">Holiday Road</h1>
                <section class="parkList">
                ${ParksDropdown()}
                </section>`
}