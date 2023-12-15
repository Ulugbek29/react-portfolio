import React from 'react'
import AboutMeSection from './components/AboutMeSection/AboutMeSection'
import BlogSection from './components/BlogSection/BlogSection'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import TechnologiesSection from './components/TechnologiesSection/TechnologiesSection'


export default function Main() {
  return (
    <div>
    <Header />
    <HeroSection />
    <ProjectsSection />
    <AboutMeSection />
    <TechnologiesSection />
    <BlogSection />
    <Footer />
    </div>
  )
}
