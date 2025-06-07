import React, {useState, useRef} from 'react'
import Box from './Box'
import './Featured.css'

function Featured() {
  
  const scrollRef = useRef(null)
  const[isDragging, setIsDragging] = useState(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const handleMouseDown = (e) =>{
    if(!scrollRef.current) return;
    setIsDragging(true);
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft
  }

  const handleMouseLeave = () =>{
    setIsDragging(false)
  }

  const handleMouseUp = () =>{
    setIsDragging(false)
  }

  const handleMouseMove = (e) =>{
    if(!isDragging || !scrollLeft.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk
  }
  
  return (
    <div className='featured-engagements'>
        <div className='featured-heading'>FEATURED <br /> ENGAGEMENTS</div>
        <div 
        className={`featured-items-flex ${isDragging ? `active` : ``}`}
        ref = {scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        >
            <Box 
            title = "Google"
            head = "GOOGLE"
            para = "Our embedded partnership with Google is as deep as it gets. We're the lead creative agency for Google Store and provide strategy, design, and prototyping to other divisions."
            />

            <Box 
            title = 'Wilson'
            head = 'WILSON'
            para = 'A reimagining of Wilsons brand visual identity, and brand campaign to support a new product drop and the launch of the first brick and mortar retail location in the brands 108-year history'
            />

            <Box 
            title = 'KFC'
            head = 'KFC'
            para = 'An award-winning global, digital tranformation engagement spanning eCommerce =, mobile app, and new drive thru experience. Bringing KFC brand story to life while making it easier for customers to buy chicken'
            />

            <Box 
            title = 'KFC'
            head = 'KFC'
            para = 'An award-winning global, digital tranformation engagement spanning eCommerce =, mobile app, and new drive thru experience. Bringing KFC brand story to life while making it easier for customers to buy chicken'
            />

            <Box 
            title = 'KFC'
            head = 'KFC'
            para = 'An award-winning global, digital tranformation engagement spanning eCommerce =, mobile app, and new drive thru experience. Bringing KFC brand story to life while making it easier for customers to buy chicken'
            />
        </div>
    </div>
  )
}

export default Featured