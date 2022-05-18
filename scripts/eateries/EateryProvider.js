import { getEateries } from "../dataAccess.js"
import { render } from "../main.js"

export const EateryDropdown = () => {
    let eateries = getEateries()
    let html = `<select name="eateries">
    <option value="0">Choose an Eatery</option>`

    let eateryList = eateries.map(eatery => {

        html += `<option id="id--${eatery.id}">${eatery.businessName}</option>`

    })
    html += eateryList.join('')
    html += `</select><br>`
    return html
}


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "eateries") {
            const [, teamId] = event.target.value.split("--")
            setSelectedEatery(event.target.value)
            render()

        }
    }
)