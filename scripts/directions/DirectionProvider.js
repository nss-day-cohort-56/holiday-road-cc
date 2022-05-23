import { getRoute, getState } from "../dataAccess.js"


export const Directions = () => {
    let state = getState()
    let routes = getRoute()
    let html = ``
    if (typeof routes !== "undefined") {
        console.log(routes)
        routes.map(route => {
            route.instructions.map(instruction => {    
                html += `${instruction.text} for ${Math.round(((instruction.distance) * 0.000621371) * 10) / 10} miles. <br>`
            })
        })
    }
    return html
}