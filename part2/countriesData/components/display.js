import axios from 'axios'
import {useEffect, useState} from 'react'

const DisplayInfo = ({country,shouldShow}) => {
    console.log(country)
    const languages = Object.values(country.languages)
    const flag = country.flags.png
    if(shouldShow === true){
    return(
        <>
            <p>
                Capital {country.capital}
            </p>
            <h2>languages</h2>
            <p>
                
                {languages.map((language, i ) => <li key = {i}>{language}</li>)}
            </p>
            <p>
                <img src = {flag} />
            </p>
        </>
    )
    }
    else {
        return(<></>)
    }
}


const CountryDisplay = ({country}) => {
    const [showResults,setShowResults] = useState(false)
    const handleClicker = () => {
        console.log("HI");
        setShowResults(true)
    }
    return(
        <>
            <h1>{country.name.common}</h1>
            <input type = "button" value = "Show" onClick = {handleClicker} /> 
            <DisplayInfo  country = {country} shouldShow = {showResults} />
        </>
    )
}

const DisplayWeather = ({country}) => {
    const api_key = process.env.REACT_APP_API_KEY
    const languages = Object.values(country.languages)
    const flag = country.flags.svg
    console.log(api_key)
    const [weatherObject, setWeatherObject] = useState([])
    const hook = () => {
        axios
          .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
          .then(response => {
            console.log("promise")
            setWeatherObject(response.data)
          })

      }
    useEffect(hook, [])
    console.log(weatherObject)
    const weatherIcon = weatherObject.current.weather_icons[0]
    return (
        <>
            <p>
                Capital {country.capital}
            </p>
            <h2>languages</h2>
            <p>
                
                {languages.map((language, i ) => <li key = {i}>{language}</li>)}
            </p>
            <p>
                <img src = {flag} />
            </p>
            <h1>Weather in {country.capital}</h1>
            <p>
                <b>Temperature: </b> {weatherObject.current.temperature} celsius
                <br />
                <img src = {weatherIcon} />
                <b>Wind: </b> {weatherObject.current.wind_speed} mph direction {weatherObject.current.wind_dir}
            </p>
        </>
    )
}

const Display = ({filteredNames}) => {
    if(filteredNames.length === 1){
        return (
            <>
                <DisplayWeather country = {filteredNames[0]} />
            </>
        )
    }
    else if(filteredNames.length < 10 ){
    return (
        <div>
        {filteredNames.map((country, i) => <div key = {i}> <CountryDisplay country = {country} /> </div>)}
        </div>
    )
    }   
    else {
        return (
            <>
            <div>
            Too many matches, specify another filter
            </div>
            </>
        )
    }
}
export default Display;
