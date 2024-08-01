import { LocationIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductGridCard = ({ data, products, key }) => {
  return (
    <Link
      key={key + data?.id}
      href={`/products/${data?.id}`}
      className="group text-sm"
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
        <Image
          height={280}
          width={280}
          src={"/images/product700.webp"}
          alt={""}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex flex-col items-center transition-transform duration-300 w-full p-4">
        <h3 className="mt-4 font-bold text-lg text-gray-900 text-left">
          {data?.attributes?.headingHighlights}
        </h3>
        <div className="flex py-2 items-center w-full justify-between">
          <div className="inline-flex space-x-2 items-center">
            <LocationIcon fill={"#e5ac41"} />
            <span className="font-medium">{data?.attributes?.Location}</span>
          </div>
          <p className="font-medium text-lg text-right text-gray-900">
            ${data?.attributes?.Price}
          </p>
        </div>
        <button
          type="button"
          className="transition-opacity w-full bg-default-yellow text-center rounded-md text-sm py-2 mt-2 items-center px-4 font-bold text-white group-hover:bg-opacity-80"
        >
          Buy Now
        </button>
      </div>
    </Link>
  );
};

export default ProductGridCard;
