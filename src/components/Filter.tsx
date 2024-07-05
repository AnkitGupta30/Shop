"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Filter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="outline-none px-4 py-2 rounded-2xl text-sm font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          onChange={handleFilterChange}
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400 outline-none"
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          onChange={handleFilterChange}
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400 outline-none"
        />
        {/* <select
          name="size"
          id=""
          className="px-4 py-2 rounded-2xl text-sm font-medium bg-[#EBEDED]"
        >
          <option>Size</option>
          <option value="size">Size</option>
        </select>
        <select
          name="color"
          id=""
          className="px-4 py-2 rounded-2xl text-sm font-medium bg-[#EBEDED]"
        >
          <option>Color</option>
          <option>Test</option>
        </select> */}
        <select
          name="cat"
          id=""
          className="px-4 py-2 rounded-2xl text-sm font-medium bg-[#EBEDED]"
          onChange={handleFilterChange}
        >
          <option>Category</option>
          <option>New Arrival</option>
          <option>Popolar</option>
        </select>
        <select
          name=""
          id=""
          className="px-4 py-2 rounded-2xl text-sm font-medium bg-[#EBEDED]"
        >
          <option>All Filter</option>
        </select>
      </div>
      <div className="">
        <select
          name="sort"
          id=""
          className="px-4 py-2 rounded-2xl text-xs font-medium ring-1 ring-gray-400 outline-none"
          onChange={handleFilterChange}
        >
          <option>Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
