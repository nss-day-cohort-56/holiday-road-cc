import { getEateries, setSelectedEatery } from "../dataAccess.js"

export const EateryDropdown = () => {
    let eateries = getEateries()
    let html = `<select name="eateries">
    <option value="0">Choose an Eatery</option>`

    let eateryList = eateries.map(eatery => {

        html += `<option value="id--${eatery.businessName}">${eatery.businessName}</option>`

    })
    html += eateryList.join('')
    html += `</select><br>`
    return html
}


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "eateries") {
            const [, eateryName] = event.target.value.split("--")
            setSelectedEatery(eateryName)
            console.log(eateryName)
        }
    }
)