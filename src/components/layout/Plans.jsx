import React from "react";
import Plan from "../Plan";
import Container from "../Container";
import Flex from "../Flex";
import Plan_image_1 from "../../assets/images/plan_img_1.png";
import Plan_image_2 from "../../assets/images/plan_img_2.png";
import Plan_image_3 from "../../assets/images/plan_img_3.png";
import Heading from "../Heading";

const Plans = () => {
  return (
    <>
      <Container className="max-w-[1170px] py-[100px]">
        <Heading
          className="font-sans font-bold text-[48px] text-[#141135] text-center pb-[64px]"
          as="h1"
        >
          #choose# #the# #right# #plan#
        </Heading>
        <Flex className="grid grid-cols-3 gap-[30px]">
          <Plan
            plan_name="#basic#"
            plan_image={Plan_image_1}
            plan_price="106"
            plan_detail_1="Responsive Design"
            plan_detail_2=" Dynamic Elements"
            plan_detail_3="Service Pages"
            plan_detail_4="Custom Design & Features"
          />
          <Plan
            plan_name="#professional#"
            plan_image={Plan_image_2}
            plan_price="240"
            plan_detail_1="Responsive Design"
            plan_detail_2=" Dynamic Elements"
            plan_detail_3="Service Pages"
            plan_detail_4="Custom Design & Features"
          />
          <Plan
            plan_name="#exclusive#"
            plan_image={Plan_image_3}
            plan_price="325"
            plan_detail_1="Responsive Design"
            plan_detail_2=" Dynamic Elements"
            plan_detail_3="Service Pages"
            plan_detail_4="Custom Design & Features"
          />
        </Flex>
      </Container>
    </>
  );
};

export default Plans;
