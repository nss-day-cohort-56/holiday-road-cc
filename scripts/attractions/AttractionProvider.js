import { getBizarres, setBizarreId, setSelectedBizarre } from "../dataAccess.js";

export const BizarresDropdown = () => {
    let bizarres = getBizarres()
     let html = `<select name="bizarres">
    <option value="0">Choose one...</option>`
    
    let bizarreList = bizarres.map(bizarre => {
        if(bizarre.state !== "AK" && bizarre.state !== "HI") {
        html += `<option value="id--${bizarre.id}">${bizarre.name}</option>`
        }  
    })
    html += bizarreList.join('')
    html += `</select><br>`
    return html
}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "bizarres") {
            let bizarres = getBizarres()
            const [, bizarreId] = event.target.value.split("--")
            const foundBizarre = bizarres.find(bizarre => {
                return bizarre.id === parseInt(bizarreId)
            })
            setSelectedBizarre(foundBizarre.name)
            setBizarreId(parseInt(bizarreId))
        }
    }
)