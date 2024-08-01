"use client";
import {
  ClockIcon,
  EnvelopIcon,
  LocationIcon,
  PhoneIcon,
} from "@/components/icons";
import languageSelector from "@/redux/selectors/language";
import Category from "@/utils/actions/category";
import CONFIG from "@/utils/config";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const solutions = [
  { name: "Products", href: "/products" },
  { name: "Blog", href: "/blog" },
  { name: "About Us", href: "about-us" },
  { name: "Contact Us", href: "/contact" },
];

const posts = [
  {
    title: "Best Practices of HR management",
    date: "28/08/2019",
    href: "",
  },
  {
    title: "10 Tips to Find Best Backhoe",
    date: "28/08/2019",
    href: "",
  },
  {
    title: "How to Setup a Construction Site",
    date: "28/08/2019",
    href: "",
  },
];
const d = new Date();
export default function Footer({}) {
  const [loading, setLoading] = useState(false);
  const [blogList, setBlogsList] = useState([]);
  const { selectlanguage } = useSelector(languageSelector);

  const [getData, setData] = useState("");
  useEffect(() => {
    const FetchData = async () => {
      try {
        setLoading(true);
        const response = await Category.getHeaderFooterInfo();
        setData(response?.data?.data?.attributes);
      } catch (e) {
        console.log("error", e);
      } finally {
        setLoading(false);
      }
    };
    FetchData();
  }, []);

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

  const sortArrayById = (array) => {
    return array?.sort((a, b) => b.id - a.id);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()}`;
  };
  const contact = [
    {
      icon: LocationIcon,
      desc: `Address: ${getData?.address}`,
    },
    {
      icon: PhoneIcon,
      desc: getData?.support,
    },
    { icon: ClockIcon, desc: getData?.work_time },
    {
      icon: EnvelopIcon,
      desc: getData?.email,
    },
  ];

  const navLinks = [
    {
      href: "/",
      name: getData?.HeaderTab?.length > 0 && getData?.HeaderTab[0]?.Home,
    },
    {
      href: "/products",
      name: getData?.HeaderTab?.length > 0 && getData?.HeaderTab[0]?.Products,
    },
    {
      href: "/blogs",
      name: getData?.HeaderTab?.length > 0 && getData?.HeaderTab[0]?.Blogs,
    },
    {
      href: "/about-us",
      name: getData?.HeaderTab?.length > 0 && getData?.HeaderTab[0]?.About_us,
    },
    {
      href: "/contact",
      name: getData?.HeaderTab?.length > 0 && getData?.HeaderTab[0]?.Contact_us,
    },
  ];
  return (
    <footer className="bg-black" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="pb-8 pt-16 sm:pt-10 container-main lg:pt-20">
        <div className="grid sm:grid-cols-2 xl:flex xl:flex-row justify-between gap-6 md:gap-12">
          <div className="max-w-[305px]">
            <p className="text-2xl text-white font-bold">About Company</p>
            <Image
              src={`${CONFIG.BASE_URL}${getData?.footer_image?.data?.attributes?.url}`}
              // src={"/images/White-Wide-Logo.png"}
              alt="company logo"
              height={129}
              width={305}
              className="object-cover relative -left-8"
              unoptimized
            />

            <p className="text-sm leading-6 text-gray-300">
              {getData?.footer_description}
            </p>
          </div>
          <div className="grid gap-8 xl:mt-0">
            <div>
              <h3 className="text-2xl font-semibold leading-6 text-white">
                Information
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navLinks.map((item, index) => (
                  <li key={index} className="text-white/70 ">
                    <Link
                      href={item.href}
                      className="text-sm leading-6 inline-flex flex-row items-center gap-x-1.5 text-gray-300 hover:text-white"
                    >
                      {/* <Image
                        src="/svg/chevron-right.svg"
                        alt="right"
                        width={16}
                        height={16}
                        className="text-white"
                      /> */}
                      <span className="hover-effect"> {item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 md:mt-0 max-w-[220px]">
            <h3 className="text-2xl font-semibold leading-6 text-white">
              Contant Info
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              {contact.map((item, index) => (
                <li key={index}>
                  <div className="text-sm leading-6 flex space-x-3 text-gray-300 hover:text-white">
                    <span>
                      <item.icon
                        fill={"#e5ac41"}
                        className="size-6 stroke-default-yellow"
                      />
                    </span>
                    {index === 3 ? (
                      <a
                        href={`mailto:${item?.desc}`}
                        className="text-default-yellow"
                      >
                        Email: {item?.desc}
                      </a>
                    ) : (
                      <span>{item?.desc}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-2xl font-semibold leading-6 text-white">
              Recent Post
            </h3>
            <ul role="list" className="mt-6 space-y-4 divide-y divide-white/20">
              {blogList?.slice(0, 3)?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={`/blogs/${item?.id}`}
                    className="text-sm leading-6 pt-2 text-gray-300 hover:text-default-yellow flex flex-col"
                  >
                    <span>{item?.attributes?.blog_heading}</span>
                    <span>{formatDate(item?.attributes?.createdAt)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-5 md:mt-16 border-t border-white/10 pt-8 sm:mt-12">
          <p className="text-xs leading-5 text-white text-center">
            &copy; {d.getFullYear()}{" "}
            {`Soor Machinery, LLC. All rights reserved.
            Powered By: DM Xposure`}
          </p>
        </div>
      </div>
    </footer>
  );
}
