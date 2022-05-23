import { getState } from "../dataAccess.js"


export const Directions = () => {
    let state = getState()
    let route = state.route
    let html = ``
    if (typeof route !== "undefined") {
        html += `${route}`
        console.log(route)
    }
    return html
}