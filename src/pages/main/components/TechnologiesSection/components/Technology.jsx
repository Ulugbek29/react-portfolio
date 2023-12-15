import React from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules"


// import "swiper/css"
// import "swiper/css/effect-coverflow"
// import "swiper/css/pagination"
// import "swiper/css/navigation"


export default function Technology(props) {

    const pLanguage = (lang)=> {
        if(lang === "HTML") {
            return "html"
        }else if(lang === "REACT") {
            return "react"
        }else if(lang === "JAVASCRIPT") {
            return "javascript"
        }
    }

    const progLangName = (name) => {
        if(name === "HTML") {
            return "HTML"
        }else if(name === "REACT") {
            return <i class="fa-brands fa-react"></i>
        }else if(name === "JAVASCRIPT") {
            return "JS"
        }
    }

    console.log(props.tech)
  return (
 
      <div className='technology'>
        <div className={`technology__type ${pLanguage(props.tech.name.toUpperCase())}`}>
            {progLangName(props.tech.name.toUpperCase())}
        </div>
        <h3>{props.tech.name}</h3>
        <p className='technology__experience'>
        {props.tech.description}
        </p>
    </div>
    
  )
}
