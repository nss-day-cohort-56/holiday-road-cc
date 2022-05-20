import { getEateries, setEateryId, setSelectedEatery } from "../dataAccess.js"

const mainContainer = document.querySelector(".container")

export const EateryDropdown = () => {
    let eateries = getEateries()
    let html = `<select name="eateries">
    <option value="0">Choose an Eatery</option>`

    let eateryList = eateries.map(eatery => {

        html += `<option value="id--${eatery.id}">${eatery.businessName}</option>`

    })
    html += eateryList.join('')
    html += `</select><br>`
    return html
}


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "eateries") {
            let eateries = getEateries()
            const [, eateryId] = event.target.value.split("--")
            const foundEatery = eateries.find(eatery => {
                return eatery.id === parseInt(eateryId)
            })
            setSelectedEatery(foundEatery.businessName)
            setEateryId(parseInt(eateryId))

            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)