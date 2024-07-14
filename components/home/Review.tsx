"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import ReviewCard from "./ReviewCard";

const tempReviews = [
  {
    _id: 1,
    name: "Jane Cooper",
    natinality: "Iceland",
    numStars: 5,
    review:
      "Absolutely brilliant work, knows his stuff very II great gig will be back. Absolutely brilliant work, knows his stuff very II great gig will be back",
    img: "https://img.freepik.com/free-photo/crazy-man-funny-expression_1194-3132.jpg?size=626&ext=jpg",
    audio: "/assets/audio/reviewaudio.mp3",
  },
  {
    _id: 2,
    name: "Marvin McKinney",
    numStars: 4,
    natinality: "Iran (Islamic Republic of)",
    review:
      "Absolutely brilliant work, knows his stuff very II great gig will be back. Absolutely brilliant work, knows his stuff very II great gig will be back",
    img: "https://img.freepik.com/free-photo/young-handsome-guy-wearing-checkered-shirt-looking-loss-standing-khaki-wall_141793-30761.jpg?size=626&ext=jpg",
    audio: "/assets/audio/reviewaudio.mp3",
  },
  {
    _id: 3,
    name: "Floyd Miles",
    numStars: 3,
    natinality: "Guinea",
    review:
      "Absolutely brilliant work, knows his stuff very II great gig will be back. Absolutely brilliant work, knows his stuff very II great gig will be back",
    img: "https://img.freepik.com/free-photo/young-bearded-man-black-shirt-looking-aside-confused_141793-28314.jpg?size=626&ext=jpg",
    audio: "/assets/audio/reviewaudio.mp3",
  },
  {
    _id: 4,
    name: "Marvin McKinney",
    numStars: 2,
    natinality: "Iran (Islamic Republic of)",
    review:
      "Absolutely brilliant work, knows his stuff very II great gig will be back. Absolutely brilliant work, knows his stuff very II great gig will be back",
    img: "https://img.freepik.com/free-photo/young-handsome-guy-wearing-checkered-shirt-looking-loss-standing-khaki-wall_141793-30761.jpg?size=626&ext=jpg",
    audio: "/assets/audio/reviewaudio.mp3",
  },
  {
    _id: 5,
    name: "Marvin McKinney",
    numStars: 3,
    natinality: "Iran (Islamic Republic of)",
    review:
      "Absolutely brilliant work, knows his stuff very II great gig will be back. Absolutely brilliant work, knows his stuff very II great gig will be back",
    img: "https://img.freepik.com/free-photo/young-handsome-guy-wearing-checkered-shirt-looking-loss-standing-khaki-wall_141793-30761.jpg?size=626&ext=jpg",
    audio: "/assets/audio/reviewaudio.mp3",
  },
];

const Review = ({ ratings }: any) => {
  const datas = ratings.data.data;

  const plugin = React.useRef(Autoplay({ delay: 2000 }));

  return (
    <>
      <section className="relative mx-auto max-w-[1150px] px-5 pt-10 text-white">
        <h2 className="text-[30px] font-medium text-white sm:text-[48px]">
          Description of the Image
        </h2>
        <p className="text-left text-[22px] font-light text-white sm:text-[32px]">
          What Our Clients Say
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="z-40 mx-auto w-full lg:grid-cols-3">
            {datas.map((data: any) => (
              <CarouselItem
                key={data.id}
                className="z-50 pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <ReviewCard {...data} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="relative hidden h-12 items-center justify-center sm:flex">
            <CarouselPrevious className="absolute left-[46%] border-white hover:bg-[#332E32] text-white" />
            <CarouselNext className="absolute right-[46%] border-white hover:bg-[#332E32] text-white" />
          </div>
        </Carousel>
      </section>
    </>
  );
};

export default Review;
