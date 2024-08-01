import { aboutUSCards } from "@/components/constants";
import CONFIG from "@/utils/config";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";

const SectionOne = ({ data }) => {
  const aboutUSCards = [
    {
      src: "/images/icon1.png",
    },
    {
      src: "/images/icon2.png",
    },
    {
      src: "/images/icon3.png",
    },
  ];

  return (
    <div className="pt-10 pb-16">
      <div className="container-main flex flex-col md:flex-row lg:mt-16">
        <div className="w-full md:w-[46%] relative hidden xl:block">
          <div className="bg-default-yellow w-[490px] h-[84%] absolute top-12 left-0"></div>
          <div className="xl:relative left-10">
            <Image
              // src={""}
              src={
                data?.about_component_image?.data
                  ? `${CONFIG.BASE_URL}${data?.about_component_image?.data?.attributes?.url}`
                  : "/images/image1/webp"
              }
              height={412}
              width={532}
              alt=""
              className="object-cover"
            />
          </div>
        </div>
        <div className=" md:p-10 lg:w-[54%] flex justify-center items-center relative z-10">
          <div className="flex flex-col lg:py-14 lg:px-6 relative ">
            <div>
              <ReactMarkdown className="about-us">
                {data?.about_component}
              </ReactMarkdown>
            </div>

            <div className="inline-flex gap-x-3 mt-10 md:ml-10">
              <div className="bg-default-yellow p-3 rounded-full">
                <Image src={"/svg/play.svg"} alt="" height={16} width={16} />
              </div>
              <span className="text-dark-jungle-green text-sm">
                Watch video tour 5 <br />
                min lenght
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:pt-16 container-main grid md:grid-cols-3 gap-5">
        {data?.features?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col space-y-4 p-4 bg-white hover:shadow-lg"
          >
            <div className="h-[66px]">
              <Image
                src={aboutUSCards[index]?.src}
                height={56}
                width={56}
                alt=""
              />
            </div>
            <p className="text-lg font-bold">{item?.Title}</p>
            <p className="text-base text-dark-jungle-green">
              {item?.Description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionOne;
