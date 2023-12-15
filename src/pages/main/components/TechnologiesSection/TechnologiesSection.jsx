import React from 'react'
import Technology from './components/Technology'
import "./style.css"

const technologies = [
    {id:1, name: "HTML", description: "Highly skilled in HTML/CSS with extensive experience in successful project delivery and advanced proficiency in related technologies."},
    {id:2, name: "REACT", description: "Experienced in React JS with a proven track record of successful project delivery and advanced proficiency in related technologies."},
    {id:3, name: "JAVASCRIPT", description: "With a proven track record of successful project delivery, I possess extensive experience in JavaScript and related technologies."}
]

export default function TechnologiesSection() {


    let listOfTechnologies = technologies.map((tech)=> <Technology tech={tech}/>)

  return (
    <section className='technologies__section'>
        <h2 className='section__title'>
             What technologies I will bring to your business.
        </h2>
        <div className='technologies__list'>
            {listOfTechnologies}
        </div>
        <button className='btn download__cv__btn'>Download my CV</button>
    </section>
  )
}
