import React from 'react'
import "../HeroSection/style.css"
import hills from "../../../../assets/images/hills.png"


export default function HeroSection() {
  return (
    <section className='hero__section'>
        <div className='hero__content'>
            <div className='hero__title'>
                <div className='hero__name__title'>
                <p>ABDULVOHID</p>
                <h1>Front-end developer</h1>
                </div>
                <div className='pagination'>
                    <div className='pagination__box'>
                        <span>01</span>
                        <span className='active'>Portfolio</span>
                        <span>01</span>
                    </div>
                </div>
            </div>
            <div className='scroll__down'>
                <p>
                <i class="fa-solid fa-down-long"></i>
                Scroll to see the the portfolio projects
                </p>
            </div>
        </div>
            <div className='ellipse__box'>
                <div className='circle'></div>
            </div>
        <div className='hills__background'>
            <img src={hills}></img>
        </div>
    </section>
  )
}
