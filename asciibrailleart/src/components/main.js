import { useContext, useState } from 'react';
import axios from 'axios';

import { ConversionContext } from './context/ConversionProvider.js';

// import {ImageToAsciiArt} from 'image-to-ascii-art';
// const imageToAscii = require("image-to-ascii");


export default function Main(){
    const {
        inputImg,
        setInputImg,
        view,
        setView,
        toAscii,
        toBraille,
        setAsciiConfig,
        setBrailleConfig
    } = useContext(ConversionContext)


    function handleChange(e){
        const { name, value } = e.target
        setInputImg(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
// test
    const [ display, setDisplay ] = useState('')

    const [ initBrailleConfigs, setInitBrailleConfigs ] = useState({
        dither: false, invert: false 
    })

    const [ initAsciiConfigs, setInitAsciiConfigs ] = useState({
        drawWidth: 1,
        drawHeight: 1,
        pickDensityHorizontal: 1,
        pickDensityVertical: 1,
        // mess with this once functions disp ascii img
        greyRangeChar: [
        { from: 0, to: 30, char: '#' },
        { from: 31, to: 60, char: '&' },
        { from: 61, to: 120, char: '$' },
        { from: 121, to: 150, char: '*' },
        { from: 151, to: 180, char: 'o' },
        { from: 181, to: 210, char: '!' },
        { from: 211, to: 240, char: ';' },
        ],
        defaultGreyChar: '*',
    })

    function viewChange(view){
        setView({view: view})
    }

    // finish
    function subAsciiConfig(){
        setAsciiConfig()
        toAscii()
    }

    // finish
    function subBrailleConfig(){
        setBrailleConfig()
        toBraille()
    }

    function canvasVal(value){
        console.log(value)
    }


    return(
        <div id="interCont">
            <div class="viewInputs">
                <span>
                    {/* fix this button */}
                    <input defaultChecked type='radio' name='view' onChange={() => setView(prevState => !prevState)}/> ascii
                    <input type='radio' name='view' onChange={() => setView(prevState => !prevState)}/> braille 
                    <input type='file' alt='converted image' />
                </span>

            </div>
            <div class="inputs">
                { view === true ?
                    <form onSubmit={subAsciiConfig} class='editAsciiInputs'>
                        <span style={{padding:"20px"}}
                            title="The number of pixels drawn, the higher the number the more detailed the resulting image">
                                Draw density: <br/>
                                {/* how to assign values to and get them to handlechange */}
                                Less detailed
                                <input name='density' type='radio'/>
                                More detailed
                                <input name='density'  type='radio'/>
                                Very detailed
                                <input name='density'  type='radio'/>
                        </span>
                        {/* possibly add greychange option here */}
                        <button style={{padding: 'none'}}> Generate w/ ASCII </button>
                    </form>
                    :
                    <form onSubmit={subBrailleConfig} style={{padding:"30px"}} class='editBrailleInputs'>
                        <span
                            title="">
                            Dither
                            <input type='checkbox'/>
                        </span>
                        <span
                            title="Invert dark and light colors">
                            Invert 
                            <input type='checkbox'/>
                        </span>
                        <span title="Select color of result, default: b&w">
                            Result Color
                            <input type='color'/>
                        </span>
                        <button style={{padding: 'none'}}> Generate w/ unicode braille</button>
                    </form>
                }
            </div>
            <div class='imgInputDisp'>
                <pre 
                // onChange={handleChange} name='display' value={display}
                >
                    {display || ''}
                </pre>
            </div>
        </div>
    )
}