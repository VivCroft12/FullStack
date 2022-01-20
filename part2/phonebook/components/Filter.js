import React, {useState} from 'react';
import Display from './Display';
const Filter = ({persons}) => {
    console.log(persons)
    const [newFilter, setFilter] = useState('')
    const [filteredNames, setFilteredNames] = useState([])
    const handleFilter = (event) => {
        setFilter(event.target.value)
    }

    const addFilter = (event) => {
        event.preventDefault();
        setFilteredNames(persons.filter((person) =>  person.name.toUpperCase().includes(newFilter.toUpperCase())))
        setFilter('')
    }
    const handleClick = () => {
        console.log("handleClick",filteredNames)
    }
    return (
        <>
            <form onSubmit = {addFilter} >
                <div >
                    filter shown with <input onChange = {handleFilter} value = {newFilter} />
                </div>
            </form>
            {filteredNames.map(person =>   <Display key = {person.name} content = {person.name} number = {person.number} />)  }
        </>
    )
}

export default Filter;
