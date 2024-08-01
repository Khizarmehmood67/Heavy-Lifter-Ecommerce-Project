"use client";
import BlogsCard from "@/components/common/blogsCard";
import CommonHeroSection from "@/components/common/hero";
import { blogsData } from "@/components/constants";
import languageSelector from "@/redux/selectors/language";
import Category from "@/utils/actions/category";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const [blogList, setBlogsList] = useState([]);
  const [loading, setLoading] = useState(false);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const { selectlanguage } = useSelector(languageSelector);

  useEffect(() => {
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
    fetchBlogs();
  }, [selectlanguage]);

  const itemsPerPage = 10;
  const offset = currentPage * itemsPerPage;
  const slicedData = blogList?.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(blogList?.length / itemsPerPage);
  const sortArrayById = (array) => {
    return array?.sort((a, b) => b.id - a.id);
  };
  return (
    <div className="pt-24">
      <CommonHeroSection title={"Blogs"} />
      <div className="container-main pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
          {slicedData?.map((item, index) => (
            <div key={index}>
              <BlogsCard data={item} />
            </div>
          ))}
        </div>
        {slicedData?.length > 0 && (
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            previousLabel="Previous"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            containerClassName="pagination"
            activeClassName="active"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            // forcePage={pageOffset}
          />
        )}
      </div>
    </div>
  );
};

export default BlogPage;
