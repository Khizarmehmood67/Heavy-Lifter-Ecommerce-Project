import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CONFIG from "@/utils/config";

function TeamSection({ data, getTeam }) {
  const team = [
    {
      name: "Haaris Garrison",
      role: "CEO & FOUNDER",
      imageUrl: "/images/team.webp",
      location: "Lahore, PK",
    },
    {
      name: "Olivia Trejo",
      role: "CTO",
      imageUrl: "/images/team.webp",
      location: "Multan, PK",
    },

    {
      name: "Sammy Lovell",
      role: "PRODUCT MANAGER",
      imageUrl: "/images/team.webp",
      location: "ISb, PK",
    },
    {
      name: "Janny",
      role: "Clerk",
      imageUrl: "/images/team.webp",
      location: "Lahore, PK",
    },
    {
      name: "Jimmy",
      role: "Clert",
      imageUrl: "/images/team.webp",
      location: "Lahore, PK",
    },
    // More people...
  ];
  return (
    <>
      {getTeam?.length > 0 && (
        <div className="container-main pb-16">
          <div className="mx-auto pt-12 md:pt-28 max-w-7xl px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-[60px] font-bold text-dark-grey uppercase relative">
                  Our Team
                  <span
                    className="hidden md:block content after:content-['AWESOME'] absolute left-16 -top-5 attr(data-text) height-[100%] transform scale-[1.7] transform-origin-left opacity-[.2] z-index-[-1] blogs-text"
                    data-text="Updates"
                  ></span>
                </h2>
                <div className="w-[73px] border border-solid border-default-yellow h-[6px] bg-default-yellow" />
              </div>
            </div>

            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation={false}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 60,
                },
              }}
              modules={[Navigation, Pagination, Autoplay]}
              className="mySwiper h-full w-full"
            >
              {getTeam?.map((person, index) => (
                <SwiperSlide key={index} className="mt-10 mb-3">
                  <div className="bg-white shadow-lg rounded-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-3 hover:cursor-pointer">
                    <Image
                      src={`${CONFIG.BASE_URL}${person?.img?.data?.attributes?.url}`}
                      className="aspect-[14/13] w-full rounded-2xl object-cover"
                      alt="person proflie pic"
                      height={252}
                      width={272}
                    />
                    <div className="px-2 pb-4">
                      <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-black">
                        {person?.name}
                      </h3>
                      <p className="text-base leading-7 text-gray-700">
                        {person?.designation}
                      </p>
                      {/* <p className="text-sm leading-6 text-gray-900">
                    {person.location}
                  </p> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {team.map((person, index) => (
            <div
              key={person.name}
              className="bg-white shadow-lg rounded-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-3 hover:cursor-pointer"
            >
              <Image
                src={person.imageUrl}
                className="aspect-[14/13] w-full rounded-2xl object-cover"
                alt="person proflie pic"
                height={252}
                width={272}
              />
              <div className="px-2 pb-4">
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-black">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-700">
                  {person.role}
                </p>
                <p className="text-sm leading-6 text-gray-900">
                  {person.location}
                </p>
              </div>
            </div>
          ))}
        </div> */}
          </div>
        </div>
      )}
    </>
  );
}

export default TeamSection;
