import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = async () => {
  const wixClient = await wixClientServer();
  const cats = await wixClient.collections.queryCollections().find();
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {cats.items.map((item) => (
          <Link
            key={item._id}
            href={`/list?cat=${item.slug}`}
            className="flex-shrink-0 sm:w-1/2 w-full lg:w-1/4 xl:w-1/6
        "
          >
            <div className="relative bg-slate-100 w-full h-72">
              <Image
                src={item.media?.mainMedia?.image?.url || "cat.png"}
                fill
                alt=""
                sizes="22vw"
                className="object-cover"
              />
            </div>
            <h1 className="mt-8 font-light text-xl tracking-wide">
              {item.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
