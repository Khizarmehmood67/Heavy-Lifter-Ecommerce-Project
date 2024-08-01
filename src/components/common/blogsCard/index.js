import languageSelector from "@/redux/selectors/language";
import CONFIG from "@/utils/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const BlogsCard = ({ data }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`;
  };

  const { selectlanguage } = useSelector(languageSelector);

  return (
    <Link
      href={`/blogs/${data?.id}`}
      className="group flex flex-col border border-black/5 shadow-md rounded-md overflow-hidden relative"
    >
      <div className="h-[244px]">
        <img
          src={`${CONFIG.BASE_URL}${data?.attributes?.blog_img?.data?.attributes?.url}`}
          // height={244.03}
          // width={429.98}
          className="object-cover w-full"
          alt=""
          unoptimized
        />
      </div>
      <div className="flex flex-col bg-white border-t-[3px] border-default-yellow transition-transform duration-300 group-hover:-translate-y-[30px] w-full p-4">
        <div
          className={
            selectlanguage === "ar"
              ? "bg-default-yellow rounded-md p-1.5 text-black text-sm font-bold w-fit absolute bottom-36 left-3"
              : "bg-default-yellow rounded-md p-1.5 text-black text-sm font-bold w-fit absolute bottom-32 right-3"
          }
        >
          {data?.attributes?.badge}
        </div>

        <div className="inline-flex text-[#8b8b8bcc] text-sm">
          {formatDate(data?.attributes?.createdAt)}
          {/* - BY : {data?.author} - {data?.comments} */}
        </div>
        <p className="text-lg font-bold pt-5">
          {data?.attributes?.blog_heading}
        </p>

        <button
          type="button"
          className="transition-opacity text-sm flex gap-x-3 pt-3 opacity-0 font-bold group-hover:opacity-100 text-default-yellow"
        >
          Learn More
          <Image src="/svg/right.svg" height={24} width={24} alt="" />
        </button>
      </div>
    </Link>
  );
};

export default BlogsCard;
