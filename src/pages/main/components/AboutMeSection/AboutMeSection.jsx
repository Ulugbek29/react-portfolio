import React from 'react'
import "./style.css"
import programmerImg from "../../../../assets/images/programmer.png"

export default function AboutMeSection() {
  return (
    <section className='aboutme__section'>
    <div className='about__me'>
        <h2 className='section__title'>About me.</h2>
        <p>
        <span>
        As a professional front-end web developer with 2 years of experience, I take pride in my ability to work efficiently and deliver quality work in a timely manner. 
        </span>

        <span>
        My name is Abduvoxid Yuldashev and I have had the privilege of working with prestigious companies such as Hamkorbank and Udevs, where I have honed my skills and gained valuable knowledge in the field. 
        </span>

        <span>
        In addition, my fluency in three languages - English, Russian, and Uzbek - allows me to communicate effectively with clients from diverse backgrounds. 
        </span>

        <span>
        I am passionate about my work and am always eager to learn and implement new techniques to improve my skills. 
        </span>

        <span>
        Thank you for taking the time to read about me and my experience.
        </span>

        </p>

        <button className='download__cv'>Download my CV</button>
    </div>

    <div className='my__img'>
        <img src={programmerImg} />
    </div>

    </section>
  )
}
