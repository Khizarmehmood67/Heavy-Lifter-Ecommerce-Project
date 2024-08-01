"use client";
import React, { useEffect, useState } from "react";
import HPHeroSection from "./hero";
import HPBlogsSection from "./blogs";
import HPBenefits from "./benefits";
import HPSLiderSection from "./slider";
import HPAdditionalCategory from "./additional-category";
import Category from "@/utils/actions/category";
import CategoryNewDesign from "./additional-category/new";
import { useSelector } from "react-redux";
import languageSelector from "@/redux/selectors/language";

const HomePage = () => {
  const [features, setFeatures] = useState([]);
  const [categoryList, setCategoryList] = useState("");
  const [additionalCategory, setAdditionalCategory] = useState("");
  const [brandList, setBrandList] = useState("");
  const [blogList, setBlogsList] = useState([]);
  const [loading, setLoading] = useState(false);

  const { selectlanguage } = useSelector(languageSelector);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await Category.getCategories({
          locale: selectlanguage,
        });
        setCategoryList(response?.data);
      } catch (e) {
        console.log("error", e);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, [selectlanguage]);

  useEffect(() => {
    // Fetch Additional Categories
    const fetchAddCategories = async () => {
      try {
        setLoading(true);
        const response = await Category.additionalCategories({
          locale: selectlanguage,
        });
        setAdditionalCategory(response?.data);
      } catch (e) {
        console.log("error", e);
      } finally {
        setLoading(false);
      }
    };
    // Fetch Features Section
    const fetchFeatures = async () => {
      try {
        setLoading(true);
        const response = await Category.getFeatures({ locale: selectlanguage });
        setFeatures(response?.data?.data);
      } catch (e) {
        console.log("error", e);
      } finally {
        setLoading(false);
      }
    };
    // Fetch Brands
    const fetchBrands = async () => {
      try {
        setLoading(true);
        const response = await Category.getBrandList();
        setBrandList(response?.data);
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

    fetchAddCategories();
    fetchFeatures();
    fetchBrands();
    fetchBlogs();
  }, [selectlanguage]);

  const sortArrayById = (array) => {
    return array?.sort((a, b) => b.id - a.id);
  };

  return (
    <div className="pt-24">
      <HPHeroSection categoryList={categoryList} loading={loading} />
      <div className="py-16 pb-24 bg-gray-100">
        <HPAdditionalCategory
          additionalCategory={additionalCategory}
          loading={loading}
        />
        {/* <CategoryNewDesign /> */}
        <HPSLiderSection brandList={brandList} />
        <HPBenefits data={features} loading={loading} />
      </div>
      <HPBlogsSection data={blogList} />
    </div>
  );
};

export default HomePage;
