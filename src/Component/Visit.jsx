import React from 'react'
import '../App.css'
import vimg from '../assets/images/visit.jpeg'
import bus from '../assets/images/bus.jpg'
import game from '../assets/images/game.jpg'

const Visit = () => {
  return (
    <>
    <div className='container my-6 '>
        <div className='row'>
            <div className='col-sm-12 col-md-6 d-flex flex-row justify-content-center ' data-aos="fade-up"
     data-aos-duration="800">
              <img src={vimg} alt='image' className='about-image1'/>
            </div>
            <div className='col-sm-12 col-md-6 m-auto ' data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="800">
              <div className='stud-card'>  
              <h1 className='abot-h1'>Measi matriculation school</h1>
              <h2 className='abot-h2'>Our Vision And Mision</h2>
              </div>
              <div className='container'>
              <div className='row'>
                <div className='col-6 stud-card1'>
                  <img src={bus} alt='image'/>
                  </div>
                
               <div className='col-6'>
                <h1 className='abot-h2'>Vision</h1>
                <p className='abot-p'>To be a leading institution that nurtures confident, knowledgeable, and responsible citizens who contribute positively to society through education rooted in values and global competencies.</p>
               </div>
               </div>
               <div className='row'>
                <div className='col-6 stud-card1'><img src={game} alt='image'/></div>
                
               <div className='col-6'>
                <h1 className='abot-h2'>Mission</h1>
                <p className='abot-p'>To empower students with comprehensive education that blends academic excellence, moral integrity, and cultural values, fostering holistic development to prepare them for a successful and meaningful life.</p>
               </div>
               </div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Visit