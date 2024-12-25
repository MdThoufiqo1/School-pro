import React from 'react'
import Slider from './Slider'
import About from './About'
import Visit from './Visit'
import Student from './Student'
import Activie from './Activie'


function Home() {
  return (
    <div>
      <Slider/>
      <About/>
      <Student/>
      <Visit/>
      <Activie/>
    </div>
  )
}

export default Home
