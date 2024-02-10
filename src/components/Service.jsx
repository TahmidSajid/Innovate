import React from 'react'
import Image from './Image'
import Heading from './Heading';
import Paragraph from './Paragraph';
import Link from './Link';

const Service = ({image , heading , paragraph , href}) => {
  return (
    <>
    <div className=' group w-[370px] pt-[48px] px-[52px] pb-[72px] text-center bg-white hover:bg-[#6B62C5] transition rounded-lg h-full	'>
        <Image src={image} alt="img" className='mx-auto'/>
        <Heading as='h1' className='font-sans font-bold text-[30px] leading-[36px] pt-[32px] pb-[16px] group-hover:text-[#FAFAFE] transition'>
            {heading}
        </Heading>
        <Paragraph className='font-paprika text-[18px] leading-[30px] text-[#726E9E] pb-[20px] group-hover:text-[#E6E5F3] transition'>
            {paragraph}
        </Paragraph>
        <div className='w-[180px] relative mx-auto'>
        <Link className='capitalize text-[#141135] font-sans font-bold absolute top-[0px] left-[40px] text-[18px] leading-[24px] group-hover:text-[#F4F4F5] z-5' href={href}>
            read more
        </Link>
            <div className='w-[27px] h-[40px] absolute top-[-7px] left-[120px] bg-serviceColor group-hover:bg-serviceHover rounded-r-full'>

            </div>
        </div>
    </div>
    </>
  )
}

export default Service