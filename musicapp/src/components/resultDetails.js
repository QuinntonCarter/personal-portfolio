import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../appContext.js';


export default function ResultDetails(){
    let history = useHistory()
    const { songDetails, searchQuery } = useContext(AppContext);

    return(
        <>
        <div className='resultDetails'>
            <img style={{ maxWidth: '60%'}} src={songDetails.song.artist.img} alt='artist'/>
            <h1> {songDetails.song.artist.name} </h1>
            </div>
            <h3> from: {songDetails.song.artist.from ? songDetails.song.artist.from : 'not listed'} </h3>
            { songDetails.song.artist.genres ? 
                    <p> {songDetails.song.artist.genres.map(genre => 
                        <> {`/ ${genre}`} </>
                        )} 
                    </p>
                    : 
                    <>
                    </>
                }
                <i className="fas fa-fast-backward" onClick={() => history.goBack()}/>
        </>
    )
}