import React from 'react'
import foto from "../assets/foto.png";

function Footer() {
  return (
    <div className='footer-container'>
      <div className='info-footer'>
        <img src={foto} alt="" />
        <div className='title'>
          <h6>Juan Jose Giuria</h6>
          <span>Front End Developer</span>
        </div>
      </div>
      <div className='redes-sociales'>
        <a href="https://github.com/juanjogiuria/muyMovies" target='_blank'>
          <i class="fa-brands fa-square-github fa-2xl"></i>
        </a>

        <a href="https://www.linkedin.com/in/juanjo-giuria-64a9ba194/" target='_blank'>
          <i class="fa-brands fa-linkedin fa-2xl"></i>
        </a>

        <a href="https://wa.me/5492235494287" target='_blank'>
          <i class="fa-brands fa-square-whatsapp fa-2xl"></i>
        </a>

        <a href="https://www.instagram.com/juanjogiuria/?hl=es" target='_blank'><i class="fa-brands fa-square-instagram fa-2xl"></i></a>
      </div>

    </div>
  )
}

export default Footer