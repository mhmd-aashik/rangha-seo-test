"use client";
import { Check, ChevronDown, ChevronsRight } from "lucide-react";
import React from "react";
import { SelectDMenuR } from "./SelectMenuR";

const pakageDetails = [
  {
    id: 1,
    title: "Basic",
    description: "This is basic package",
    price: 300,
    features: [
      {
        id: 1,
        name: "One wallet",
      },
      {
        id: 2,
        name: "No random orders size",
      },
      {
        id: 3,
        name: "No random delay",
      },
    ],
  },
  {
    id: 2,
    title: "Standard",
    description: "This is Standard package",
    price: 450,
    features: [
      {
        id: 1,
        name: "One walle",
      },
      {
        id: 2,
        name: "Random order size",
      },
      {
        id: 3,
        name: "Random delay",
      },
    ],
  },
  {
    id: 3,
    title: "Advanced",
    description: "This is Advanced package",
    price: 650,
    features: [
      {
        id: 1,
        name: "Multiple wallets ",
      },
      {
        id: 2,
        name: "Random order size",
      },
      {
        id: 3,
        name: "Random delay",
      },
    ],
  },
];

const PackageCard = ({ showtelegram, setShowTelegram }: any) => {
  const handleButtonClick = () => {
    setShowTelegram(false);
  };

  return (
    <>
      <div className={`${showtelegram ? "" : "hidden"}`}>
        <div>
          <h2 className="text-[30px] px-5 font-medium text-white sm:text-[48px]">
            Trending topic of this week
          </h2>
        </div>
        <div
          className={`mx-auto my-3 ml-5 mt-10 max-w-[1150px] gap-5 overflow-hidden  rounded-3xl bg-[#101432] bg-gradient-to-r  from-indigo-500 via-[#FD60F3] to-indigo-500 p-[1px]`}
        >
          <div className="overflow-hidden rounded-3xl bg-[#101432] py-5">
            <div className="px-10">
              <div className="flex items-center justify-between">
                <h2 className="text-xl py-4  font-medium text-white">
                  Volume Bot
                </h2>
                <ChevronsRight className="size-7 text-white" />
              </div>
              <p className="mt-2  text-white py-2">
                Select Your Volume Bot Network
              </p>
              {/* <div className="mt-2 flex justify-between rounded-full border border-[#40E9FD] p-2">
                <p className=" text-gray-600 px-2 text-[16px]">Solana Network</p>
                <ChevronDown className="text-white" />
              </div> */}
              <div className="w-full">
                <SelectDMenuR />
              </div>
              <p className="mt-4 text-white py-2">Select Your Package</p>
            </div>

            <div className="grid gap-10 rounded-3xl bg-[#101432] px-10 py-5 sm:grid-cols-2 md:grid-cols-3">
              {pakageDetails.map((item: any) => (
                <div
                  className="mx-auto flex w-full max-w-7xl flex-col rounded-3xl bg-[#0e1029] shadow-xl outline outline-1 outline-[#40E9FD] ring-1 ring-black/10 dark:bg-gray-950"
                  key={item.id}
                >
                  <div className="px-8 sm:py-8 flex items-start gap-2 flex-col">
                    <h3
                      id="tier-basic"
                      className="text-[22px] font-semibold leading-8 tracking-tight text-white"
                    >
                      {item.title}
                    </h3>
                    <div>
                      <p className=" text-base leading-7 text-white/50">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-baseline text-[24px] tracking-tight text-white">
                      <span> ${item.price} </span>
                      <span className="text-[14px] leading-8 tracking-normal text-gray-500">
                        /(UNLIMITED)
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-2">
                    <div className="flex flex-1 flex-col justify-between rounded-2xl bg-[#0e1029] px-3 dark:bg-gray-900">
                      <ul role="list" className="space-y-6">
                        {item.features.map((feature: any) => (
                          <li className="flex items-start" key={feature.id}>
                            <p className="ml-3 flex items-center gap-2 text-sm leading-6 text-white">
                              <Check className="rounded-full h-4 w-4 bg-blue-800 p-0.5 text-black font-bold" />
                              {feature.name}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="my-5">
                        <p
                          onClick={handleButtonClick}
                          aria-describedby="tier-basic"
                          className="inline-block w-full cursor-pointer px-4 py-2 text-center text-sm font-semibold leading-5 bg-[#5663FA] text-white shadow-md rounded-full hover:bg-indigo-700"
                        >
                          Select
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PackageCard;
