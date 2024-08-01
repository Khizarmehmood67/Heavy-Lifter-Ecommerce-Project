"use client";
import CommonButton from "@/components/common/button";
import SelectBox from "@/components/common/select-box";
import { lifters } from "@/components/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarDays } from "react-icons/fa6";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ReactDatePicker from "react-datepicker";
import { FadeIn, FadeInStagger } from "@/components/common/animation";
import Category from "@/utils/actions/category";
import SkeltonLoading from "@/components/common/loadingSkelton";
import CONFIG from "@/utils/config";
const HPHeroSection = ({ loading, categoryList }) => {
  const [selected, setSelected] = useState({ id: 0, name: "" });
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div className="bg-[url('/images/slider-bg.jpg')] bg-cover relative top-0 -mt-[96px] pt-28 pb-16">
      <FadeInStagger faster className="container-main">
        <FadeIn className="pt-4 pb-1 md:py-10 bg-seashell px-4 rounded-md">
          <p className="text-base md:text-2xl font-bold text-center text-default-yellow">
            New & Used Construction Equipment For Sale
          </p>
          <div className="lg:hidden block">
            {loading ? (
              <SkeltonLoading count={2} />
            ) : categoryList?.data?.length > 0 ? (
              <>
                <Swiper
                  spaceBetween={10}
                  slidesPerView={2}
                  navigation={false}
                  slidesPerGroup={2}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    // when window width is >= 640px
                    425: {
                      slidesPerView: 3,
                      spaceBetween: 16,
                      slidesPerGroup: 3,
                    },
                    // when window width is >= 768px
                    768: {
                      slidesPerView: 5,
                      spaceBetween: 20,
                      slidesPerGroup: 5,
                    },
                    1024: {
                      slidesPerView: 7,
                      spaceBetween: 24,
                      slidesPerGroup: 7,
                    },
                  }}
                  modules={[Navigation, Pagination, Autoplay]}
                  className="mySwiper w-full h-full mt-5"
                >
                  {categoryList?.data?.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex flex-col items-center gap-3">
                        {/* First item */}
                        {categoryList?.data?.[index] && (
                          <div className="group flex flex-col items-center text-center justify-start hover-effect cursor-pointer">
                            <Image
                              // src={lifters[index].image}
                              src={`${CONFIG.BASE_URL}${categoryList?.data[index]?.attributes?.Icon?.data?.attributes?.url}`}
                              width={125}
                              height={70}
                              className="object-cover"
                              alt=""
                            />
                            <span className="font-medium group-hover:font-semibold text-sm md:text-lg">
                              {categoryList?.data[index]?.attributes?.Label}
                            </span>
                          </div>
                        )}
                        {/* Second item */}
                        {categoryList?.data?.[index + 1] && (
                          <div className="group flex flex-col items-center text-center justify-start hover-effect cursor-pointer">
                            <Image
                              // src={lifters[index + 1].image}
                              src={`${CONFIG.BASE_URL}${categoryList?.data[index]?.attributes?.Icon?.data?.attributes?.url}`}
                              width={125}
                              height={70}
                              className="object-cover"
                              alt=""
                            />
                            <span className="font-medium group-hover:font-semibold text-sm md:text-lg">
                              {
                                categoryList?.data?.[index + 1]?.attributes
                                  ?.Label
                              }
                            </span>
                          </div>
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </>
            ) : (
              <div className="text-black text-base font-medium">
                No Record Found
              </div>
            )}
          </div>
          <div className="hidden lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-y-8 gap-x-5 items-start justify-center pt-5">
            {loading ? (
              <SkeltonLoading count={7} />
            ) : categoryList?.data?.length > 0 ? (
              categoryList?.data?.map((item, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center text-center justify-start hover-effect cursor-pointer"
                >
                  <Image
                    src={`${CONFIG.BASE_URL}${item?.attributes?.Icon?.data?.attributes?.url}`}
                    width={125}
                    height={70}
                    className="object-cover"
                    alt=""
                  />
                  <span className="font-medium group-hover:font-semibold text-sm md:text-lg">
                    {item?.attributes?.Label}
                  </span>
                </div>
              ))
            ) : (
              <div className="text-black text-base font-medium">
                No Record Found
              </div>
            )}
          </div>
        </FadeIn>

        {/* <FadeIn className="max-w-5xl mx-auto items-center justify-center rounded-md bg-seashell mt-6 p-4 flex flex-col md:flex-row gap-3 md:space-x-2">
          <SelectBox
            data={[]}
            setSelected={setSelected}
            selected={selected}
            placeholder={"What are you looking for?"}
          />
          <SelectBox
            data={[]}
            setSelected={setSelected}
            selected={selected}
            placeholder={"Search category"}
          />
          <div className="relative w-full">
            <ReactDatePicker
              selectsRange={true}
              startDate={startDate}
              placeholderText="Please Select Date"
              endDate={endDate}
              onChange={(update) => {
                setDateRange(update);
              }}
            />
            <FaCalendarDays className="absolute right-3 bottom-4" />
          </div>
          <div className="my-4 md:mt-0 w-full md:w-fit">
            <button
              href={"#"}
              className={`text-sm w-full md:mt-2.5 lg:w-fit font-semibold text-center rounded-lg leading-6 text-black bg-default-yellow hover:bg-opacity-80 px-6 py-3`}
            >
              Search
            </button>
          </div>
        </FadeIn> */}
      </FadeInStagger>
    </div>
  );
};

export default HPHeroSection;
