import {apiKeys} from "./Settings.js"

const mainContainer = document.querySelector(".container")

const applicationState = {
    parks: []
}



const npsAPI = `https://developer.nps.gov/api/v1/parks?api_key=${apiKeys.npsKey}`
const graphAPI = ""
const weather = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKeys.weatherKey}`


export const fetchParks = () => {
    return fetch(`${npsAPI}`) //default method is GET = i want data, give it to me please, give all of the requests
        .then(response => response.json()) //returns array of objects in this scenario
        .then(
            (park) => { //array of objects is the argument here
                // Store the external state in application state
                applicationState.parks = park.data //put in transient state
            }
        )
}

export const getParks = () => {
    return applicationState.parks.map(park => ({ ...park }))
}