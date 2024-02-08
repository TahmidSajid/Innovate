import React from 'react'
import Navbar from "./components/layout/Navbar"
import Banner from './components/layout/Banner'
import Facts from './components/layout/Facts'
import Choose_Us from './components/layout/Choose_Us '


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
    </div>
    </>
  )
}

export default App
