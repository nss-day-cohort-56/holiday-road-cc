import { getParks } from "../dataAccess.js"

export const parkDropdown = () => {
    let parks = getParks()
    let html = `<select name="team">
    <option value="0">Choose a park...</option>`
    
    let parkList = parks.map(park => {
                    html += `<option value="id--${park.id}">${park.fullName}</option>`
    })
    html += parkList.join('')
    html += `</select><br>`
    return html
}