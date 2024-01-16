import React from 'react'
import img from '../img/see.jpeg'
import img1 from '../img/img1.jpeg'
import img2 from '../img/img2.jpeg'
import s from '../img/see.jpeg'
function Home() {
  return (
   <div>
<div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img} className="d-block w-100" alt="img"/>
    </div>
    <div className="carousel-item">
      <img src={img1} className="d-block w-100" alt="img2"/>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="img1"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button  className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">ZIRCON</h5>
        <img src={img2} className="d-block w-100" alt="img"/>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
       
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">VENEERS</h5>
        <img src={img1}  className="d-block w-100 " alt="img2"/>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
       
      </div>
    </div>
  </div>
</div>
</div>

   
  )
}

export default Home