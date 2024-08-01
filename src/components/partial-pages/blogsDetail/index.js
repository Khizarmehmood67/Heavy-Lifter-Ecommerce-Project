"use client";
import CommonHeroSection from "@/components/common/hero";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import HPBlogsSection from "../home/blogs";
import Category from "@/utils/actions/category";
import ReactMarkdown from "react-markdown";
import languageSelector from "@/redux/selectors/language";
import { useSelector } from "react-redux";

const BlogsDetailPage = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [value, setvalue] = useState("");
  const [blogList, setBlogsList] = useState([]);
  const { selectlanguage } = useSelector(languageSelector);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        setLoading(true);
        const response = await Category.getSingleBlog({ pid: id });
        setvalue(response?.data?.data?.attributes);
      } catch (e) {
        console.log("error", e);
      } finally {
        setLoading(false);
      }
    };

    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await Category.getBlogs({ locale: selectlanguage });
        var sortedData = sortArrayById(response?.data?.data);
        setBlogsList(sortedData);
      } catch (e) {
        console.log("error", e);
      } finally {
        setLoading(false);
      }
    };

    handleFetch();
    fetchBlogs();
  }, [selectlanguage]);

  const sortArrayById = (array) => {
    return array?.sort((a, b) => b.id - a.id);
  };

  return (
    <div className="pt-24">
      <CommonHeroSection title={value?.blog_heading} />

      {/* <div className="px-5 flex justify-center relative -top-12">
        <Image
          src={"/images/construction.jpg"}
          height={500}
          width={1100}
          alt=""
          className="object-cover "
        />
      </div> */}
      <article class="container-main -mt-16">
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <div>
            <div class="mx-auto max-w-3xl !mb-0 mt-32 lg:mt-40">
              <div class="flex flex-col space-y-5">
                <ReactMarkdown>{value?.blog_description}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </article>

      <HPBlogsSection title={"Latest Blogs"} data={blogList} />
    </div>
  );
};

export default BlogsDetailPage;
