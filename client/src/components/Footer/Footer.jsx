import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-item'>
          <h3>Categories</h3>
          <p>Woman</p>
          <p>Man</p>
          <p>Shoes</p>
          <p>Accessories</p>
          <p>New Arrivals</p>
        </div>
        <div className='footer-item'>
          <h3>Links</h3>
          <p>FAQ</p>
          <p>Pages</p>
          <p>Stores</p>
          <p>Compare</p>
          <p>Cookies</p>
        </div>
        <div className='footer-item no-mobile'>
          <h3>About</h3>
          <p>H&M Group is a family of brands and businesses, making it possible for customers around the world to express themselves through fashion and design, and to choose a more sustainable lifestyle.</p>
        </div>
        <div className='footer-item no-mobile'>
          <h3>Contact</h3>
          <span>Head Office<br/>H & M Hennes & Mauritz AB <br/>Mäster Samuelsgatan 46A <br/>SE -106 38 Stockholm <br/>SWEDEN</span>  
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='footer-bottom-left'>
          <img className='footer-logo' src='https://www2.hm.com/hm-logo.png' alt='logo'></img>
          <p className='footer-copyright'>© copyright 2023. All rights reserved</p>
        </div>
        <div className='footer-bottom-right'>
          <img src='https://cdn.webshopapp.com/shops/218525/files/371942398/payment-methods-epicerie-ludo.png' alt='Payment Method'></img>
        </div>
      </div>
    </div>
  )
}

export default Footer