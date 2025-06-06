import React, { useEffect, useState, useRef } from 'react'
import './Header.css'


function Header() {

  return (
    <div id='header'>
        <video 
        src={`/tech-video.mp4`}
        autoPlay
        muted
        className='header-video'
        loop
        />
    </div>
  )
}

export default Header