import { getBizarres, setSelectedBizarre } from "../dataAccess.js";

export const BizarresDropdown = () => {
    let bizarres = getBizarres()
     let html = `<select name="bizarres">
    <option value="0">Choose one...</option>`
    
    let bizarreList = bizarres.map(bizarre => {

        html += `<option value="id--${bizarre.name}">${bizarre.name}</option>`
        
    })
    html += bizarreList.join('')
    html += `</select><br>`
    return html
}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "bizarres") {
            const [, bizarreName] = event.target.value.split("--")
            setSelectedBizarre(bizarreName)
        }
    }
)