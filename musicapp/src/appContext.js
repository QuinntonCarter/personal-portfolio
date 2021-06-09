import React, { useState } from 'react';
import axios from 'axios';

const AppContext = React.createContext();

// data.search => is an array of results
function AppContextProvider(props){
    const [searchQuery, setSearchQuery] = useState([])
    const [songDetails, setSongDetails] = useState([])

    function search(query){
        var songSplit = query.song.split(' ').join('+');
        var artistSplit = query.artist.split(' ').join('+');
        // change to both and change search params for song and artist
        axios.get(`https://api.getsongbpm.com/search/?api_key=60dd5bfb3bb61b0fe3704c9e709a897e&type=both&lookup=lookup=song:${songSplit}artist:${artistSplit}`)
        .then(res => {
            setSearchQuery(res.data.search)
        })
        .catch(err => console.log(err))
    }

    // ?? send whole uri here
    function getDetails(id){
        axios.get(`https://api.getsongbpm.com/song/?api_key=60dd5bfb3bb61b0fe3704c9e709a897e&id=${id}`)
        .then(res => setSongDetails(res.data))
        .catch(err => console.log(err))
    }

    return(
        <AppContext.Provider
        value={{
            search,
            searchQuery,
            setSearchQuery,
            getDetails,
            songDetails
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContextProvider, AppContext}