import React from 'react'
import build from '../assets/images/build.jpeg'
import build2 from '../assets/images/build2.jpeg'
import build3 from '../assets/images/build3.jpeg'
import '../App.css'

const Slider = () => {
  return (
    <>
<div id="carouselExampleControls" class="carousel slide full-width" style={{maxHeight:"650px",overflow:"hidden"}} data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={build} class="d-block w-100" style={{height:"550px",objectFit:"cover"}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={build2} class="d-block w-100" style={{height:"550px",objectFit:"cover"}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={build3} class="d-block w-100" style={{height:"550px",objectFit:"cover"}} alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Slider
