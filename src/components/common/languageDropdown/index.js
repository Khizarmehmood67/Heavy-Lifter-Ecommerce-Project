"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import store from "@/redux/store";
import { setSelectedLanguage } from "@/redux/slices/language";
import { useSelector } from "react-redux";
import languageSelector from "@/redux/selectors/language";

const LanguageDropDown = () => {
  const [selectedLanguage, setSelectedLang] = useState("en");
  const [showLanguage, setLanguageDropdown] = useState(false);
  const { selectlanguage } = useSelector(languageSelector);

  useEffect(() => {
    if (selectlanguage) {
      document.documentElement.setAttribute(
        "dir",
        selectlanguage === "ar" ? "rtl" : "ltr"
      );
    }
  }, [selectlanguage]);

  const toggleDropdown = () => {
    setLanguageDropdown(!showLanguage);
  };

  const handleChangeLanguage = (lang = "en") => {
    setSelectedLang(lang);
    store.dispatch(setSelectedLanguage(lang));
  };

  const language = {
    en: "/usa.svg",
    ar: "/use.svg",
  };

  return (
    <>
      <div className="flex gap-5">
        <div className={showLanguage ? "hidden" : "block"}>
          {selectedLanguage === undefined ? (
            <>
              <button onClick={toggleDropdown} className="p-2">
                <Image
                  src={"/svg/usa.svg"}
                  width="32"
                  height="23"
                  alt="/assets/flag/flag-uk.svg"
                />
              </button>
            </>
          ) : (
            <button onClick={toggleDropdown} className="p-2">
              <Image
                //   src={''}
                src={`/svg/${language[selectedLanguage]}`}
                width="32"
                height="23"
                alt="/assets/flag/flag-uk.svg"
              />
            </button>
          )}
        </div>

        <div
          className={`z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-fit ${
            showLanguage ? "block" : "hidden"
          } realtive -right-6`}
          onClick={toggleDropdown}
        >
          {Object.entries(language)
            .map(([key, value]) => ({ key, value }))
            .map(({ key, value }, a) => (
              <span
                className="flex gap-2 p-2"
                onClick={() => handleChangeLanguage(key)}
                key={a}
              >
                <Image src={`/svg${value}`} width="32" height="23" alt="" />
              </span>
            ))}
        </div>
      </div>
    </>
  );
};

export default LanguageDropDown;
