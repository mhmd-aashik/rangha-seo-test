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
import { telegramFormSchema } from "@/lib/Validate";

const BlogTeleg = ({ showForm, setShowForm }: any) => {
  const handleButtonClick = () => {
    setShowForm(false);
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
      <div className={`${showForm ? "" : "hidden"}`}>
        <div className={`${showForm ? "" : "hidden"}`}>
          <h2 className="text-[30px] font-medium text-white sm:text-[48px]">
            Trending topic of this week
          </h2>
        </div>

        <div
          className={`mx-auto my-4 ml-5 mt-10 max-w-[1150px] overflow-hidden  rounded-3xl bg-black bg-gradient-to-r  from-indigo-500 via-[#FD60F3] to-indigo-500 p-[1px]`}
        >
          <div className="overflow-hidden rounded-3xl bg-[#101432] ">
            <div className="px-10 py-3 ">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-medium text-white pt-10">
                  Volume Bot
                </h2>
                <ChevronsRight className="size-7 text-white" />
              </div>
              <p className="mt-2 line-clamp-2 py-6 text-white/50">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                quaerat voluptatem cumque voluptate, blanditiis sunt
                necessitatibus sapiente hic sequi veritatis esse laboriosam
                aspernatur excepturi obcaecati iure. Porro cupiditate iste rerum
                debitis eaque ea sequi
              </p>
              <div className="flex w-full flex-col pt-3">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full space-y-8"
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">
                            Enter Email (Optional){" "}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your email"
                              {...field}
                              className="rounded-full h-10 text-[14px] pl-4 border-[#40E9FD] placeholder:text-white/50 text-white/50"
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
                            Telegram ID (Optional){" "}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter telegram ID here"
                              type="text"
                              {...field}
                              className="rounded-full pl-4 h-10 border-[#40E9FD] placeholder:text-white/50 text-white/50"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      onClick={handleButtonClick}
                      className="!mt-40 flex w-full rounded-full bg-[#5663FA] px-10 !mb-10  hover:bg-indigo-700 text-white"
                    >
                      Confirm
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

export default BlogTeleg;
