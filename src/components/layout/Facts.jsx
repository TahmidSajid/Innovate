import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Fact from '../Fact'
import Image from '../Image'
import Fact_image_1 from '../../assets/images/fact_img_1.png'
import Fact_image_2 from '../../assets/images/fact_img_2.png'
import Fact_image_3 from '../../assets/images/fact_img_3.png'
import Fact_image_4 from '../../assets/images/fact_img_4.png'
import Fact_image_5 from '../../assets/images/fact_img_5.png'


const Facts = ({className}) => {
  return (
    <>
    <Container className={`max-w-[1290px] relative ${className}`}>
      <Flex className='justify-between'>
      <Image src={Fact_image_1} className='absolute left-[0] top-[-123px] z-[1]'/>
      <Image src={Fact_image_2} className='absolute left-[300px] top-[-151px] z-[1]'/>
      <Image src={Fact_image_3} className='absolute left-[530px] top-[-35px] z-[1]'/>
      <Image src={Fact_image_4} className='absolute left-[900px] top-[-123px] z-[1]'/>
      <Image src={Fact_image_5} className='absolute left-[1235px] top-[-123px] z-[1]'/>
      
      </Flex>
        <Flex className='text-center pt-[469px]'>
            <Fact number="53 k" heading="#happy# #client#"/>
            <Fact number="10 k" heading="#projects# #done#"/>
            <Fact number="120" heading="#gets# #award#"/>
            <Fact number="16" heading="#operated# #Years#"/>
        </Flex>
    </Container>
    </>
  )
}

export default Facts