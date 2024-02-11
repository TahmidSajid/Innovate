import React from "react";
import Image from "../Image";
import Footer_logo from "../../assets/images/footer_logo.png";
import Container from "../Container";
import Flex from "../Flex";
import Paragraph from "../Paragraph";
import List from "../List";
import Heading from "../Heading";

const Footer = () => {
  return (
    <>
      <Container className="max-w-[1170px] pt-[140px] pb-[57px]">
        <Flex>
          <div>
            <Image src={Footer_logo} alt="img" className="" />
            <Paragraph className="w-[449px] font-nunito font-normal text-[18px] leading-[180%] pt-[44px] pe-[93px] text-[#FEFEFE] opacity-90">
              Install any demo or template with a single click. You can mix and
              match all the demos & templates. Every demo can be turned into one
              or multi-page.
            </Paragraph>
          </div>
          <div className="me-[100px]">
            <Heading
              className="font-sans font-semibold text-[24px] leading-[140%] text-[#FEFEFE] pb-[48px]"
              as="h5"
            >
              Features
            </Heading>
            <ul>
              <List className="font-nunito font-semibold text-[20px] leading-[120%] text-[#FEFEFE] inline-block pb-[30px] opacity-90 hover:translate-x-[20px] transition" href='#'>
                Home
              </List>
              <List className="font-nunito font-semibold text-[20px] leading-[120%] text-[#FEFEFE] inline-block pb-[30px] opacity-90 hover:translate-x-[20px] transition" href='#'>
                About
              </List>
              <List className="font-nunito font-semibold text-[20px] leading-[120%] text-[#FEFEFE] inline-block pb-[30px] opacity-90 hover:translate-x-[20px] transition" href='#'>
                Benifit
              </List>
              <List className="font-nunito font-semibold text-[20px] leading-[120%] text-[#FEFEFE] inline-block pb-[30px] opacity-90 hover:translate-x-[20px] transition" href='#'>
                Pricing
              </List>
              <List className="font-nunito font-semibold text-[20px] leading-[120%] text-[#FEFEFE] inline-block pb-[30px] opacity-90 hover:translate-x-[20px] transition" href='#'>
                Blog
              </List>
            </ul>
          </div>
          <div className="me-[99px]">
            <Heading
              className="font-sans font-semibold text-[24px] leading-[140%] text-[#FEFEFE] pb-[48px]"
              as="h5"
            >
              Products
            </Heading>
            <ul>
              <List className="font-nunito font-semibold text-[20px] leading-[120%] text-[#FEFEFE] inline-block pb-[30px] opacity-90 hover:translate-x-[20px] transition" href='#'>
                Task Management
              </List>
              <List className="font-nunito font-semibold text-[20px] leading-[120%] text-[#FEFEFE] inline-block pb-[30px] opacity-90 hover:translate-x-[20px] transition" href='#'>
                Company growth
              </List>
              <List className="font-nunito font-semibold text-[20px] leading-[120%] text-[#FEFEFE] inline-block pb-[30px] opacity-90 hover:translate-x-[20px] transition" href='#'>
                Time tracking
              </List>
            </ul>
          </div>
          <div>
            <Heading
              className="font-sans font-semibold text-[24px] leading-[140%] text-[#FEFEFE] pb-[48px]"
              as="h5"
            >
              Support
            </Heading>
            <ul>
              <List className="font-nunito font-semibold text-[20px] leading-[120%] text-[#FEFEFE] inline-block pb-[30px] opacity-90 hover:translate-x-[20px] transition" href='#'>
                Customer service
              </List>
              <List className="font-nunito font-semibold text-[20px] leading-[120%] text-[#FEFEFE] inline-block pb-[30px] opacity-90 hover:translate-x-[20px] transition" href='#'>
                Accessibility
              </List>
              <List className="font-nunito font-semibold text-[20px] leading-[120%] text-[#FEFEFE] inline-block pb-[30px] opacity-90 hover:translate-x-[20px] transition" href='#'>
                Contact us
              </List>
            </ul>
          </div>
        </Flex>
        <Flex>
            <Paragraph className='font-nunito font-normal text-[18px] leading-[180%] text-[#FEFEFE] pe-[450px] opacity-80'>
                @2020 Innovate.All rights reserved.
            </Paragraph>
            <Paragraph className='font-nunito font-normal text-[18px] leading-[180%] text-[#FEFEFE] pe-[60px] opacity-80'>
                Privacy policy
            </Paragraph>
            <Paragraph className='font-nunito font-normal text-[18px] leading-[180%] text-[#FEFEFE] opacity-80'>
                Terms & condition
            </Paragraph>
        </Flex>
      </Container>
    </>
  );
};

export default Footer;
