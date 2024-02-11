import React from "react";
import Image from "./Image";
import Flex from "./Flex";
import Paragraph from "./Paragraph";
import Heading from "./Heading";

const Testimonial = ({image, feedback, name, postion}) => {
  return (
    <>
      <div className="text-center mx-auto w-[1080px] bg-white relative rounded-2xl drop-shadow-xl">
        <Image src={image} alt="img" className="mx-auto rounded-full absolute left-[50%] top-[0px] -translate-x-2/4 -translate-y-2/4" />
        <Flex className='w-[108px] justify-between mx-auto pt-[119px] pb-[33px]'>
          <div className="text-[13px] text-[#FF7628]">
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="text-[13px] text-[#FF7628]">
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="text-[13px] text-[#FF7628]">
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="text-[13px] text-[#FF7628]">
            <i class="fa-solid fa-star"></i>
          </div>
          <div className="text-[13px] text-[#FF7628]">
            <i class="fa-solid fa-star"></i>
          </div>
        </Flex>
        <Paragraph className='w-[800px] font-paprika text-[24px] leading-[40px] text-center mx-auto text-[#726E9E] pb-[48px]'>
          {feedback}
        </Paragraph>
        <Heading className='font-sans font-bold text-[25px] leading-[40px] text-[#221A2C] pb-[4px]' as="h5">{name}</Heading>
        <Paragraph className='font-paprika text-[16px] leading-[25px] text-[#726E9E] pb-[56px]'>{postion}</Paragraph>
      </div>
    </>
  );
};

export default Testimonial;
