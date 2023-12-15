import React from 'react'
import image from "../../../../../assets/images/blog.png"

export default function Blog(props) {

  const checkBlogType = (type) => {
    if(type) return "featured"
  }


  return (
    <div className='blog'>
        <div className='blog__img'>
            <img src={image} />
        </div>

        <div className={`blog__type ${checkBlogType(props.blog.featured)}`}>
            {props.blog.featured ? "Featured" : "New"}
        </div>

        <div className='blog__title'>
        {props.blog.title}
        </div>

        <div className='blog__date'>
        {props.blog.date}
        </div>

    </div>
  )
}
