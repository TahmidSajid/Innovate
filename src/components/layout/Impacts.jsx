import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Impact_img_1 from '../../assets/images/impact_img_1.png';
import Impact_img_2 from '../../assets/images/impact_img_2.png';
import Impact_img_3 from '../../assets/images/impact_img_3.png';
import Impact_img_4 from '../../assets/images/impact_img_4.png';
import Impact_img_5 from '../../assets/images/impact_img_5.png';
import Impact from '../Impact'
import Flex from '../Flex';
import Image from '../Image';

const Impacts = () => {
  return (
    <>
    <div>
        <Container className='max-w-[1079px]'>
            <div className='w-[558px] text-center mx-auto pb-[75px]'>
                <Heading className='font-sans font-bold text-[48px] text-[#141135] pb-[23px]' as='h1'>#we# create real impact</Heading>
                <Paragraph className='font-paprika text-[18px] leading-[30px] text-[#726E9E]'>We design, build and support websites and apps for clients worldwide. Create beautiful, eye-catching on-page messages without the need for a developer.</Paragraph>
            </div>
            <Flex className='justify-between'>
              <div>
              <Impact image={Impact_img_3} heading="#competitive# #analysis#" paragraph='With an all-new look and powerful features, Ekko is the best way to ensure success for your business.'/>
              <Impact image={Impact_img_4} heading="#strategy# #and# #research#" paragraph='Save money and start building your website using the best tools available on the market today.'/>
              </div>
              <div className='relative'>
                <Image src={Impact_img_1} alt='img' className='w-[491px] h-[425px]'/>
                <Image src={Impact_img_2} alt='img' className='absolute right-[12px] top-[63px] w-[130px] h-[105px]'/>
              </div>
            </Flex>
        </Container>
        <Image src={Impact_img_5} alt='img' className='absolute bottom-[-60px] right-[-8px] z-[-5]'/>
    </div>
    </>
  )
}

export default Impacts