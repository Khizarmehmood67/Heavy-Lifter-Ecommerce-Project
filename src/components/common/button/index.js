import Link from "next/link";
import React from "react";

const CommonButton = ({ text, href, className, onClick }) => {
  return (
    <Link
      href={href}
      className={`text-sm font-semibold rounded-md text-center pt-3 leading-6 text-white bg-default-yellow hover:bg-opacity-80 px-6 w-fit py-3 ${className}`}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default CommonButton;
