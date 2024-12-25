import React from 'react'
import '../App.css'
import build from '../assets/images/build2.jpeg'

const About = () => {
  return (
    <>
    <div className='container my-6 '>
        <div className='row'>
            <div className='col-sm-12 col-md-6 d-flex flex-row justify-content-center' data-aos="fade-right" data-aos-duration="1000">
              <img src={build} alt='image' className='about-image'/>
            </div>
            <div className='col-sm-12 col-md-6 m-auto' data-aos="fade-left" data-aos-duration="1000">
              <h1 className='abot-h1'>Measi matriculation school</h1>
              <h2 className='abot-h2'>about us</h2>
              <p className='abot-p'>Measi Matriculation Higher Secondary School, established on *1st July 1985, began with a humble strength of **35 children* in classes L.K.G. to Std. V. Through dedication and perseverance, the school has grown exponentially, now educating nearly *1,500 students. In **1987, the institution attained the prestigious status of a Matriculation school, followed by Higher Secondary recognition in **1988*, under the guidance of the Managing Committee.
Our school emphasizes holistic education by blending academic excellence with moral and cultural values. Students are trained under the Samacheer syllabus from *Std. I to IX, preparing them for the **10th Board Examination* and the *Higher Secondary Examination* under the Directorate of Government Examinations, Tamil Nadu. The *medium of instruction is English*, with options to learn Tamil, Hindi, Urdu, and Arabic.</p>
              <button type="button" class="btn btn-warning">Read about</button>
            </div>
        </div>
    </div>
  
    </>
  )
}

export default About