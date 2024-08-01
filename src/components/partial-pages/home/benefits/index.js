import { FadeIn, FadeInStagger } from "@/components/common/animation";
import languageSelector from "@/redux/selectors/language";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";

const HPBenefits = ({ data, loading }) => {
  const { selectlanguage } = useSelector(languageSelector);

  return (
    <>
      {data?.length > 0 && (
        <FadeInStagger className="pt-10 pb-16">
          <FadeIn>
            <p className="text-[42px] font-bold text-dark-grey text-center mb-10">
              Our Features
            </p>
          </FadeIn>
          <div className="container-main flex flex-col md:flex-row">
            <FadeIn className="md:w-[54%] flex justify-center items-center  relative z-10">
              <div className="flex flex-col bg-white py-14 px-6 relative rounded-lg shadow-md">
                {data?.length > 0 &&
                  data.map((item, index) => (
                    <ReactMarkdown key={index} className="features-content">
                      {item?.attributes?.OurFeature}
                    </ReactMarkdown>
                  ))}

                {/* <p className="text-sm text-default-yellow font-bold">
              SOME FEATURES AND
            </p>
            <p className="text-[42px] leading-tight font-extrabold text-dark-grey">
              THE BENEFITS OF USING BACKHOE TODAY
            </p>
            <p className="pt-2 text-dark-jungle-green">
              We are committed to providing our customers with super exceptional
              service while offering our employees the best training and a
              working environment in which they can excel best of all place for
              more than a half century.
              <br />
              <br />
              This company focus has been in place for more than a half century.
              We are committed to providing our customers with exceptional
              service while offering our employees the best training best of all
              and a working environment.
            </p>

            <div className="flex flex-col sm:flex-row justify-between pt-10 gap-10">
              <div className="flex flex-col">
                <p className="text-dark-grey font-bold text-lg">
                  Building Companies
                </p>
                <p className="pt-2 text-dark-jungle-green">
                  Banks & Financial Institutions face a challenging & dynamic
                  environment with…
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-dark-grey font-bold text-lg">
                  Building Companies
                </p>
                <p className="pt-2 text-dark-jungle-green">
                  Banks & Financial Institutions face a challenging & dynamic
                  environment with…
                </p>
              </div>
            </div> */}

                <div className="inline-flex gap-x-3 mt-10 ml-10">
                  <div className="bg-default-yellow p-3 rounded-full">
                    <Image src="/svg/play.svg" height={16} width={16} alt="" />
                  </div>
                  <span className="text-dark-jungle-green text-sm">
                    Watch video tour 5 <br />
                    min lenght
                  </span>
                </div>
              </div>
            </FadeIn>
            <FadeIn className="w-full md:w-[46%] relative">
              <div
                className={
                  selectlanguage === "ar"
                    ? "bg-default-yellow w-[190px] h-full absolute top-12 left-0 hidden md:block"
                    : "bg-default-yellow w-[190px] h-full absolute top-12 right-0 hidden md:block"
                }
              ></div>
              <div className="md:relative -left-20">
                <Image
                  src={"/images/benefits.webp"}
                  height={573}
                  width={698}
                  className="object-cover"
                  alt=""
                />
              </div>
            </FadeIn>
          </div>
        </FadeInStagger>
      )}
    </>
  );
};

export default HPBenefits;
