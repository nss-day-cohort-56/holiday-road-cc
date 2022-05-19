import { getParks, setParkLatitude, setParkLongitude, setParkName } from "../dataAccess.js"


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

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "parks") {
            let parks = getParks()

            const [,parkId] = event.target.value.split("--")
                const foundPark = parks.find(park => {
                return park.id === parkId
            })
                setParkName(foundPark.fullName)
                setParkLatitude(parseInt(foundPark.latitude))
                setParkLongitude(parseInt(foundPark.longitude))
        }
    }
)
