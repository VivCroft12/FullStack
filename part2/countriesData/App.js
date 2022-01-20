import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Display from './components/display'

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
    const [filteredNames, setFilteredNames] = useState([])
    
  const hook = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log("promise")
        console.log(response.data.names)
        setCountries(response.data)
      })
  }
    
  useEffect(hook, [])
  console.log(countries)
  const handleChange = (event) => {
    setFilter(event.target.value)
  }
    
  const handleSubmit = (event) => {
    event.preventDefault();
    const arr = countries.filter((country) => country.name.common.toUpperCase().includes(filter.toUpperCase()))
    setFilteredNames(arr)
    setFilter('')
    console.log(arr)
  }
    
  return (
    <div className="App">
      <form onSubmit = {handleSubmit}>
        find countries <input onChange = {handleChange} value = {filter} />
        <Display filteredNames = {filteredNames} />
      </form>
    </div>
  );
}

export default App;
