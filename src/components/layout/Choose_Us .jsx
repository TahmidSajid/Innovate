import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Commitment from "../Commitment";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Button from "../Button";
import Image from "../Image";
import Choose_us_1 from "../../assets/images/choose_us_1.png";
import Choose_us_2 from "../../assets/images/choose_us_2.png";

const Choose_Us = () => {
  return (
    <>
      <Container className="max-w-[1147px] pb-[49px] relative">
        <Flex className="justify-between">
          <ul className="pt-[96px]">
            <Commitment>
              We solve real-world problems through people and the web.
            </Commitment>
            <Commitment>
              We make processes and technology work efficiently together.
            </Commitment>
            <Commitment>
              We advance improve existing technology through research and
              development.
            </Commitment>
            <Commitment>
              We develop long-lasting and scalable solutions, relationships
              partnerships.
            </Commitment>
          </ul>
          <div className="w-[393px] pt-[100px]">
            <Heading className="font-sans font-bold text-[48px]" as="h1">
              Why Choose Us
            </Heading>
            <Paragraph className="font-paprika text-[18px] text-[#726E9E] pt-[9px] pb-[41px]">
              We are now a team of strategists, engineers, designers, and marketers who both use and develop technology for a variety of client needs.
            </Paragraph>
            <Button className="w-[189px] py-[20px] text-white font-sans text-white text-[20px] bg-hoverColor rounded-full hover:border-[1px] hover:bg-transparent hover:border-hoverColor hover:text-hoverColor transition">
              Contuct Us
            </Button>
            <Image src={Choose_us_1} className="absolute top-[32px] left-[-377px] z-[10]"/>
            <Image src={Choose_us_2} className="absolute top-[-5px] left-[-377px] z-[5]"/>
          </div>
        </Flex>
      </Container>
    </>
  );
};

export default Choose_Us;
