"use client";
import { useSelector } from "react-redux";
import ProductsHeroSection from "./hero";
import ProductMainSection from "./mian-section";
import languageSelector from "@/redux/selectors/language";
import Category from "@/utils/actions/category";
import { useEffect, useState } from "react";

const ProductsPage = () => {
  const { selectlanguage } = useSelector(languageSelector);
  const [productList, setProductList] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleCategoriesList = async () => {
      try {
        setLoading(true);
        const response = await Category.getProducts({ locale: selectlanguage });
        setProductList(response?.data);
      } catch (e) {
        console.log("error", e);
      } finally {
        setLoading(false);
      }
    };
    handleCategoriesList();
  }, [selectlanguage]);

  return (
    <div className="pt-24">
      <ProductsHeroSection />
      <ProductMainSection productList={productList} loading={loading} />
    </div>
  );
};

export default ProductsPage;
