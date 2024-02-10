import React from 'react'
import Heading from './Heading'
import Image from './Image'
import List from './List';

const Plan = ({plan_name, plan_image, plan_price, plan_detail_1, plan_detail_2, plan_detail_3, plan_detail_4}) => {
  return (
    <>
    <div className='text-center shadow-lg rounded-xl py-[60px] group hover:bg-[#6B62C5] transition'>
        <Heading className='font-sans font-bold text-[30px] leading-[36px] pb-[26px] group-hover:text-[#FAFAFE]' as='h1'>
            {plan_name}
        </Heading>
        <div className='py-[40px] mx-auto bg-planTable'>
            <Image src={plan_image} alt='img'/>
        </div>
        <div className='mx-auto w-[104px] relative text-hoverColor mt-[20px] pb-[12px]'>
        <span className='font-quicksand font-medium text-[24px] leading-[25px] absolute left-[0] top-[0]'>$</span>
        <Heading className='ps-[6px] font-nunito font-extrabold text-[48px] leading-[50px]' as='h2'>
            {plan_price}
        </Heading>
        </div>
        <ul className='text-[#726E9E] group-hover:text-[#E6E5F3]'>
            <List className='font-paprika text-[18px] leading-[32px]'>{plan_detail_1}</List>
            <List className='font-paprika text-[18px] leading-[32px]'>{plan_detail_2}</List>
            <List className='font-paprika text-[18px] leading-[32px]'>{plan_detail_3}</List>
            <List className='font-paprika text-[18px] leading-[32px]'>{plan_detail_4}</List>
        </ul>
    </div>
    </>
  )
}

export default Plan