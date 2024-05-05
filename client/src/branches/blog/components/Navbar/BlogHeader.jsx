import React from "react";
import {
  BlogFlex,
  BlogBox,
  BlogImg,
  BlogTitle,
  BlogCover,
  BlogSubTitle,
  BlogTypography,
} from "../../globalStyles";
import BlogButton from "../BlogButton";
import SideImg from "../../../../assets/images/blog/sideimg.jpeg";

const BlogHeader = () => {
  return (
    <BlogFlex>
      <BlogBox w="1000px" h="0px">
        <BlogCover className="relative">
          <BlogTitle
            ta="left"
            w="1000px"
            className="absolute bottom-0 lg:pl-5"
            fs="clamp(1.5rem, 10vw, 4.75rem)"
          >
            TELLING STORIES & PRESERVING MEMORIES FOR ETERNITY
          </BlogTitle>
          <BlogFlex>
          <BlogSubTitle w="500px" ta="justify" bh='0' bw='0' className="mt-8 lg:pl-24 sm:w-0" smp='25px'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit dignissim ac,
            nam justo non varius porta sem senectus diam, ad inceptos viverra
            interdum elementum leo nisi nascetur. Himenaeos libero quisque
            viverra mollis consequat mi interdum, aenean nec vestibulum
            sollicitudin facilisis.
            <br />
          </BlogSubTitle>
          </BlogFlex>
          <BlogFlex m='35px 0 0 0' gap='20px' sd='row'>
            <BlogBox>
                <BlogFlex al='flex-start' dir='column'>
                    <BlogSubTitle>80K +</BlogSubTitle>
                    <BlogTypography>Journalists</BlogTypography>
                </BlogFlex>
            </BlogBox>
            <BlogBox>
                <BlogFlex al='flex-start' dir='column'>
                    <BlogSubTitle>2000K +</BlogSubTitle>
                    <BlogTypography>Readers</BlogTypography>
                </BlogFlex>
            </BlogBox>
          </BlogFlex>
        </BlogCover>
      </BlogBox>
      <BlogBox>
        <BlogImg src={SideImg} />
      </BlogBox>
    </BlogFlex>
  );
};

export default BlogHeader;
