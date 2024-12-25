import React from 'react'
import '../App.css'
import logo from '../assets/images/nav.jpg'
import { FaFacebook,FaWhatsappSquare,FaInstagramSquare,FaTwitter,FaHome,FaPhoneAlt,  } from "react-icons/fa";



const Footer = () => {
  return (
    <>
    <div className='bg-primary'>
      <div className='container p-4 '>
        <div className='row '>
            <div className='col-sm-12 col-md-4 stud-card mb-2 p-2'data-aos="fade-up"
     data-aos-anchor-placement="top-center" data-aos-duration="1000">
             <img src={logo} alt=""  className='foot-image'/> 
              <h1 className='stu-h2'>Measi matriculation school</h1>
              <div className='d-flex flex-row m-1 '>
                <div className='m-2  p-2'><FaFacebook /></div>
                <div className='m-2 p-2'><FaWhatsappSquare  /></div>
                <div className='m-2 p-2'><FaInstagramSquare  /></div>
                <div className='m-2 p-2'><FaTwitter /></div>
              </div>
              
            </div>
            <div className='col-sm-12 col-md-4 stud-card mb-2 p-2' data-aos="fade-up"
     data-aos-anchor-placement="top-center" data-aos-duration="1000">
              <h1 className='stu-h2'>Quick Links</h1>
              <p className='stu-h3'>About</p>
              <p className='stu-h3'>Academic</p>
              <p className='stu-h3'>Facilities</p>
              <p className='stu-h3'>Curriculum</p>
            </div>
            <div className='col-sm-12 col-md-4 stud-card mb-2 p-2' data-aos="fade-up"
     data-aos-anchor-placement="top-center" data-aos-duration="1000">
              <h1 className='stu-h2'>Get in Touch</h1>
              <div className='d-flex flex-row m-2 '>
              <div className=' p-2'><FaHome /></div>
              <p className='stu-h4'>MEASI MATRICULATION HIGHER SECONDARY,53, Angappa Naicken St ,Seethakadi Nagar ,George Town, Chennai 600001</p>
              </div>
              <div className='d-flex flex-row  '>
              <div className=' p-2'><FaPhoneAlt /></div>
              <p className='stu-h4'>8056265792</p>
              </div>
              <div className='d-flex flex-row  '>
              <p className='stu-h4'>principal@measischool.edu.in,<hr/>admissions@measischool.edu.in</p>
              </div>
            </div>
            </div>          
        </div>
    </div>
    </>
  )
}

export default Footer