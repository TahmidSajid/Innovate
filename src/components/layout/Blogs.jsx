import React from "react";
import Blog from "../Blog";
import Container from "../Container";
import Heading from "../Heading";
import Blog_img_1 from "../../assets/images/blog_img_1.png";
import Blog_img_2 from "../../assets/images/blog_img_2.png";
import Image from "../Image";

const Blogs = () => {
  return (
    <>
      <Container className="w-[982px] pt-[100px] pb-[40px] relative">
        <Heading
          className="font-sans font-bold text-[50px] leading-[65px] text-[#030314] pb-[64px]"
          as="h2"
        >
          You May Also Like
        </Heading>
        <Blog
          image={Blog_img_1}
          category="News"
          categoryLink="#"
          postedBy="Tomas Nikelson"
          postedByLink="#"
          time="5 Hours Ago"
          heading="Punto Pago Allows Quick And Secure 
          Payments For Services In Panama"
          blogLink ="#"
        />
        <Blog
          image={Blog_img_1}
          category="News"
          categoryLink="#"
          postedBy="Tomas Nikelson"
          postedByLink="#"
          time="5 Hours Ago"
          heading="Punto Pago Allows Quick And Secure 
          Payments For Services In Panama"
          blogLink ="#"
        />
        <Blog
          image={Blog_img_1}
          category="News"
          categoryLink="#"
          postedBy="Tomas Nikelson"
          postedByLink="#"
          time="5 Hours Ago"
          heading="The User Can Also Replenish A Balance
          Make Remittances"
          blogLink ="#"
        />
        <Image src={Blog_img_2} alt='img' className='absolute left-[-461px] bottom-[0]'/>
      </Container>
    </>
  );
};

export default Blogs;
