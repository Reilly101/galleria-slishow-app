import React from 'react'
import './App.css'



export default function Card({ image, click }) {
  return (
  <div className='rectangle' style={{ width: '310px', height: 'auto' }} onClick= {click} >
      <img src={image['images']['thumbnail']} />
      <div className='info'>
        <div className='title'>{image.name}</div>
        <div className='artist'>{image.artist.name}</div>
      </div>
    </div>
  )
}