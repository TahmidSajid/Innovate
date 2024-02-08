import React from 'react'
import Heading from '../components/Heading'
import Image from '../components/Image'
import fact_image_1 from "../../src/assets/images/fact_img_6.png";
import Paragraph from './Paragraph';
const Fact = ({ number , heading }) => {    
  return (
    <>
    <div className='w-1/4'>
    <Paragraph className='font-sans font-extrabold text-[64px] text-hoverColor'>{number}</Paragraph>
    <Heading className='font-sans text-[36px] font-bold' as='h1'>{heading}</Heading>
    </div>
    <Image src= {fact_image_1} alt="img"/>
    </>
  )
}

export default Fact