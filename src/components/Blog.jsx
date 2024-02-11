import React from "react";
import Image from "./Image";
import Flex from "./Flex";
import List from "./List";
import Heading from "./Heading";
import Link from "./Link";

const Blog = ({
  image,
  category,
  categoryLink,
  postedBy,
  postedByLink,
  time,
  heading,
  blogLink
}) => {
  return (
    <>
      <Flex className="w-[963px] pb-[60px]">
        <Image src={image} alt="img" />
        <div className="ps-[80px]">
          <ul className="inline-block flex">
            <List>
              <Link
                className="font-quicksand font-bold text-[16px] text-[#1BBF00] leading-[22px]"
                href={categoryLink}
              >
                {category}
              </Link>
            </List>
            <List className="ps-[32px] font-quicksand font-medium leading-[25px] text-[16px] text-[#726E9E]">
              By
              <Link className="inline-block ps-[8px]" href={postedByLink}>
                {postedBy}
              </Link>
            </List>
            <List className="ps-[24px] font-quicksand font-medium leading-[25px] text-[16px] text-[#726E9E]">
              Posted
              <Link className="ps-[12px] font-quicksand font-medium leading-[25px] text-[16px]">
                {time}
              </Link>
            </List>
          </ul>
          <Heading
            className="font-sans font-bold text-[30px] leading-[55px] text-[#141135]"
            as="h3"
          >
            {heading}
          </Heading>
          <div className="w-[180px] mt-[16px] relative">
            <Link
              className="capitalize text-[#141135] font-sans font-bold absolute top-[0px] left-[0px] text-[18px] leading-[24px] z-5"
              href={blogLink}
            >
              read more
            </Link>
            <div className="w-[27px] h-[40px] absolute top-[-7px] left-[80px] bg-serviceColor rounded-r-full"></div>
          </div>
        </div>
      </Flex>
    </>
  );
};

export default Blog;
