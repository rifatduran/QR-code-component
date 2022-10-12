import React from 'react'
import './QR.css';

function QR() {
  return (
    <div className='aa' class="container">
      <div className='square'>
        <a href="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H">
          <img src={require('../images/image-qr-code.png')} />
        </a>
      </div>
      <div className='txt'>
        <p className='first font-outfit'>Improve your front-end skills by building projects</p>
        <p className='second font-outfit'>Scan the QR to visit Frontend Mentor and take youer coding skills to the next level</p>
      </div>
    </div>
  )
}

export default QR