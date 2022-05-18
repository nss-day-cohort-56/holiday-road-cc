import {keys} from "./Settings.js"
const mainContainer = document.querySelector(".container")

let applicationState = {
    weather: [],
    parks: [],
    map: [],
    bizarres: [],
    eateries: []
}


export const fetchWeather = () => {
    let API = `http://api.openweathermap.org/data/2.5/forecast?id=${keys.weatherKey}`

    return fetch(`${API}/weather`) //default method is GET = i want data, give it to me please, give all of the requests
        .then(response => response.json()) //returns array of objects in this scenario
        .then(
            (weather) => { //array of objects is the argument here
                // Store the external state in application state
                applicationState.weather = weather //put in transient state
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


export const fetchBizarres = () => {
    let API = `http://holidayroad.nss.team/bizarreries`

    return fetch(`${API}`) //default method is GET = i want data, give it to me please, give all of the requests
        .then(response => response.json()) //returns array of objects in this scenario
        .then(
            (bizarres) => { //array of objects is the argument here
                // Store the external state in application state
                applicationState.bizarres = bizarres //put in transient state
            }
        )
}

export const fetchEateries = () => {
    let API = `http://holidayroad.nss.team/eateries`

    return fetch(`${API}`) //default method is GET = i want data, give it to me please, give all of the requests
        .then(response => response.json()) //returns array of objects in this scenario
        .then(
            (eatery) => { //array of objects is the argument here
                // Store the external state in application state
                applicationState.eateries = eatery //put in transient state
            }
        )
}



