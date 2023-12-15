import React from 'react'
import image from "../../../../../assets/images/rasta.png"


export default function Project(props) {
    console.log(props.project)




  return (
    <div className='project'>
        <div className='project__info'>
            <div className={`type__of__done ${props.project.whoDidIt ? "" : "greenBackground"}`}>{props.project.whoDidIt ? "New" : "Financial project"}</div>
            <h3 className='project__name'>{props.project.name}</h3>
            <p>
                {props.project.types.map((type)=><span>{type}, </span>)}
            </p>
            <p className='project__dexcription'>
            {props.project.description}
            </p>
            <div className='send__btn'>
            <i className="fa-solid fa-arrow-right-long"></i>
            </div>
        </div>
        <div className='project__img'>
            <img src={image}/>
        </div>
    </div>
  )
}
