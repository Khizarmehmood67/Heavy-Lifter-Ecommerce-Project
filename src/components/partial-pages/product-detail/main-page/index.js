/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
"use client";

import { Fragment, useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Tab } from "@headlessui/react";
import { cn } from "@/components/lib/utils";
import { products } from "@/components/constants";
import Image from "next/image";
import Category from "@/utils/actions/category";

const product = {
  name: "Application UI Icon Pack",
  version: { name: "1.0", date: "June 5, 2021", datetime: "2021-06-05" },
  price: "$220",
  description:
    "The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.",
  highlights: [
    "200+ SVG icons in 3 unique styles",
    "Compatible with Figma, Sketch, and Adobe XD",
    "Drawn on 24 x 24 pixel grid",
  ],
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-page-05-product-01.jpg",
  imageAlt:
    "Sample of 30 icons with friendly and fun details in outline, filled, and brand color styles.",
};
const reviews = {
  average: 4,
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
      `,
      date: "July 16, 2021",
      datetime: "2021-07-16",
      author: "Emily Selman",
      avatarSrc: "/images/review.webp",
    },
    {
      id: 2,
      rating: 5,
      content: `
        <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
      `,
      date: "July 12, 2021",
      datetime: "2021-07-12",
      author: "Hector Gibbons",
      avatarSrc: "/images/review.webp",
    },
    // More reviews...
  ],
};
// const faqs = [
//   {
//     question: "What format are these icons?",
//     answer:
//       "The icons are in SVG (Scalable Vector Graphic) format. They can be imported into your design tool of choice and used directly in code.",
//   },
//   {
//     question: "Can I use the icons at different sizes?",
//     answer:
//       "Yes. The icons are drawn on a 24 x 24 pixel grid, but the icons can be scaled to different sizes as needed. We don't recommend going smaller than 20 x 20 or larger than 64 x 64 to retain legibility and visual balance.",
//   },
//   // More FAQs...
// ];
// const license = {
//   href: "#",
//   summary:
//     "For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.",
//   content: `
//     <h4>Overview</h4>

//     <p>For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.</p>

//     <ul role="list">
//     <li>You\'re allowed to use the icons in unlimited projects.</li>
//     <li>Attribution is not required to use the icons.</li>
//     </ul>

//     <h4>What you can do with it</h4>

//     <ul role="list">
//     <li>Use them freely in your personal and professional work.</li>
//     <li>Make them your own. Change the colors to suit your project or brand.</li>
//     </ul>

//     <h4>What you can\'t do with it</h4>

//     <ul role="list">
//     <li>Don\'t be greedy. Selling or distributing these icons in their original or modified state is prohibited.</li>
//     <li>Don\'t be evil. These icons cannot be used on websites or applications that promote illegal or immoral beliefs or activities.</li>
//     </ul>
//   `,
// };

export default function ProductOverview({ id }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [getproduct, setProduct] = useState("");
  const [customerReview, setCustomerReview] = useState("");
  const [license, setLicense] = useState("");
  const [faqs, setFaqs] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleCategoriesList = async () => {
      try {
        setLoading(true);
        const response = await Category.getSingleProducts({ pid: id });
        setProduct(response?.data?.data);
      } catch (e) {
        console.log("error", e);
      } finally {
        setLoading(false);
      }
    };

    const handleCustomerReview = async () => {
      try {
        setLoading(true);
        const response = await Category.getCustomerReview({ pid: id });
        setCustomerReview(response?.data?.data?.attributes);
      } catch (e) {
        console.log("error", e);
      } finally {
        setLoading(false);
      }
    };
    const handleFaqs = async () => {
      try {
        setLoading(true);
        const response = await Category.getSingleProductFaq({ pid: id });
        setFaqs(response?.data?.data?.attributes);
      } catch (e) {
        console.log("error", e);
      } finally {
        setLoading(false);
      }
    };

    const handleLicence = async () => {
      try {
        setLoading(true);
        const response = await Category.getLicense({ pid: id });
        setLicense(response?.data?.data?.attributes);
      } catch (e) {
        console.log("error", e);
      } finally {
        setLoading(false);
      }
    };
    handleCustomerReview();
    handleCategoriesList();
    handleFaqs();
    handleLicence();
  }, []);

  useEffect(() => {
    const findProductById = (productId) => {
      return products.find((product) => product.id === productId);
    };

    const product = findProductById(id);
    setSelectedProduct(product);
  }, [id]);
  return (
    <div className="bg-white">
      <div className="container-main py-16 ">
        {/* Product */}
        <div className="lg:grid lg:grid-cols-7 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
          {/* Product image */}
          <div className="lg:col-span-4 lg:row-end-1">
            <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={selectedProduct?.imageSrc}
                alt={selectedProduct?.imageAlt}
                height={685.7}
                width={685.7}
                className="object-cover object-center transform hover:scale-125 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Product details */}
          <div className="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none">
            <div className="flex flex-col-reverse">
              <div className="mt-4">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {getproduct?.attributes?.headingHighlights}
                </h1>

                <h2 id="information-heading" className="sr-only">
                  Product information
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Version {getproduct?.attributes?.headingHighlights}
                  {/* (Updated{" "}
                  <time dateTime={product.version.datetime}>
                    {product.version.date}
                  </time> */}
                </p>
              </div>

              <div>
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={cn(
                        reviews.average > rating
                          ? "text-yellow-400"
                          : "text-gray-300",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
              </div>
            </div>

            <p className="mt-6 text-gray-500">{product.description}</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <button
                type="button"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-default-yellow px-8 py-3 text-base font-medium text-white hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-default-yellow focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Pay Now
              </button>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
              <div className="prose prose-sm mt-4 text-gray-500">
                {getproduct?.attributes?.highlights ?? "N/A"}
                {/* <ul role="list">
                  {product.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul> */}
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h3 className="text-sm font-medium text-gray-900">License</h3>
              <p className="mt-4 text-sm text-gray-500">
                {license?.Overview}{" "}
                <a
                  href={"#"}
                  className="font-medium text-default-yellow hover:text-indigo-500"
                >
                  Read full license
                </a>
              </p>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h3 className="text-sm font-medium text-gray-900">Share</h3>
              <ul role="list" className="mt-4 flex items-center space-x-6">
                <li>
                  <a
                    href="#"
                    className="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Share on Facebook</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Share on Instagram</span>
                    <svg
                      className="h-6 w-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex h-6 w-6 items-center justify-center text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Share on X</span>
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-16 w-full max-w-2xl lg:col-span-4 lg:mt-0 lg:max-w-none">
            <Tab.Group as="div">
              <div className="border-b border-gray-200">
                <Tab.List className="-mb-px flex space-x-8">
                  <Tab
                    className={({ selected }) =>
                      cn(
                        selected
                          ? "border-default-yellow text-default-yellow"
                          : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800",
                        "whitespace-nowrap border-b-2 py-6 text-sm font-medium"
                      )
                    }
                  >
                    Customer Reviews
                  </Tab>
                  <Tab
                    className={({ selected }) =>
                      cn(
                        selected
                          ? "border-default-yellow text-default-yellow"
                          : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800",
                        "whitespace-nowrap border-b-2 py-6 text-sm font-medium"
                      )
                    }
                  >
                    FAQ
                  </Tab>
                  {/* <Tab
                    className={({ selected }) =>
                      cn(
                        selected
                          ? "border-default-yellow text-default-yellow"
                          : "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-800",
                        "whitespace-nowrap border-b-2 py-6 text-sm font-medium"
                      )
                    }
                  >
                    License
                  </Tab> */}
                </Tab.List>
              </div>
              <Tab.Panels as={Fragment}>
                <Tab.Panel className="-mb-10">
                  <h3 className="sr-only">Customer Reviews</h3>

                  <div className="flex space-x-4 text-sm text-gray-500">
                    <div className="flex-none py-10 rounded-full">
                      <Image
                        src={"/images/review.webp"}
                        alt="image"
                        height={40}
                        width={40}
                        className="rounded-full"
                      />
                    </div>
                    <div
                      className={cn(
                        // reviewIdx === 0 ? "" : "border-t border-gray-200",
                        "py-10"
                      )}
                    >
                      <h3 className="font-medium text-gray-900">
                        {customerReview?.custName}
                      </h3>
                      <p>
                        <time>{customerReview?.custName}</time>
                      </p>

                      <div className="mt-4 flex items-center gap-1">
                        {Array.from({ length: customerReview?.custRating }).map(
                          (_, index) => (
                            <StarIcon
                              key={index}
                              className={cn(
                                _ > index
                                  ? "text-yellow-400"
                                  : "text-yellow-400",
                                "h-5 w-5 flex-shrink-0"
                              )}
                              aria-hidden="true"
                            />
                          )
                        )}
                        <p className="sr-only">
                          {customerReview?.custRating} out of 5 stars
                        </p>
                      </div>

                      <div
                        className="prose prose-sm mt-4 max-w-none text-gray-500"
                        dangerouslySetInnerHTML={{
                          __html: customerReview?.custDescription,
                        }}
                      />
                    </div>
                  </div>
                </Tab.Panel>

                <Tab.Panel className="text-sm text-gray-500">
                  <h3 className="sr-only">Frequently Asked Questions</h3>

                  <dl>
                    {/* {faqs.map((faq) => ( */}
                    <Fragment>
                      <dt className="mt-10 font-medium text-gray-900">
                        {faqs?.question ? `Question: ${faqs?.question}` : ""}
                      </dt>
                      <dd className="prose prose-sm mt-2 max-w-none text-gray-500">
                        <p>{faqs?.answer ? `Answer: ${faqs?.answer}` : ""}</p>
                      </dd>
                    </Fragment>
                    {/* ))} */}
                  </dl>
                </Tab.Panel>

                <Tab.Panel className="pt-10">
                  <h3 className="sr-only">License</h3>

                  <div
                    className="prose prose-sm max-w-none text-gray-500"
                    dangerouslySetInnerHTML={{ __html: license.content }}
                  />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
}
