import React from 'react'
import './Footer.css'
import logo from '../assets/logo.png'
import insta from '../assets/insta.jpeg'
import x from '../assets/x.png'
import meta from '../assets/meta.png'


const Footer = () => {
  return (
    <div>
      
      <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-left">
                <img src={logo} alt="" /> 
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, ab! Cumque explicabo corrupti cum mollitia provident. Esse dolore laboriosam aliquam sed laborum explicabo, libero porro.</p>
                <div className="socialmedia">
                    <img src={meta} alt="" />
                    <img src={x} alt="" />
                    <img src={insta} alt="" />
                </div>
            </div>
            <div className="footer-center">
                <h2>Company</h2>
                <ul>
                    <ol>Home</ol>
                    <ol>About us</ol>
                    <ol>Delivery</ol>
                    <ol>Privacy Policy</ol>
                </ul>
            </div>
            <div className="footer-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li>+91 8125901312</li>
                    <li>me123@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="copyright">Copyright2025-All rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
