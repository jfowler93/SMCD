import React from "react"
import "./style.css"
 
function Jumbotron(props) {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images-na.ssl-images-amazon.com/images/I/61xfBesJIcL._SX466_.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://www.billboard.com/files/styles/article_main_image/public/media/johnny-cash-1959-b-billboard-1548.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images-na.ssl-images-amazon.com/images/I/61xfBesJIcL._SX466_.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
  )
}
 
export default Jumbotron;