import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Image from '../Image'
import Flex from '../Flex'
import banner_img_1 from '../../assets/images/banner_img_1.png'
import banner_img_2 from '../../assets/images/banner_img_2.png'
import Button from '../Button'

const Banner = ({className}) => {
  return (
    <>
        <div className={className}>
            <div className='pt-[246px] pb-[254px] px-[479px] text-center text-white bg-bannerOverlay'>
              <Container className='max-w-[962px]'>
                <Image src={banner_img_1} alt="Banner Image" className="absolute left-[31px] bottom-[644px]"/>
                <Image src={banner_img_1} alt="Banner Image" className="absolute left-[31px] bottom-[606px]"/>
                  <Heading className="font-sans text-[84px] leading-[100px] font-[700]" as="h1">#you're# #unique.# #your# #website# #should# be too</Heading>
                  <Paragraph className="font-paprika font-normal leading-[40px] text-[24px] px-[123px] pt-[20px] pb-[16px]">A beautiful website passionately crafted for your small business.  Our Digital Agency development has changed the way brands and businesses use technology for growing business. </Paragraph>
                  <Flex className="w-[455px] mx-auto font-bold text-center justify-between">
                    <Button className="w-[232px] text-[20px] py-[20px] border-hoverColor border-[1px] rounded-full hover:bg-hoverColor transition">Get Free Quoto</Button>
                    <Button className="w-[195px] text-[20px] py-[20px] border-hoverColor border-[1px] rounded-full hover:bg-hoverColor transition">Learn More</Button>
                  </Flex>
                  <Image src={banner_img_2} alt="Banner Image" className="absolute right-[310px] bottom-[73px]"/>
              </Container>
            </div>
        </div>
    </>
  )
}

export default Banner