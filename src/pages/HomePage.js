import React from 'react'
import About from '../components/about/About'
import Portfolio from '../components/portfolio/Portfolio'
import ResumeTimeLine from '../components/cv/ResumeTimeLine'
import Contact from '../components/contact/Contact'
import Home from '../components/home/Home'

export default function HomePage() {
  return (
    <>
      <Home/>
      <About/>
      <Portfolio/>
      <ResumeTimeLine/>
      <Contact/>
    </>
  )
}
