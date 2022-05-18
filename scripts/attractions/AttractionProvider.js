import { getBizarres } from "../dataAccess.js";

export const BizarresDropdown = () => {
    let bizarres = getBizarres()
     let html = `<select name="bizarres">
    <option value="0">Choose one...</option>`
    
    let bizarreList = bizarres.map(bizarre => {

        html += `<option value="id--${bizarre.id}">${bizarre.name}</option>`
        
    })
    html += bizarreList.join('')
    html += `</select><br>`
    return html
}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "bizarres") {
            const [, teamId] = event.target.value.split("--")
            setSelectedBizarre(event.target.value)
            render()

        }
    }
)