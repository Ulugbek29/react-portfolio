import React from 'react'
import Project from './components/Project'
import "./style.css"

const myPorjects = [
    {id:1, whoDidIt: true, name:"Rasta food delivery", types:["Web-site","Responsive"],description: " This website has been full done by me and I can proudly tell you this projects is still running to this day without and issue.", imageUrl: "../../../../../assets/images/rasta.png"},
    {id:2, whoDidIt: true, name:"Paragraf E-commerce", types:["Admin panel","Web-site","Responsive"],description: "This is one of my biggest projects yet still this is not the biggest. this project is still running to this day, and successfully helping it`s customers.", imageUrl: "../../../../../assets/images/rasta.png"},
    {id:3, whoDidIt: false, name:"Iman Invest", types:["Web-site","Responsive"],description: "This is one of the biggest Islamic banks in the central Asia and I was really happy I worked on this project, it had it`s own challenges that I never would`ve even though I would encounter. but I gained the value and experience from it.", imageUrl: "../../../../../assets/images/rasta.png"}
]


export default function ProjectsSection() {
    
    
    let allPorjects = myPorjects.map((project)=> <Project key={project.id} project={project}/>)
    



  return (
    <section className='projects__section'>
        <div className='projects__header'>
        <div className='portfolio'>
        <p >PORTFOLIO</p>
        </div>
        <div className='projects__title'>
            <h2>My projects</h2>
            <p>
            This projects were done by me.All of the projects you see has been done by me or partially by me.
            </p>
            <div className='projects__types'>
                <span className='active'>ALL</span>
                <span>Websites</span>
                <span>Admin pannels</span>
            </div>
        </div>
        </div>
        <div className='projects__container'>
            {allPorjects}
        </div>
        <button className='loadMore__btn'><i className="fa-solid fa-spinner"></i> Load more</button>
    </section>
  )
}
