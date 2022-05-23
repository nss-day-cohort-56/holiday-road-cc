import { keys } from "./Settings.js"
const mainContainer = document.querySelector(".container")

let applicationState = {
    weather: [],
    parks: [],
    latAndLong: [],
    routes: [],
    bizarres: [],
    eateries: [],
    itineraries: [],
    state: {}
}

const API = "http://localhost:8088"

export const fetchRouting = () => {
    console.log(applicationState.latAndLong)
    let latandlong = getLatAndLong()
    let API = `https://graphhopper.com/api/1/route?point=${latandlong[0].lat},${latandlong[0].lng}&point=${latandlong[1].lat},${latandlong[1].lng}&point=${latandlong[2].lat},${latandlong[2].lng}&point=${latandlong[3].lat},${latandlong[3].lng}&profile=car&locale=en&instructions=true&key=${keys.graphhopperKey}`
    console.log(API)
    return fetch(`${API}`) //default method is GET = i want data, give it to me please, give all of the requests
        .then(response => response.json()) //returns array of objects in this scenario
        .then(
            (route) => { //array of objects is the argument here
                // Store the external state in application state
                applicationState.routes = route.paths //put in transient state
            }
        )
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

export const fetchGeocoding = () => {
    let state = getState()
    let bizarres = getBizarres()
    let parks = getParks()
    let eateries = getEateries()

    const foundBizarre = bizarres.find(bizarre => {
        return bizarre.id === state.bizarreId
    })
    const foundEatery = eateries.find(eatery => {
        return eatery.id === state.eateryId
    })
    const foundPark = parks.find(park => {
        return park.id === state.parkId
    })

    console.log(foundBizarre.city)
    console.log(foundEatery.city)
    console.log(foundPark.addresses[0].city)

    let geoCities = ["Nashville", foundBizarre.city, foundEatery.city, foundPark.addresses[0].city]
    let geoStates = ["TN", foundBizarre.state, foundEatery.state, foundPark.addresses[0].stateCode]
    let allLatLongFetches = []

    for (let i = 0; i < geoCities.length; i++) {

        let API = `https://graphhopper.com/api/1/geocode?q=${geoCities[i]},${geoStates[i]}&limit=1&debug=true&key=${keys.graphhopperKey}`

        allLatLongFetches.push(fetch(`${API}`) //default method is GET = i want data, give it to me please, give all of the requests
            .then(response => response.json()) //returns array of objects in this scenario
            // .then(
            //     (latAndLong) => { //array of objects is the argument here
            //         // Store the external state in application state
            //         applicationState.latAndLong.push(latAndLong.hits[0].point)//put in transient state

            //     }
            // )
            )
    }
    return Promise.all(allLatLongFetches).then((responses) => {
        responses.map(response => {
            applicationState.latAndLong.push(response.hits[0].point)
        })
        
    })
}

// export const fetchMap = () => {
//     console.log(applicationState.latAndLong)
//     let API = `https://graphhopper.com/api/1/route?point=51.131,12.414&point=48.224,3.867&profile=car&locale=de&calc_points=false&key=${keys.graphhopperKey}`

//     return fetch(`${API}/map`) //default method is GET = i want data, give it to me please, give all of the requests
//         .then(response => response.json()) //returns array of objects in this scenario
//         .then(
//             (map) => { //array of objects is the argument here
//                 // Store the external state in application state
//                 applicationState.map = map //put in transient state
//             }
//         )
// }

export const getParks = () => {
    return applicationState.parks.map(park => ({ ...park }))
}

export const getBizarres = () => {
    return applicationState.bizarres.map(bizarre => ({ ...bizarre }))
}

export const getRoute = () => {
    return applicationState.routes.map(route => ({ ...route }))
}

export const getState = () => {
    return { ...applicationState.state }
}

export const getWeather = () => {
    return applicationState.weather.map(weather => ({ ...weather }))
}

export const getItineraries = () => {
    return applicationState.itineraries.map(itinerary => ({ ...itinerary }))
}

export const getLatAndLong = () => {
    return applicationState.latAndLong.map(latAndLong => ({ ...latAndLong }))
}

export const setParkName = (name) => {
    applicationState.state.parkName = name

}

export const setParkId = (id) => {
    applicationState.state.parkId = id

}

export const setParkLatitude = (number) => {
    applicationState.state.parkLatitude = number

}

export const setParkLongitude = (number) => {
    applicationState.state.parkLongitude = number

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

export const setBizarreId = (id) => {
    applicationState.state.bizarreId = id
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
    const mainContainer = document.querySelector(".container")
}

export const setEateryId = (id) => {
    applicationState.state.eateryId = id
    const mainContainer = document.querySelector(".container")
}

export const setSaveButton = (boolean) => {
    applicationState.state.saveButton = boolean
    const mainContainer = document.querySelector(".container")
}

export const saveItinerary = (itinerary) => {
    const fetchOptions = {
        method: "POST", //creation request, "please create"
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itinerary)
    }
    return fetch(`${API}/itineraries`, fetchOptions) //here's the url i wanna send a request to
        .then(response => response.json()) //when response happens, returns string of json data, string => data structure(response.json)
        .then(() => { //then, do this (alert! things have changed)
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            applicationState = {
                weather: [],
                parks: [],
                latAndLong: [],
                routes: [],
                bizarres: [],
                eateries: [],
                state: {}
            }
        })
}

export const fetchItineraries = () => {
    return fetch(`${API}/itineraries`) //default method is GET = i want data, give it to me please, give all of the requests
        .then(response => response.json()) //returns array of objects in this scenario
        .then(
            (itineraries) => { //array of objects is the argument here
                // Store the external state in application state
                applicationState.itineraries = itineraries //put in transient state
            }
        )
}
