import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Section2 from '../Section2/Section2'
import Section3 from '../Section3/Section3'
import Featured from '../Featured/Featured'

function Main() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Section2/>
        <Section3/>
        <Featured/>
    </div>
  )
}

export default Main