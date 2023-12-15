import React from 'react'
import SideBar from '../../../../../../common/sideBar/sideBaar'

export default function NavLinks() {

  return (
    <div className='nav__lists'>
        <ul className='nav__links'>
            <li>
                <a href=''>Portfolio</a>
            </li>
            <li>
                <a href=''>About me</a>
            </li>
            <li>
                <a href=''>Blog</a>
            </li>
            <li>
                <a href=''>Contacts</a>
            </li>
        </ul>
        <button className='gmail__btn'>abduvoxidyuldashev@gmail.com</button>
        <SideBar />
    </div>
  )
}
