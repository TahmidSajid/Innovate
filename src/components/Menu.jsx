import React from 'react'
import List from './List'
import Flex from './Flex'

const Menu = () => {
  return (
    <>
    <ul className='px-[114.58px] w-[1170px] text-[#EFF4FA]'>
        <Flex className="justify-between">
            <List href="#" className="text-[18px]">Home <i class="fa-solid fa-angle-down align-middle"></i></List>
            <List href="#" className="text-[18px]">About <i class="fa-solid fa-angle-down align-middle"></i></List>
            <List href="#" className="text-[18px]">Service <i class="fa-solid fa-angle-down align-middle"></i></List>
            <List href="#" className="text-[18px]">Portfolio <i class="fa-solid fa-angle-down align-middle"></i></List>
            <List href="#" className="text-[18px]">Price <i class="fa-solid fa-angle-down align-middle"></i></List>
            <List href="#" className="text-[18px]">Blog <i class="fa-solid fa-angle-down align-middle"></i></List>
        </Flex>        
    </ul>
    </>
  )
}

export default Menu