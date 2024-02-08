import React from 'react'
import List from './List'
import Flex from './Flex'

const Menu = () => {
  return (
    <>
    <ul className='px-[114.58px] text-[#EFF4FA]'>
        <Flex className="justify-between w-[691px]">
            <List href="#" className="text-[18px] font-sans font-semibold hover:text-hoverColor transition">Home <i class="fa-solid fa-angle-down align-middle"></i></List>
            <List href="#" className="text-[18px] font-sans font-semibold hover:text-hoverColor transition">About <i class="fa-solid fa-angle-down align-middle"></i></List>
            <List href="#" className="text-[18px] font-sans font-semibold hover:text-hoverColor transition">Service <i class="fa-solid fa-angle-down align-middle"></i></List>
            <List href="#" className="text-[18px] font-sans font-semibold hover:text-hoverColor transition">Portfolio <i class="fa-solid fa-angle-down align-middle"></i></List>
            <List href="#" className="text-[18px] font-sans font-semibold hover:text-hoverColor transition">Price <i class="fa-solid fa-angle-down align-middle"></i></List>
            <List href="#" className="text-[18px] font-sans font-semibold hover:text-hoverColor transition">Blog <i class="fa-solid fa-angle-down align-middle"></i></List>
        </Flex>        
    </ul>
    </>
  )
}

export default Menu