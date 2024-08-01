"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { slideData } from "@/components/constants";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, FadeInStagger } from "@/components/common/animation";
import CONFIG from "@/utils/config";
const HPSLiderSection = ({ brandList }) => {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef && swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef && swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <FadeInStagger className="container-main relative">
      <div className=" pb-20 pt-10 bg-white/90 shadow-sm px-5 rounded-2xl relative">
        <p className="text-[42px] font-bold text-dark-grey text-center mb-5">
          Our Brands
        </p>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          // navigation={{
          //   prevEl: ".swiper-button-prev",
          //   nextEl: ".swiper-button-next",
          // }}
          navigation={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerGroup={1}
          pagination={false}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 16,
              slidesPerGroup: 1,
              pagination: false,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 5,
              spaceBetween: 20,
              slidesPerGroup: 1,
              pagination: true,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 24,
              slidesPerGroup: 1,
              pagination: true,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper w-full h-full"
        >
          {brandList?.data?.map((item, index) => (
            <SwiperSlide key={index} className="flex items-center gap-3">
              <div className="flex flex-col gap-5">
                <div className="h-[130px] flex items-center justify-center">
                  <Image
                    src={`${CONFIG.BASE_URL}${item?.attributes?.BrandIcon?.data?.attributes?.url}`}
                    height={130}
                    width={178}
                    className="object-cover"
                    alt=""
                    unoptimized
                  />
                </div>
                {/* <Link
                  href={"#"}
                  className={`text-sm font-semibold rounded-md text-center pt-3 leading-6 text-black bg-default-yellow hover:bg-opacity-80 px-6 w-full py-3 `}
                >
                  {item.btnTitle}
                </Link> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="">
          <button
            className="swiper-button-prev bg-white py-7 shadow-xl rounded-full"
            onClick={goPrev}
          >
           
          </button>
        </div>
        <div className="">
          <button className="swiper-button-next" onClick={goNext}>
           
          </button>
        </div> */}
      </div>
    </FadeInStagger>
  );
};

export default HPSLiderSection;
