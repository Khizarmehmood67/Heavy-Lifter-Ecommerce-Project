import Link from "next/link";
import React from "react";

const CommonButton = ({ text, href, className, onClick }) => {
  return (
    <Link
      href={href}
      className={`text-sm font-semibold text-center rounded-lg leading-6 text-black bg-default-yellow hover:bg-opacity-80 px-6 ${className}`}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default CommonButton;
