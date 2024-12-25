import React from 'react'
import "../App.css"


const Student = () => {
  return (
    <>
      <div className='bg-card'>
      <div className='container p-4'>
        <div className='row'>
            <div className='col-sm-12 col-md-3 stud-card' data-aos="flip-up" data-aos-duration="800">
              <h1 className='stu-h1'>1000+</h1>
              <p className='stu-p'>STUDENTS</p>
            </div>
            <div className='col-sm-12 col-md-3 stud-card' data-aos="flip-up" data-aos-duration="800">
              <h1 className='stu-h1'>50+</h1>
              <p className='stu-p'>TEACHERS</p>
            </div>
            <div className='col-sm-12 col-md-3 stud-card' data-aos="flip-up" data-aos-duration="800">
              <h1 className='stu-h1'>500+</h1>
              <p className='stu-p'>AWARDS</p>
            </div>
            <div className='col-sm-12 col-md-3 stud-card' data-aos="flip-up"data-aos-duration="800">
              <h1 className='stu-h1'>100%</h1>
              <p className='stu-p'>RESULT</p>
            </div>
            </div>          
        </div>
    </div>
    </>
  )
}

export default Student