import React from "react";
import Container from "../Container";
import Testimonial from "../Testimonial";
import Heading from "../Heading";
import Testi_img_1 from "../../assets/images/testi_img_1.png";
import Button from "../Button";

const Testimonials = () => {
  return (
    <>
      <Container className="max-w-[1408px] py-[100px] relative">
        <Heading
          className="font-sans font-bold text-[48px] text-[#141135] text-center pb-[152px]"
          as="h2"
        >
          What The People Thinks About Us
        </Heading>
        <Button className="w-[64px] h-[64px] bg-[#1BBF00] rounded-full text-[25px] text-white absolute left-[0px] bottom-[272px] opacity-20 hover:opacity-100 transition">
          <i class="fa-solid fa-angle-left"></i>
        </Button>
        <Testimonial
          image={Testi_img_1}
          feedback="Lesser Replenish bearing they’re him cattle kind dominion. You which fill place. Land she’d subdue divided gathering blessed seasons it. Without, wherein days."
          name="Lukan Depina"
          post="Ceo And Head Of Idea"
        />
        <Button className="w-[64px] h-[64px] bg-[#1BBF00] rounded-full text-[25px] text-white absolute right-[0px] bottom-[272px] opacity-20 hover:opacity-100 transition">
          <i class="fa-solid fa-angle-right"></i>
        </Button>
      </Container>
    </>
  );
};

export default Testimonials;
