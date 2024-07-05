import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import React, { Suspense } from "react";

const listPage = async ({ searchParams }: { searchParams: any }) => {
  const wixClient = await wixClientServer();
  const cat = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || "all-products"
  );

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col justify-center items-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
          <button className="rounded-3xl bg-ankit text-white text-sm px-4 py-2 w-max">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image
            src={"/woman.png"}
            alt="women"
            fill
            className="object-contain"
          />
        </div>
      </div>
      {/* filter  */}
      <Filter />
      {/* Product  */}
      <h1 className="text-xl mt-12 font-semibold">
        {cat?.collection?.name} For You!
      </h1>
      <Suspense fallback={"loading..."}>
        <ProductList
          categoryId={
            cat.collection?._id || "00000000-000000-000000-000000000001"
          }
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  );
};

export default listPage;
