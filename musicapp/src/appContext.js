import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppContext = React.createContext();

// data.search => is an array of results
function AppContextProvider(props){
    const [searchQuery, setSearchQuery] = useState([])

    function search(query){
        var querySplit = query.query.split(' ').join('+');
        axios.get(`https://api.getsongbpm.com/search/?api_key=795e99c7f546d0fddb1de2514ddcbeab&type=${query.params}&lookup=${querySplit}`)
        .then(res => setSearchQuery(res.data.search))
        .catch(err => console.log(err))
    }


    return(
        <AppContext.Provider
        value={{
            search,
            searchQuery,
            setSearchQuery
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContextProvider, AppContext}