import React from 'react'
import "./style.css"

export default function Footer() {
  return (
    <footer className='footer__section'>
        <div className='contact__details'>
            <div className='details'>
            <h2>Abdulvoxid Yuldashev</h2>
            <p>abduvoxidyuldashev@gmail.com</p>
            <p>+998 90 337 50 99</p>
            </div>
            <div className='social__media'>
                <span>
                <i class="fa-brands fa-instagram"></i>
                </span>
                <span>
                <i class="fa-brands fa-telegram"></i>
                </span>
                <span>
                <i class="fa-brands fa-linkedin"></i>
                </span>
                <span>
                <i class="fa-brands fa-facebook"></i>
                </span>
            </div>
        </div>

        <div className='contacts'>
        <span>
            Contacts
        </span>
        </div>

        <div className='website__info'>
            <a href='#'>Back to top</a>

        <div className='navigation__list'>
          <h2>Navigation</h2>
            <div>
                <ul>
                    <li><a href=''>Portfolio</a></li>
                    <li><a href=''>About me</a></li>
                    <li><a href=''>Group session</a></li>
                    <li><a href=''>News</a></li>
                </ul>
                <ul>
                    <li><a href=''>Documentation</a></li>
                    <li><a href=''>FAQ</a></li>
                    <li><a href=''>About  us</a></li>
                    <li><a href=''>Contact</a></li>
                </ul>
            </div>
        </div>
                <p>This website is coded and published by me and 
                <i class="fa-solid fa-heart"></i>
                </p>

        </div>
    </footer>
  )
}
