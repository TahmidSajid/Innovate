import React from 'react'
import Flex from "../components/Flex";
import Image from './Image';
import Heading from './Heading';
import Paragraph from './Paragraph';

const Impact = ({image , heading , paragraph}) => {
  return (
    <>
    <Flex className='w-[441px] pb-[40px]'>
        <Image src={image} alt='img' className='me-[35px] w-[63px] h-[36px]'/>
        <div>
            <Heading className='font-sans font-bold text-[30px] leading-[36px] text-[#141135] pb-[20px]' as='h1'>{heading}</Heading>
            <Paragraph className='font-paprika text-[18px] leading-[30px] text-[#726E9E]' >{paragraph}</Paragraph>
        </div>
    </Flex>
    </>
  )
}

export default Impact