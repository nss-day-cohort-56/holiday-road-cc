import { getParks, setParkName } from "../dataAccess.js"


export const ParksDropdown = () => {
    let parks = getParks()
     let html = `<select name="parks">
    <option value="0">Choose a Park</option>`
    
    let parkList = parks.map(park => {

        html += `<option value="id--${park.fullName}">${park.fullName}</option>`
        
    })
    html += parkList.join('')
    html += `</select><br>`
    return html
}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "parks") {
            const [,parkName] = event.target.value.split("--")
                setParkName(parkName)
        }
    }
)
