import React from 'react'
import '../App.css'
import logo from '../assets/images/nav.jpg'


const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand  " href="#">
      <img src={logo} alt="" width="50" height="24" className='m-0 p-0'/>
        <span className='d-none d-lg-block nav-head fw-bold'>Measi matriculation higher secondary school</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link text-dark fw-bold" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark fw-bold" href="#">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-dark fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Academic
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link  text-dark fw-bold">Facilities</a>
          </li>
          <li className="nav-item">
            <a className="nav-link  text-dark fw-bold">Curriculum</a>
          </li>
          <li className="nav-item">
            <a className="nav-link  text-dark fw-bold">Admission</a>
          </li>
          <li className="nav-item">
            <a className="nav-link  text-dark fw-bold">Gallery</a>

          </li>
          <li className="nav-item">
            <a className="nav-link  text-dark fw-bold">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </>
  )
}

export default Navbar