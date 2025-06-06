import React from 'react'
import Box from './Box'
import './Featured.css'

function Featured() {
  return (
    <div className='featured-engagements'>
        <div className='featured-heading'>FEATURED <br /> ENGAGEMENTS</div>
        <div className='featured-items-flex'>
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
        </div>
    </div>
  )
}

export default Featured