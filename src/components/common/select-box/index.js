import React, { useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";

const SelectBox = ({ data, setSelected, selected, placeholder }) => {
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? data
      : data.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <>
      <div className="w-full">
        <Combobox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <div className="relative w-full cursor-default rounded-md overflow-hidden border border-davy-grey bg-smoky-black text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <Combobox.Input
                className="w-full !py-[14px] pl-3 pr-10 rounded-md text-sm leading-5 text-cgray-400 focus:ring-0 bg-smoky-black"
                displayValue={(person) => person.name || ""}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={placeholder}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <>
                  <Image
                    src="/svg/chevron-down.svg"
                    height={20}
                    width={20}
                    alt="downarrow"
                  />
                </>
              </Combobox.Button>
            </div>
            <Transition
              as={React.Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute bg-white mt-1 max-h-60 w-full overflow-auto rounded-md bg-smoky-black  py-1 text-base shadow-lg z-50 ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {filteredPeople.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredPeople.map((person) => (
                    <Combobox.Option
                      key={person.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? "bg-default-yellow text-white"
                            : "text-cgray-400"
                        }`
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`truncate flex items-center gap-x-3 ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person.image && (
                              <Image
                                src={person.image}
                                height={32}
                                width={32}
                                alt="person"
                              />
                            )}
                            {person.name}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-teal-600"
                              }`}
                            >
                              {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    </>
  );
};

export default SelectBox;
