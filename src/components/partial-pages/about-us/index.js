"use client";
import React, { useEffect, useState } from "react";
import AboutUSHeroSection from "./hero";
import SectionOne from "./secion1";
import Section2 from "./section2";
import TeamSection from "./team";
import AboutUsStats from "./stats";
import Category from "@/utils/actions/category";

const AboutUsPage = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [getISData, setISDate] = useState([]);
  const [getFBData, setFBData] = useState([]);
  const [getTeam, setTeanData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await Category.aboutUs();
        setData(response?.data?.data?.attributes);
      } catch (e) {
        console.log("error", e);
      } finally {
        setLoading(false);
      }
    };

    const fetchIndustryService = async () => {
      try {
        setLoading(true);
        const response = await Category.aboutUsFetchComponent({
          name: "IndustriesService",
        });
        setISDate(response?.data?.data?.attributes?.IndustriesService);
      } catch (e) {
        console.log("error", e);
      } finally {
        setLoading(false);
      }
    };

    const fetchStats = async () => {
      try {
        setLoading(true);
        const response = await Category.aboutUsFetchComponent({
          name: "feedback",
        });
        setFBData(response?.data?.data?.attributes?.feedback);
      } catch (e) {
        console.log("error", e);
      } finally {
        setLoading(false);
      }
    };

    const fetchTeam = async () => {
      try {
        setLoading(true);
        const response = await Category.aboutUsFetchComponent({
          name: "OurTeam",
        });
        setTeanData(response?.data?.data?.attributes?.OurTeam);
      } catch (e) {
        console.log("error", e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    fetchIndustryService();
    fetchStats();
    fetchTeam();
  }, []);

  return (
    <div className="pt-24">
      <AboutUSHeroSection data={data} />
      <SectionOne data={data} />
      <Section2 data={data} getISData={getISData} />
      <AboutUsStats data={data} getFBData={getFBData} />
      <TeamSection data={data} getTeam={getTeam} />
    </div>
  );
};

export default AboutUsPage;
