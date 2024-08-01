import Image from "next/image";
import React from "react";

const Section2 = ({ data, getISData }) => {
  const dat = [
    data?.features?.length > 0 && data?.features[7]?.services,
    data?.features?.length > 0 && data?.features[8]?.services,
    data?.features?.length > 0 && data?.features[9]?.services,
  ];

  const team = [
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
      imageUrl: "/images/team.webp",
      location: "Toronto, Canada",
    },
    // More people...
  ];
  return (
    <>
      {getISData?.length > 0 && (
        <div className="py-10 lg:py-16 bg-[url('/images/background_pattern.webp')] bg-cover bg-no-repeat">
          <div className="container-main ">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl lg:text-[60px] font-bold text-dark-grey uppercase relative">
                  INDUSTRIES WE SERVE
                  <span
                    className="hidden lg:block content after:content-['AWESOME_SERVICES'] absolute left-16 -top-5 attr(data-text) height-[100%] transform scale-[1.7] transform-origin-left opacity-[.2] z-index-[-1] blogs-text"
                    data-text="Updates"
                  ></span>
                </h2>
                <div className="w-[73px] border border-solid border-default-yellow h-[6px] bg-default-yellow" />
              </div>
            </div>

            <div className="pt-10 flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
              <div className="flex flex-col space-y-8 lg:space-y-16">
                {getISData?.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="bg-default-yellow w-[50px] h-[93px] absolute -left-6 hidden md:block"></div>
                    <p className="py-3 px-2 md:px-6 md:py-5 cursor-pointer w-fit text-lg lg:text-2xl font-bold bg-white shadow-md relative z-10 hover:shadow-lg">
                      {item?.services}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center">
                <Image
                  src={"/images/about.png"}
                  height={515}
                  width={560}
                  className="object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Section2;
