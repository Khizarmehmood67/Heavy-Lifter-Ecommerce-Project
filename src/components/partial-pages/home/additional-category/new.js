"use client";
import { FadeIn, FadeInStagger } from "@/components/common/animation";
import { filterCategories } from "@/components/constants";
import React, { useState } from "react";
import { FaTruck, FaTruckLoading } from "react-icons/fa";
import { FaTruckRampBox, FaTruckFront } from "react-icons/fa6";

const CategoryNewDesign = () => {
  const [activeTab, setActiveTab] = useState("Construction Equipment"); // Set default active tab
  const icons = [FaTruckRampBox, FaTruckLoading, FaTruck, FaTruckFront];

  return (
    <FadeInStagger className="container-main pb-10">
      <FadeIn>
        <p className="text-[42px] font-bold text-dark-grey text-center">
          Additional Category
        </p>
      </FadeIn>
      <FadeIn className="flex flex-col gap-5 pt-5 bg-white rounded-lg mt-4">
        <div className="flex flex-row items-start w-full space-x-1 bg-white">
          {/* Render tabs */}
          {filterCategories.map((category, index) => {
            const Icon = icons[index];
            return (
              <button
                key={index}
                className={`w-fit py-2 px-3 text-left transition-transform duration-300 ease-in-out hover:scale-105 inline-flex items-center gap-x-3 ${
                  activeTab === category.categoryName
                    ? "text-default-yellow border-b border-default-yellow font-semibold text-sm pb-1"
                    : "text-gray-dark font-semibold text-sm pb-1"
                }`}
                onClick={() => setActiveTab(category.categoryName)}
              >
                <Icon />
                {category.categoryName}
              </button>
            );
          })}
        </div>

        <div className="w-full bg-white shadow-sm px-4 pb-5 min-h-48">
          {/* Render subcategories based on active tab */}
          {filterCategories.map((category, index) => (
            <div key={index} className="flex flex-wrap gap-2">
              {activeTab === category.categoryName &&
                category.subcategories
                  .filter((subcategory) => subcategory.trim() !== "") // Filter out empty subcategories
                  .map((subcategory, idx) => (
                    <div
                      key={idx}
                      className="p-2 w-fit rounded-md bg-default-yellow h-fit text-sm font-semibold"
                    >
                      {subcategory}
                    </div>
                  ))}
            </div>
          ))}
        </div>
      </FadeIn>
    </FadeInStagger>
  );
};

export default CategoryNewDesign;
