import { parkDropdown } from "./parks/ParkProvider.js"

export const HolidayRoad = () => {
    let html = `<h1 class="header">HolidayRoad</h1>
                ${parkDropdown()}`

    return html

}