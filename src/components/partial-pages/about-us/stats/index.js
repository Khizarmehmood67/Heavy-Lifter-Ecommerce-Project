import { stats } from "@/components/constants";
import CONFIG from "@/utils/config";
import Image from "next/image";
import React from "react";

function AboutUsStats({ data, getFBData }) {
  const stats = [
    {
      src: "/images/award.png",
      count: data?.features?.length > 0 && data?.features[3]?.title,
      name: data?.features?.length > 0 && data?.features[3]?.client_number,
    },
    {
      src: "/images/clients.png",
      count: data?.features?.length > 0 && data?.features[4]?.title,
      name: data?.features?.length > 0 && data?.features[4]?.client_number,
    },
    {
      src: "/images/rocket.png",
      count: data?.features?.length > 0 && data?.features[5]?.title,
      name: data?.features?.length > 0 && data?.features[5]?.client_number,
    },
    {
      src: "/images/timer.png",
      count: data?.features?.length > 0 && data?.features[6]?.title,
      name: data?.features?.length > 0 && data?.features[6]?.client_number,
    },
  ];
  return (
    <>
      {getFBData?.length > 0 && (
        <div className="bg-[url(/images/about-bg.webp)] bg-cover py-28 h-full">
          <div className="max-w-6xl px-6 mx-auto grid grid-cols-2 md:grid-cols-4 justify-between">
            {getFBData.map((item, index) => (
              <div key={index}>
                <div className="flex flex-col space-y-4 items-center text-center">
                  <div className="h-[79px] flex items-center">
                    <Image
                      src={`${CONFIG.BASE_URL}${item?.img?.data?.attributes?.url}`}
                      height={64}
                      width={64}
                      className="object-cover"
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl webkit-white font-bold">
                      {item?.client_number}
                    </h3>
                    <p className="pt-1.5 text-white text-xl font-bold">
                      {item?.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default AboutUsStats;
