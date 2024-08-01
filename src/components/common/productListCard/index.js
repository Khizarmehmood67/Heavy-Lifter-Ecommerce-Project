import { LocationIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductListCard = ({ data, key }) => {
  return (
    <Link
      key={key + data?.id}
      href={`/products/${data?.href}`}
      className="group text-sm flex flex-row gap-4"
    >
      <div className="aspect-h-1 aspect-w-1 w-fit overflow-hidden rounded-lg  group-hover:opacity-75">
        <Image
          height={280}
          width={280}
          src={"/images/product700.webp"}
          className="object-cover object-center"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between w-full">
        <div>
          <h3 className="mt-4 text-xl font-bold text-gray-900">
            {" "}
            {data?.attributes?.headingHighlights}
          </h3>
          <p></p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="inline-flex space-x-2 items-center">
            <LocationIcon fill={"#e5ac41"} />
            <span className="font-medium">{data?.attributes?.Location}</span>
          </div>
          <p className="mt-2 font-medium text-gray-900">
            {" "}
            ${data?.attributes?.Price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductListCard;
