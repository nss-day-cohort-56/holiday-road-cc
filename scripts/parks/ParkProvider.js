import { getParks } from "../dataAccess.js"


export const ParksDropdown = () => {
    let parks = getParks()
     let html = `<select name="parks">
    <option value="0">Choose a Park</option>`
    
    let parkList = parks.map(park => {

        html += `<option value="id--${park.id}">${park.fullName}</option>`
        
    })
    html += parkList.join('')
    html += `</select><br>`
    return html
}