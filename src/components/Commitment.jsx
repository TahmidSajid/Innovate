import React from 'react'
import List from './List'
import Flex from './Flex'
import Image from './Image'
import Commit_image from "../assets/images/commit.png";
import Paragraph from './Paragraph';

const Commitment = ({children}) => {
  return (
        <List>
            <Flex className='w-[568px] pb-[42px] ps-[28px] bg-transparent rounded-lg hover:shadow-lg hover:bg-white transition'>
                <Image src={Commit_image} alt="img" className='w-[38px] h-[25px] mt-[50px]'/>
                    <Paragraph className='font-paprika w-[319px] text-[18px] ps-[37px] pt-[42px] text-[#726E9E]'>
                        {children}
                    </Paragraph>
            </Flex>
        </List>
  )
}

export default Commitment