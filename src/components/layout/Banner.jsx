import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Image from '../Image'
import Flex from '../Flex'
import Button from '../Button'

const Banner = ({className}) => {
  return (
    <>
        <div className={className}>
            <div className='pt-[246px] pb-[254px] px-[479px] text-center text-white bg-bannerOverlay'>
              <Container>
                  <Heading className="font-[sans] text-[84px] leading-[100px] font-[700]" as="h1">#you# #are# #unique.# #your# #website# #should# be too</Heading>
                  <Paragraph className="font-[paprika] text-[24px] px-[123px] pt-[20px] pb-[16px]">A beautiful website passionately crafted for your small business.  Our Digital Agency development has changed the way brands and businesses use technology for growing business. </Paragraph>
                  <Flex className="w-[455px] text-center m-auto justify-between	">
                    <Button className="w-[195px] py-[17px] border-hoverColor border-[1px] rounded-full hover:bg-hoverColor transition">Get Free Quoto</Button>
                    <Button className="w-[195px] py-[17px] border-hoverColor border-[1px] rounded-full hover:bg-hoverColor transition">Learn More</Button>
                  </Flex>
              </Container>
            </div>
        </div>
    </>
    
  )
}

export default Banner