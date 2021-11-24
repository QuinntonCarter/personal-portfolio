import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/appContext.js';

export default function ResultComp(props){
    const { name, songId, albumImg, artist, title, musicKey, bpm, timeSig } = props;
    const { getDetails } = useContext(AppContext);

    useEffect(() => {
        getDetails(songId)
    }, [])

    return(
        <div className='result'>
            <div style={{fontSize: '60%'}} className='resultsInfo'> 
                <h1> {name||artist} {title ? `- ${title}`: ''} </h1>
                <h1> Key: {musicKey} </h1>
                <h1> BPM: {bpm} </h1>
                <h3> {timeSig} </h3>
            </div>
            <Link to='/resultDetails'>
                {albumImg  ? 
                <div style={{width: '150%', marginLeft: '-50px'}} className='resultsImg'>
                    <img className='img' src={albumImg} alt='artist'/> 
                </div>
                    : 
                    <> 
                        <i style={{fontSize: '950%', color: 'rgb(201, 200, 200)'}} className="fas fa-eye-slash"/> 
                        <p className='errorMsg' style={{fontStyle: 'italic'}}> image not found </p> 
                    </>
                    }
            </Link>
        </div>
    )
}