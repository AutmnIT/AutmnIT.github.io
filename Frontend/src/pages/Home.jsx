// section imporve SEO

import React from 'react'
import Hero from '../components/Hero'
import About from './About'
import Projects from './Projects'
import WorkWithMe from './WorkWithMe'
import Donate from './Donate'

function Home() {
  return (
    <div>
      <section id='hero'><Hero/> </section>
      <section id='about'><About/></section>
      <section id='projects'><Projects/></section>
      <section id='workWithMe'><WorkWithMe/></section>
      {/* <section id='donate'><Donate/></section> */}
    </div>
  )
}

export default Home
