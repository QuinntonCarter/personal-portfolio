import React, { useState, useContext } from 'react';

import { AppContext } from '../context/appContext.js';

export default function Search(){
    const [inputs, setInputs] = useState({artist: '', song: ''})
    const { search } = useContext(AppContext)



    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        search(inputs)
        setInputs({artist: '', song: ''})
    }

    return(
        <div className='searchBarWrapper'>
            <form onSubmit={handleSubmit}>
                <input type='text' name='artist' value={inputs.artist} onChange={handleChange} placeholder='artist name' required/>
                <input type='text' name='song' value={inputs.song} onChange={handleChange} placeholder='track name' required/>
                
                <button style={{cursor: 'pointer'}} className='searchBtn'> search </button>
            </form>
        </div>
    )
}

