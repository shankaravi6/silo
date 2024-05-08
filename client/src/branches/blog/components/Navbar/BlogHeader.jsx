import React, { useEffect, useState } from "react";
import {
  BlogFlex,
  BlogBox,
  BlogImg,
  BlogTitle,
  BlogCover,
  BlogSubTitle,
  BlogTypography,
} from "../../globalStyles";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { bannerDatas } from "../../data/bannerData";
import { useThemeContext } from "../../../../themeprovider/ThemeProvider";

const BlogHeader = () => {
  const [data, setData] = useState(0);
  const bannerData = bannerDatas[data];
  const [animated, setAnimated] = useState(false);

  useEffect(() =>{
    setAnimated(true)
    setTimeout(() => {
      setAnimated(false);
    }, 1500);
  },[])

  const handleSliderNext = () => {
    setData((prevData) => (prevData + 1) % bannerDatas.length);
    setAnimated(true);
    setTimeout(() => {
      setAnimated(false);
    }, 1500);
  };

  const handleSliderPrev = () => {
    setData((prevData) => (prevData - 1 + bannerDatas.length) % bannerDatas.length);
    setAnimated(true);
    setTimeout(() => {
      setAnimated(false);
    }, 1500);
  };

  const { palette } = useThemeContext();

  return (
    <BlogFlex>
      <BlogBox w="1000px" h="0px" className="z-50 relative">
        <BlogCover className="relative">
        <BlogCover>
          <BlogTitle
            ta="left"
            w="clamp(40rem, 100vw, 80rem)"
            className={`${animated ? 'open-slider' : ''} absolute bottom-0 lg:pl-5`}
            fs="clamp(1.5rem, 10vw, 4.75rem)"
          >
            {bannerData.title}
          </BlogTitle>
          <BlogFlex smm="35px 0 0 0" gap="20px">
            <BlogCover className="cursor-pointer" style={{color:palette.background.low}} onClick={handleSliderPrev}>
              <FaArrowLeftLong />
            </BlogCover>
            <BlogCover className="cursor-pointer" style={{color:palette.background.low}} onClick={handleSliderNext}>
              <FaArrowRightLong />
            </BlogCover>
          </BlogFlex>
          <BlogFlex>
            <BlogSubTitle w="500px" ta="justify" bh="0" bw="0" className={`${animated ? 'open-slider' : ''} mt-8 xl:pl-24 lg:pl-12 pr-12 md:pl-1 sm:w-0`} smp="25px">
              {bannerData.content}
              <br />
            </BlogSubTitle>
          </BlogFlex>
          </BlogCover>
          <BlogFlex m="35px 0 0 0" smm='0 0 35px 0' gap="20px" sd="row">
            <BlogBox>
              <BlogFlex al="flex-start" dir="column">
                <BlogSubTitle>80K +</BlogSubTitle>
                <BlogTypography>Journalists</BlogTypography>
              </BlogFlex>
            </BlogBox>
            <BlogBox>
              <BlogFlex al="flex-start" dir="column">
                <BlogSubTitle>2000K +</BlogSubTitle>
                <BlogTypography>Readers</BlogTypography>
              </BlogFlex>
            </BlogBox>
          </BlogFlex>
        </BlogCover>
      </BlogBox>
      <BlogBox>
        <BlogImg className={`${animated ? 'open-slider' : ''}`} src={bannerData.img} />
      </BlogBox>
    </BlogFlex>
  );
};

export default BlogHeader;
