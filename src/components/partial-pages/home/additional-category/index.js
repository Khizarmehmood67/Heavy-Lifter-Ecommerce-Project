"use client";
import { FadeIn, FadeInStagger } from "@/components/common/animation";
import { categoryList } from "@/components/constants";
import { cn } from "@/components/lib/utils";
import React, { useEffect, useState } from "react";
import { FaTruck, FaTruckLoading } from "react-icons/fa";
import { FaTruckRampBox, FaTruckFront } from "react-icons/fa6";

const HPAdditionalCategory = ({ additionalCategory, loading }) => {
  const tabs = [
    {
      id: 1,
      name: "Construction Equipment",
    },
    {
      id: 2,
      name: "Trucks & Trailers",
    },
    {
      id: 3,
      name: "RVS",
    },
    {
      id: 4,
      name: "Farm Equipment",
    },
  ];
  const [activeTab, setActiveTab] = useState("Construction Equipment"); // Specify the type for activeTab
  const handleTabChange = (tabName) => {
    // Specify the type for tabName
    setActiveTab(tabName.name);
  };

  const icons = [FaTruckRampBox, FaTruckLoading, FaTruck, FaTruckFront];
  return (
    <FadeInStagger className="container-main pb-10">
      <FadeIn>
        <p className="text-[42px] font-bold text-dark-grey text-center">
          Additional Category
        </p>
      </FadeIn>

      <FadeIn className="flex flex-col md:flex-row gap-5 pt-5">
        <div className="flex flex-col items-start gap-4 w-full md:w-1/4">
          {tabs.map((item, index) => {
            const Icon = icons[index];
            return (
              <button
                key={index}
                className={cn(
                  activeTab === item?.name
                    ? "text-default-yellow font-semibold text-sm pb-1"
                    : "text-gray-dark font-semibold text-sm  pb-1",
                  "w-full py-2 px-3 bg-white shadow-md text-left transition-transform duration-300 ease-in-out rounded-lg hover:scale-105 inline-flex items-center gap-x-3"
                )}
                onClick={() => handleTabChange(item)}
              >
                <Icon />
                {item?.name}
              </button>
            );
          })}
        </div>
        <div className="w-full md:w-3/4 bg-white shadow-md p-5 rounded-lg">
          <p className="text-xl font-bold text-dark-grey">{activeTab}</p>

          {additionalCategory?.data?.map((category, index) => {
            return (
              <div key={index} className="flex flex-wrap gap-2">
                {tabs[index]?.name === activeTab &&
                category?.attributes?.sub_additional_cats?.data?.length > 0 ? (
                  category?.attributes?.sub_additional_cats?.data?.map(
                    (subcategory, idx) => (
                      <div
                        key={idx}
                        className="p-2 w-fit rounded-md bg-default-yellow h-fit text-sm font-semibold"
                      >
                        {subcategory?.attributes?.type}
                      </div>
                    )
                  )
                ) : (
                  <>
                    {tabs[index]?.name === activeTab &&
                      category?.attributes?.sub_additional_cats?.data && (
                        <p>No Record Found</p>
                      )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </FadeIn>
    </FadeInStagger>
  );
};

export default HPAdditionalCategory;
