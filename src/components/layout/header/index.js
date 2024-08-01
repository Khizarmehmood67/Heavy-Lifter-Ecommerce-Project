"use client";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import CONFIG from "@/utils/config";
import LogoSkelton from "@/components/common/logoSkelton";
import LanguageDropDown from "@/components/common/languageDropdown";
import Category from "@/utils/actions/category";

export default function Header({}) {
  // const [position, setPosition] = useState();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [getData, setData] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const FetchData = async () => {
      try {
        setLoading(true);
        const response = await Category.getHeaderFooterInfo();
        const menu = await Category.getMenuInfo();
        setMenu(menu?.data?.data?.attributes?.Menu)
        setData(response?.data?.data?.attributes);
          const phoneNumber = response?.data?.data?.attributes?.Header_cell_no;
          removeSpacesAndPlusSign(phoneNumber);
        
      } catch (e) {
        console.log("error", e);
      } finally {
        setLoading(false);
      }
    };
    FetchData();
  }, []);
  // const [visible, setVisible] = useState(true);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     let moving = window.pageYOffset;

  //     setVisible(position > moving);
  //     setPosition(moving);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });

  // const cls = visible ? "visible" : "hidden";

  const removeSpacesAndPlusSign = (input) => {
    // Remove spaces and plus signs from the input string
    setPhoneNo(input?.replace(/[\s\+]/g, ""));
  }
  

  return (
    <div className={`bg-seashell z-20 w-full top-0 transo sticky`}>
      <nav
        className={`flex container-main items-center justify-between `}
        aria-label="Global"
      >
        <div className="flex gap-4">
          <Link href="/" className="p-1.5">
            <span className="sr-only">Your Company</span>
            {loading ? (
              <LogoSkelton count={1} />
            ) : (
              <Image
                height={86}
                width={209}
                className="object-cover h-[86px] relative -left-6"
                // src="/images/Wide-Logo.png"
                src={`${CONFIG.BASE_URL}${getData?.header_image?.data?.attributes?.url}`}
                alt="logo"
                unoptimized
              />
            )}
          </Link>
        </div>
        {!mobileMenuOpen && (
          <div className="flex items-center space-x-4 lg:hidden">
            <div className="size-6">
              {phoneNo && (
                <Link
                  href={`https://api.whatsapp.com/send?phone=${phoneNo}`}
                  target="_blank"
                >
                  <img src={"/svg/whatsapp.svg"} className="size-6" alt="" />
                </Link>
              )}
            </div>
            <LanguageDropDown />
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 text-black" aria-hidden="true" />
            </button>
          </div>
        )}
        <div className="hidden relative lg:flex lg:gap-x-12 w-fit">
          {menu?.map((item, index) => (
            <Link
              key={index}
              href={item?.Link || "" || ""}
              className="text-base hover-effect font-semibold leading-6 text-dark-grey "
            >
              {item?.Name}
            </Link>
          ))}
        </div>

        <div className="hidden text-white lg:flex  items-center gap-x-4 lg:justify-end ">
          {/* <Image
            src={"/svg/shopping-cart.svg"}
            alt="shopping-cart"
            height={24}
            width={25}
          /> */}
          {/* <CommonButton
            href={"/contact"}
            className={"py-3 w-fit"}
            text={"Request a call"}
          /> */}
          <div className="flex justify-center items-center">
            <div className="size-6">
              {phoneNo && (
                <Link
                  href={`https://api.whatsapp.com/send?phone=${phoneNo}`}
                  target="_blank"
                >
                  <img
                    src={"/svg/whatsapp.svg"}
                    className="size-6"
                    // height={40}
                    // width={40}
                    alt=""
                  />
                </Link>
              )}
            </div>
            {/* {loading ? (
              <div className="animate-pulse flex flex-col space-4">
                <div className="flex-1 space-y-6 py-1 mt-3">
                  <div className="h-2 bg-gray-400 rounded w-full"></div>
                </div>
              </div>
            ) : (
              <a
                href={`https://api.whatsapp.com/send?phone=${cleanedPhoneNumber}`}
                target="_blank"
                className="text-default-yellow text-sm md:text-lg font-semibold"
              >
                {getData?.Header_cell_no}
              </a>
            )} */}
          </div>
          <LanguageDropDown />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-30" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-seashell px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Image
              height={86}
              width={209}
              className="object-cover h-[86px] relative -left-6"
              // src="/images/Wide-Logo.png"
              src={`${CONFIG.BASE_URL}${getData?.header_image?.data?.attributes?.url}`}
              alt="logo"
              unoptimized
            />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">X</span>
              <XMarkIcon className="h-6 w-6 text-black" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-10 flow-root text-white">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2">
                {menu.map((item, index) => (
                  <Link
                    key={index}
                    href={item?.Link || ""}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-black hover:bg-gray-50 "
                  >
                    {item?.Name}
                  </Link>
                ))}
              </div>
              {/* <div className="py-6">
                <CommonButton
                  href={"/contact"}
                  text={"Request a call"}
                  onClick={() => setMobileMenuOpen(false)}
                  className={"w-full py-3"}
                />
              </div> */}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
