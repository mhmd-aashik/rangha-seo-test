import TrandingSlides from "@/components/blog/TrandingSlides";
import { fetchBlogs, fetchBlogsById } from "@/lib/fetchBlogs";
import { icons } from "lucide-react";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export async function generateMetadata({ params }: any) {
  const results: any = await fetchBlogsById({ id: params.id });
  const { attributes } = results.data.data;
  const { metatitle, metadescription } = attributes;
  const imageData = attributes.phoneView.data.attributes.formats;
  const imageUrl = imageData?.large?.url;

  const fullImageUrl = `${process.env.NEXT_PUBLIC_IMAGE_FILE}${imageUrl}`;

  // Logging for debugging
  console.log("Meta Title:", metatitle);
  console.log("Meta Description:", metadescription);
  console.log("Image URL:", fullImageUrl);

  return {
    title: metatitle,
    description: metadescription,
    images: [
      {
        url: fullImageUrl,
        width: 1200,
        height: 630,
        alt: metatitle,
      },
    ],
    openGraph: {
      title: metatitle,
      description: metadescription,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: metatitle,
        },
      ],
    },
    twitter: {
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export const revalidate = 0;

const SingleBlog = async ({ params }: any) => {
  const results: any = await fetchBlogsById({ id: params.id });

  const { attributes } = results.data.data;

  const { title, description } = attributes;
  const imageData = attributes.desktopView.data.attributes.formats;
  const imageUrl = imageData?.large?.url;

  if (!attributes || !imageUrl) {
    return;
  }

  return (
    <div className="w-full mx-auto">
      <div className="relative w-4xl h-full w-full mx-auto">
        <div className="absolute bottom-0 right-0 ">
          <Image
            src="/assets/vector/vector7.png"
            alt="vector8"
            width={312}
            height={270}
            draggable="false"
          />
        </div>

        <div className="mx-auto max-w-[1150px] gap-10 bg-[#020000] px-5 pb-5">
          <div className="mt-5 rounded-3xl outline outline-1 outline-[#C946FB]">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${imageUrl}`}
              alt={`${title}`}
              width={1700}
              height={700}
              draggable="false"
              className="max-h-[420px] rounded-t-3xl bg-center object-cover"
            />
            <div className="p-6">
              <h2 className="h-full pb-8 font-extrabold text-[#40E9FD] sm:text-[20px] font-poppins">
                {title}
              </h2>
              <div className="prose prose-lg prose-invert max-h-full overflow-auto text-white font-poppins">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]} // Enable HTML parsing
                >
                  {description}
                </ReactMarkdown>
              </div>
            </div>
          </div>

          <TrandingSlides />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
