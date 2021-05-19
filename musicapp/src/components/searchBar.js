import React, { useState, useContext } from 'react';

import { AppContext } from '../appContext'

export default function Search(){
    const [inputs, setInputs] = useState({params: '', query: ''})
    const { search } = useContext(AppContext)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        search(inputs)
        setInputs({params:'', query: ''})
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' name='query' value={inputs.query} onChange={handleChange} placeholder='enter song or artist here'/>
            <select name='params' value={inputs.params} onChange={handleChange}>
                <option value=''> - search by song or artist - </option>
                <option value='song'> song </option>
                <option value='artist'> artist </option>
            </select>
            <button className='searchBtn'> search </button>
        </form>
    )
}

