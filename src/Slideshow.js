import React from 'react'


export default function Slideshow({image, close}) {
    return (
        <div className='slide'>
            <div className='slidebox'>
                <button className='close' onClick={close}>CLOSE</button>
                <div classNmae='gallerypicture'>
                    <img src={image}/>
                </div>
            </div>
        </div>
    )
}