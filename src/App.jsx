import React from 'react'
import Navbar from "./components/layout/Navbar"
import Banner from './components/layout/Banner'
import Facts from './components/layout/Facts'
import Choose_Us from './components/layout/Choose_Us '
import Services from './components/layout/Services'
import Impacts from './components/layout/Impacts'
import Plans from './components/layout/Plans'
import Testimonials from './components/layout/Testimonials'
import Blogs from './components/layout/Blogs'
import Footer from './components/layout/Footer'


function App() {

  return (
    <>
    <div className='relative overflow-hidden'>
      <nav>
        <Navbar className="py-[18px] bg-NavBG absolute z-10 w-full"/>
      </nav>
      <section>
        <Banner className="bg-banner-bg bg-cover bg-center z-[5] relative"/>
      </section>
      <section className='bg-[#F9F9FB]'>
        <Facts className="pb-[100px]"/>
      </section>
      <section className='bg-[#F9F9FB]'>
        <Choose_Us/>
      </section>
      <section className='bg-[#F6F5FF]'>
        <Services/>
      </section>
      <section className='pt-[100px] pb-[32px] relative'>
        <Impacts/>
      </section>
      <section className='bg-[#F9F9FB]'>
        <Plans/>
      </section>
      <section className='bg-[#F8F8FF]'>
        <Testimonials/>
      </section>
      <section className='bg-[#F9F9FB]'>
        <Blogs/>
      </section>
      <footer className='bg-[#48409C]'>
        <Footer/>
      </footer>
    </div>
    </>
  )
}

export default App
