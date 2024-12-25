import React from 'react'
import "../App.css"
import event_data from '../assets/data'




const activies = () => {
  return (
    <>
    <div className='bg-card1 p-3 '>
      <div className='stud-card'>
      <h1 className='act-head'>Co-curricular Activities</h1>
      </div>
    <div className=" card1">
      {event_data.map((e,index)=>(
        <div className="card card-compact bg-base-100 w-96 shadow-xl m-3 bg-warning" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" key={index}>
        <figure>
          <img
            src={e.image}
            alt="Shoes" style={{height:"270px",width:"100%"}} />
        </figure>
        <div className="card-body   m-0">
          <h2 className="card-title">{e.name}</h2>
        </div>
      </div>
      ))}
    </div>
    </div>
    </>
  )
}

export default activies
