import { FadeIn, FadeInStagger } from "@/components/common/animation";
import BlogsCard from "@/components/common/blogsCard";
import CommonButton from "@/components/common/button";
import { blogsData } from "@/components/constants";
import Link from "next/link";
import React from "react";

const HPBlogsSection = ({ title, data }) => {
  return (
    <>
      {data?.length > 0 && (
        <div className="py-16 bg-[url('/images/background_pattern.webp')] bg-cover bg-no-repeat">
          <FadeInStagger className="container-main ">
            <FadeIn className="flex justify-between items-center">
              <div>
                <h2 className="text-[60px] font-bold text-dark-grey uppercase relative">
                  {title ? (
                    title
                  ) : (
                    <Link href={"/blogs"} className="relative z-10">
                      Blogs
                    </Link>
                  )}
                  <span
                    className="hidden lg:block content after:content-['OUR_Latest'] absolute left-12 md:w-[373px] -top-5 attr(data-text) height-[100%] transform scale-[1.7] transform-origin-left opacity-[.2] z-index-[-1] blogs-text"
                    data-text="Updates"
                  ></span>
                </h2>
                <div className="w-[73px] border border-solid border-default-yellow h-[6px] bg-default-yellow" />
              </div>
            </FadeIn>

            <FadeIn className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {data?.slice(0, 3).map((item, index) => (
                <BlogsCard data={item} key={index} />
              ))}
            </FadeIn>
          </FadeInStagger>
        </div>
      )}
    </>
  );
};

export default HPBlogsSection;
