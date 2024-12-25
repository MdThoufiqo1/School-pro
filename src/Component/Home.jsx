import React from 'react'
import Slider from './Slider'
import About from './About'
import Visit from './Visit'
import Student from './Student'
import Activies from './activies'


function Home() {
  return (
    <div>
      <Slider/>
      <About/>
      <Student/>
      <Visit/>
      <Activies/>
    </div>
  )
}

export default Home
