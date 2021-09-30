import  React, { useState, useEffect } from 'react';

// image conversion packages
import braillefy from 'img2braille-web';
const ImageToAsciiArt = require('image-to-ascii-art');

export const ConversionContext = React.createContext();


export default function ConversionProvider(props){
    const [ inputImg, setInputImg ] = useState()
    const [ view, setView ] = useState(true)



    // accepts parameters of image string and configurations sent from inputs
    // returns image converted with said configs
    function toAscii(imageString, configs){
        const imgToAsciiArt = new ImageToAsciiArt({ config: configs })
        setInputImg(imgToAsciiArt.convert(imageString))
    }

    // accepts parameters of image string and configurations sent from inputs
    // returns image converted with said configs
    function toBraille(imageString, width, configs){
        const toBraille = braillefy(imageString, width, { configs })
        setInputImg(toBraille)
    }

    return(
        <ConversionContext.Provider
        value={{
            view,
            setView,
            toAscii,
            toBraille,
            inputImg,
            setInputImg
            // setAsciiConfig,
            // setBrailleConfig
        }}>
            {props.children}
        </ConversionContext.Provider>
    )
}