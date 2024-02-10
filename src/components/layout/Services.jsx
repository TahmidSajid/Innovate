import React from 'react'
import Service from '../Service'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Service_image_1 from "../../assets/images/service_img_1.png";
import Service_image_2 from "../../assets/images/service_img_2.png";
import Service_image_3 from "../../assets/images/service_img_3.png";
import Service_image_4 from "../../assets/images/service_img_4.png";
import Service_image_5 from "../../assets/images/service_img_5.png";
import Button from '../Button'

const Services = () => {
  return (
    <>
    <Container className='w-[1170px] py-[100px]'>
        <Flex className='grid grid-cols-3 gap-[30px]'>
            <div>
            <Heading className='font-sans font-bold text-[48px] text-[#141135] pb-[20px]' as='h1'>
                #what# #we# #do#
            </Heading>
            <Paragraph className='font-sans font-normal text-[18px] leading-[32px] text-[#6C7D93] pe-[45px] pb-[56px]'>
                We are now a team of strategists, engineers, designers, and marketers who both use and develop technology 
            </Paragraph>
            <Button className="w-[189px] py-[20px] text-white font-sans font-bold text-white text-[20px] bg-hoverColor rounded-full hover:border-[1px] hover:bg-transparent hover:border-hoverColor hover:text-hoverColor transition">
              Contuct Us
            </Button>
            </div>
            <div>
                <Service image={Service_image_1} heading='#web# #design# & #dev#' paragraph='Social Media has changed the way we interact & do business while creating' href="#" />
            </div>
            <div>
                <Service image={Service_image_2} heading='#software# #dev#' paragraph='Content Marketing is the other fold of online advertisement. If you are looking to build' href="#" />
            </div>
            <div>
                <Service image={Service_image_3} heading='#content# #writing#' paragraph='Social Media has changed the way we interact & do business while creating a new avenue.' href="#" />
            </div>
            <div>
                <Service image={Service_image_4} heading='#digital# #marketing#' paragraph='Social Media has changed the way we interact & do business while creating a new avenue.' href="#" />
            </div>
            <div>
                <Service image={Service_image_5} heading='#support# & #training#' paragraph='Content Marketing is the other fold of online advertisement. If you are looking to build' href="#" />
            </div>
        </Flex>
    </Container>
    </>
  )
}

export default Services