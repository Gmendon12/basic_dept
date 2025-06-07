import React from 'react'
import './Section2.css'

function Section2() {
  return (
    <div className='section2'>
        <div className='section2-items'>
            <div className='ad-age'>AdAge</div>
            <div className='section2-para'>DESIGN AND BRANDING AGENCY OF THE YEAR</div>
        </div>

        <div className='section2-items'>
            <div className='section2-2'>
                <div className='L'>L</div>
                <div className='section2-2-2'>
                    <span style={{fontSize:'1.4rem', fontWeight:'200', padding:'0', margin:'0'}}>THE</span>
                    <span style={{fontSize:'1.4rem', fontWeight:'700'}}>WEBBY</span>
                    <span style={{fontSize:'1.4rem', fontWeight:'200'}}>AWARDS</span>
                </div>
            </div>
            <div className='section2-para'>AGENCY OF THE YEAR</div>
        </div>

        <div className='section2-items'>
            <div className='section2-3'>
                <span className='us'>US</span> <br />
                <span className='campaign'>Campaign</span>
            </div>
            <div className='section2-para'>DIGITAL INNOVATION AGENCY OF THE YEAR FINALIST</div>
        </div>
    </div>
  )
}

export default Section2