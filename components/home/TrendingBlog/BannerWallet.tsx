"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";
import { telegramFormSchema } from "@/lib/Validate";
import CopyToClipboard from "./CopyToClipboard";

const BannerWallet = ({ setShowRecipt, showrecipt }: any) => {
  const handleButtonClick = () => {
    setShowRecipt(false);
  };

  const form = useForm<z.infer<typeof telegramFormSchema>>({
    resolver: zodResolver(telegramFormSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof telegramFormSchema>) {}

  return (
    <>
      <div className={`${showrecipt ? "" : "hidden"}`}>
        <div>
          <h2 className="text-[30px] font-medium text-white sm:text-[48px] px-5">
            Trending Product of this week
          </h2>
        </div>

        <div
          className={`mx-auto my-4 ml-5 mt-10 max-w-[1150px] gap-5 overflow-hidden  rounded-3xl bg-[#121432] bg-gradient-to-r  from-rose-400 via-fuchsia-500 to-indigo-500 p-0.5`}
        >
          <div className="overflow-hidden rounded-3xl bg-[#121432] ">
            <div className="px-10 py-8 ">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium text-white">Volume Bot</h2>
                <ChevronsRight className="size-7 text-white" />
              </div>

              <div className="flex w-full flex-col pt-3">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">
                            Wallet address
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="jffjwfhquhwiojfq`984mffmfnefen"
                              {...field}
                              className="rounded-full h-10 text-[14px] border-[#40E9FD] placeholder:text-white/50 text-white/50"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">
                            Submit Your Transaction Address{" "}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Paste submit transaction address here "
                              type="text"
                              {...field}
                              className="rounded-full h-10 text-[14px] border-[#40E9FD] placeholder:text-white/50 text-white/50"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex flex-col justify-center sm:flex-row gap-8 text-white">
                      {/* <div>
                        <Image
                          src="/assets/images/qrcode.png"
                          width={200}
                          height={200}
                          alt="qrcode"
                          className="border border-[#40E9FD] p-4"
                        />
                      </div> */}
                      <div className="flex flex-col items-center">
                        <h5>Payment by Solana through Sonala network”</h5>
                        <CopyToClipboard />
                      </div>
                    </div>

                    <Button
                      onClick={handleButtonClick}
                      type="submit"
                      className="!mt-10 flex w-full rounded-full bg-[#5563FA] px-10  hover:bg-indigo-700 text-white"
                    >
                      Pay
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerWallet;
