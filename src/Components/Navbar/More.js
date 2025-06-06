import React from 'react'
import './Navbar.css'

function More({number,img,title,year,main,para,link}) {
  return (
    <div className='more' > 
        <div className='more-items-line'>
            <span className='line'></span>
            <span>{number}</span>
        </div>
            <div className='more-items-box-item'>
                <div className='more-items-img-div'>
                <img src={img} className='more-items-img' />
                </div>
            
            <div className='more-items-box-2'>
                <div className='more-items-title-content'>
                    <div className='more-items-title-items'>
                        <div className='more-items-title'>{title}</div>
                        <div className='more-items-main'>{main}</div>
                    </div>
                    <div className='more-items-year'>{`@ ${year}`}</div>
                </div>
                <div className='more-items-para'>{para}</div>
                <div className='more-items-link'>{link}</div>
            </div>
         </div>
    </div>
  )
}

export default More