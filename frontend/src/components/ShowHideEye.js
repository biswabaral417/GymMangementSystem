import React, { useState } from 'react'
import eyeSlash from './images/eye-slash-fill.svg'
import eyefill from './images/eye-fill.svg'
import './showHideEye.css'


export default function ShowHideEye({ inp,inp2 }) {
    const [image, setImage] = useState(eyeSlash)
    return (
        <button id='ShowHideEyebtn' type='button' onClick={() => setImage(prev => {
            if (prev === eyeSlash) {
                inp.current.type='text'
                if(inp2) inp2.current.type='text'
                return eyefill
            }else{
                if(inp2) inp2.current.type='password'
                inp.current.type='password'
                 return eyeSlash
                };
            })}>
    <img src={image} alt="" />
        </button >
    )
}
