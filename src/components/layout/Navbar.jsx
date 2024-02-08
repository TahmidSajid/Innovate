import React from 'react'
import Container from "../Container"
import Image from "../Image"
import Logo from "../../assets/images/Logo.png"
import Flex from "../Flex"
import Menu from '../Menu'
import Button from '../Button'
const Navbar = ({className}) => {
  return (
    <>
    <div className={className}>
    <Container>
        <Flex className="justify-between items-center">
            <div>
                <Image src={Logo} alt='logo'/>
            </div>
            <Menu/>
            <Button className="w-[151px] text-[18px] font-sans font-semibold text-white rounded-full py-[14px] border-hoverColor border-[1px] hover:bg-hoverColor transition-all duration-500 ">Contact Us</Button>
        </Flex>
      </Container>
    </div>
    </>
  )
}

export default Navbar