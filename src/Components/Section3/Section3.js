import React from 'react'
import './Section3.css'

function Section3() {
  return (
    <div className='section3'>
        <hr />
        <div className='section3-items'>
            <div className='section3-1'>
                <div className='section3-para'>
                    BASIC/DEPT is a global branding and digital design agency building products, services and eCommerce experiences that turn cultural values into company value
                </div>

                <div className='section3-btn'>SEE THE WORK</div>
            </div>

            <div className='section3-2'>
                B/D
                <div className='R'>
                    R
                </div>
            </div>
        </div>

        <div className='section3-3'>
            <div className='section3-3-items'>
                <div className='section3-3-1'>
                    <img src="/img2.jpg" className='section3-3-1-img' alt="" />
                </div>
                <div className='section3-3-1-text'>PATAGONIA</div>
                <div className='section3-3-1-para'>AN ECOMMERCE EXPERIENCE DRIVEN BY PATAGONIA'S BRAND MISSION</div>
            </div>

            <div className='section3-3-items'>
                <div className='section3-3-1'>
                    <video
                    src={`/tech2.mp4`}
                    autoPlay
                    muted
                    loop
                    className='section3-3-1-video'
                    ></video>
                </div>
                <div className='section3-3-1-text'>WILSON</div>
                <div className='section3-3-1-para'>A CENTURY OLD SPORTS BRNAD FINDING ITS PLACE IN CULTURE</div>
            </div>
            
            <div className='section3-3-items'>
                <div className='section3-3-1'>
                    <img src="/img5.jpg" className='section3-3-1-img' alt="" />
                </div>
                <div className='section3-3-1-text'>GOOGLE STORE</div>
                <div className='section3-3-1-para'>AN ECOMMERCE EXPERIENCE HELPING GOOGLE BRING ITS HARDWARE TO PEOPLE ACROSS THE GLOBE</div>
            </div>
        </div>

        <hr />

    </div>
  )
}

export default Section3