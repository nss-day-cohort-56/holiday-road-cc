import { keys } from "./Settings.js"
const mainContainer = document.querySelector(".container")

let applicationState = {
    weather: [],
    parks: [],
    map: [],
    bizarres: [],
    eateries: [],
    state: {}
}

export const fetchWeather = () => {
    let state = getState()

    let API = `https://api.openweathermap.org/data/2.5/forecast?lat=${state.parkLatitude}&lon=${state.parkLongitude}&appid=${keys.weatherKey}&units=imperial`

    return fetch(`${API}`) //default method is GET = i want data, give it to me please, give all of the requests
        .then(response => response.json()) //returns array of objects in this scenario
        .then(
            (weather) => { //array of objects is the argument here
                // Store the external state in application state
                applicationState.weather = weather.list //put in transient state
            }
        )
}


export const fetchParks = () => {
    let API = `https://developer.nps.gov/api/v1/parks?api_key=${keys.npsKey}`

    return fetch(`${API}`) //default method is GET = i want data, give it to me please, give all of the requests
        .then(response => response.json()) //returns array of objects in this scenario
        .then(
            (parks) => { //array of objects is the argument here
                // Store the external state in application state
                applicationState.parks = parks.data //put in transient state
            }
        )
}


export const fetchMap = () => {
    let API = `https://graphhopper.com/api/1/route?point=51.131,12.414&point=48.224,3.867&profile=car&locale=de&calc_points=false&key=${keys.graphhopperKey}`

    return fetch(`${API}/map`) //default method is GET = i want data, give it to me please, give all of the requests
        .then(response => response.json()) //returns array of objects in this scenario
        .then(
            (map) => { //array of objects is the argument here
                // Store the external state in application state
                applicationState.map = map //put in transient state
            }
        )
}

export const getParks = () => {
    return applicationState.parks.map(park => ({ ...park }))
}

export const getBizarres = () => {
    return applicationState.bizarres.map(bizarre => ({ ...bizarre }))
}

export const getState = () => {
    return { ...applicationState.state }
}

export const getWeather = () => {
    return applicationState.weather.map(weather => ({ ...weather }))
}

export const setParkName = (name) => {
    applicationState.state.parkName = name
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setParkLatitude = (number) => {
    applicationState.state.parkLatitude = number
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setParkLongitude = (number) => {
    applicationState.state.parkLongitude = number
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
}

export const fetchBizarres = () => {
    let API = `http://holidayroad.nss.team/bizarreries`

    return fetch(`${API}`) //default method is GET = i want data, give it to me please, give all of the requests
        .then(response => response.json()) //returns array of objects in this scenario
        .then(
            (bizarres) => { //array of objects is the argument here
                // Store the external state in application state
                applicationState.bizarres = bizarres
            }
        )
}

export const setSelectedBizarre = (name) => {
    applicationState.state.selectedBizarre = name
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
}


export const fetchEateries = () => {
    let API = `http://holidayroad.nss.team/eateries`

    return fetch(`${API}`) //default method is GET = i want data, give it to me please, give all of the requests
        .then(response => response.json()) //returns array of objects in this scenario
        .then(
            (eatery) => { //array of objects is the argument here
                // Store the external state in application state
                applicationState.eateries = eatery //put in transient state
            })
}

export const getEateries = () => {
    return applicationState.eateries.map(eatery => ({ ...eatery }))
}

export const setSelectedEatery = (name) => {
    applicationState.state.selectedEatery = name
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setEateryId = (id) => {
    applicationState.state.eateryId = id
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setEateryButton = (boolean) => {
    applicationState.state.eateryButton = boolean
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
}
