import React from 'react'
import Blog from './components/Blog'
import "./style.css"


const blogs = [
    {id:1, featured: false, title: "How I make Web pages fast and what is the secret behind it.", date: "Feb 03, 2021"},
    {id:2, featured: true, title: "This is the place I take and learn code from.This are top 10 websites", date: "Feb 03, 2021"},
    {id:3, featured: false, title: "10 Essential Front-End Technologies Every Developer Should Know", date: "Feb 03, 2021"},
    {id:4, featured: false, title: "The Importance of Responsive Design in Front-End Development", date: "Feb 03, 2021"},
    {id:5, featured: false, title: "Mastering the Art of CSS: Tips and Tricks for Front-End Developers", date: "Feb 03, 2021"},
    {id:6, featured: true, title: "The Future of Front-End Development:Predictions and", date: "Feb 03, 2021"}
]



export default function BlogSection() {

    let blogsList = blogs.map((blog)=> <Blog  blog={blog}/>)

    return (
    <section className='blog__section'>
        <div className='blog__header'>
            <h2 className='section__title'>
                Blog
            </h2>
            <p className='section__subtitle'>
            This is my personal blog, you can read and maybe learn something new.
            </p>
        </div>

        <div className='blogs__container'>
           {blogsList}
        </div>
        <button className='btn load__more__btn'><i class="fa-solid fa-spinner"></i> Load more</button>
    </section>
  )
}
