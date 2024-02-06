import React from 'react'
import Navbar from "./components/layout/Navbar"
import Banner from './components/layout/Banner'


function App() {

  return (
    <>
    <div className='relative'>
      <Navbar className="py-[18px] bg-NavBG absolute z-10 w-full"/>
      <Banner className="bg-banner-bg bg-cover bg-center absolute"/>
    </div>
    </>
  )
}

export default App
