"use client";
import Category from "@/utils/actions/category";
import CONFIG from "@/utils/config";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactUsPage() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (dataa) => {
    // Handle form submission logic here
    try {
      const response = await fetch(
        "https://cms.soormachinery.com/api/contact-uses",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              ...dataa,
            },
          }),
        }
      );
      const responseData = await response.json();
      setShowSuccessMessage(true); // Show success message
      reset(); // Reset form fields
      setTimeout(() => {
        setShowSuccessMessage(false); // Hide success message after 3 seconds
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="relative bg-white pt-24">
      <div className="pb-10 sm:pb-20 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              {`Let's work together`}
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Proin volutpat consequat porttitor cras nullam gravida at orci
              molestie a eu arcu sed ut tincidunt magna.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-16">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    First name*
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      autoComplete="given-name"
                      required
                      {...register("first_name", { required: true })}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-default-yellow sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Last name*
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      required
                      {...register("last_name", { required: true })}
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-default-yellow sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email*
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      {...register("email", { required: true })}
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-default-yellow sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Company*
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      required
                      {...register("company", { required: true })}
                      autoComplete="organization"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-default-yellow sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm leading-6">
                    <label
                      htmlFor="phone"
                      className="block font-semibold text-gray-900"
                    >
                      Phone*
                    </label>
                    <p id="phone-description" className="text-gray-400">
                      Optional
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      {...register("phone", { required: true })}
                      autoComplete="tel"
                      required
                      aria-describedby="phone-description"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-default-yellow sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm leading-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      How can we help you?*
                    </label>
                    <p id="message-description" className="text-gray-400">
                      Max 500 characters
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      {...register("notes", { required: true })}
                      aria-describedby="message-description"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-default-yellow sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                <button
                  type="submit"
                  className="rounded-md bg-default-yellow px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-opacity-80 focus-visible:outline-indigo-600"
                >
                  Send message
                </button>
              </div>
            </form>
            {showSuccessMessage && (
              <div className="bg-green-100 text-green-800 p-4 rounded-md my-4">
                Your message has been sent successfully.
              </div>
            )}
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            src="/images/contact.webp"
            height={900}
            width={600}
            className="object-cover rounded-lg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
