import React from 'react'
import homeBgImg from '../assets/images/home1.jpg';
import './homebg.css'

export default function HomeBgImg() {
  return (
      <img id='homebg' src={homeBgImg} loading='lazy' alt="Background" className='homeBgImage' />
  )
}
