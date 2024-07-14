"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PackageCard from "./PackageCard";
import BannerWallet from "./BannerWallet";
import BlogTeleg from "./BlogTeleg";
import ReciptBlog from "./ReciptBlog";
import Markdown from "react-markdown";

interface BlogBannerProps {
  id: string;
  title: string;
  description: any;
  desktopView: string;
}

const BlogBanner = ({
  id,
  title,
  description,
  desktopView,
}: BlogBannerProps) => {
  const [blogdata, setBlogData] = useState(true);
  const [showtelegram, setShowTelegram] = useState(true);
  const [showForm, setShowForm] = useState(true);
  const [showrecipt, setShowRecipt] = useState(true);

  const myRef = useRef<HTMLDivElement>(null);

  const imageData = (desktopView as any)?.data?.attributes?.formats;
  const imageUrl = imageData?.large?.url;

  const truncateDescription =
    description.length > 600 ? description.slice(0, 600) + "..." : description;

  const handleButtonClick = () => {
    setBlogData(false);

    myRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className={`${blogdata ? "" : "hidden"}`} ref={myRef}>
        <div className="mx-auto max-w-[1150px] px-5">
          <h2 className="text-[30px] font-medium text-white sm:text-[48px]">
            Trending topic of this week
          </h2>
        </div>
      </div>
      {blogdata && (
        <div
          className={`mx-5 mt-10 max-w-[1150px] gap-5 rounded-3xl bg-gradient-to-r from-[#C946FB]  via-[#C946FB] to-[#6161FB] p-[1px] ${
            blogdata ? "" : "hidden"
          }`}
        >
          <div className="overflow-hidden rounded-3xl bg-black">
            <Image
              src={`http://92.205.233.9:1338${imageUrl}`}
              alt={`${title}`}
              width={1700}
              height={700}
              className="max-h-[440px] rounded-t-3xl bg-center object-cover"
            />
            <div className="p-8">
              <div>
                <h2 className="pb-8 font-bold text-[#5663FA] sm:text-[20px]">
                  {title}
                </h2>
                <div className=" max-h-[800px] overflow-auto text-[18px] font-[300] text-white">
                  <Markdown>{truncateDescription}</Markdown>
                </div>
              </div>
              <div className="mt-10 flex items-center justify-between">
                <Link
                  href={`/trendblog/${id}`}
                  className="text-[16px] font-medium text-[#5663FA] hover:text-[#D243FA] active:text-[#B529DC]"
                >
                  Read More
                </Link>
                <Button
                  className="h-10 w-[140px] rounded-full bg-[#5663FA] hover:bg-[#D243FA] text-white active:bg-[#B529DC]"
                  onClick={handleButtonClick}
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {!blogdata && (
        <PackageCard
          setShowTelegram={setShowTelegram}
          showtelegram={showtelegram}
        />
      )}
      {!showtelegram && (
        <BlogTeleg setShowForm={setShowForm} showForm={showForm} />
      )}

      {!showForm && (
        <BannerWallet setShowRecipt={setShowRecipt} showrecipt={showrecipt} />
      )}

      {!showrecipt && <ReciptBlog />}
    </>
  );
};

export default BlogBanner;
