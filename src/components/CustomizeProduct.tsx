"use client";
import { products } from "@wix/stores";
import React, { useEffect, useState } from "react";
import Add from "./Add";

const CustomizeProduct = ({
  productId,
  variants,
  productOptions,
}: {
  productId: string;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
}) => {
  const [selectedOption, setSelectedoption] = useState<{
    [key: string]: string;
  }>({});

  const [selectedVariant, setSelectedVariant] = useState<products.Variant>();

  useEffect(() => {
    const variant = variants.find((v) => {
      const variantChoices = v.choices;
      if (!variantChoices) return false;

      return Object.entries(selectedOption).every(
        ([key, value]) => variantChoices[key] === value
      );
    });

    setSelectedVariant(variant);
  }, [selectedOption, variants]);

  const handleOptionSelect = (optionType: string, choice: string) => {
    setSelectedoption((prev) => ({ ...prev, [optionType]: choice }));
  };


  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;

      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        variant.stock?.inStock &&
        variant.stock?.quantity &&
        variant.stock?.quantity > 0
      );
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {productOptions.map((option) => (
        <div className="flex flex-col gap-4" key={option.name}>
          <h4 className="font-medium">Choose a {option.name}</h4>
          <ul className="flex items-center gap-3">
            {/* {option.choices?.map((choice) => {
              const disabled = !isVariantInStock({
                ...selectedOption,
                [option.name!]: choice.description,
              }); */}
            {option.choices?.map((choice) => {
              const disabled = !isVariantInStock({
                ...selectedOption,
                [option.name!]: choice.description!,
              });
              const selected =
                selectedOption[option.name!] === choice.description;
              const clickHandler = disabled
                ? undefined
                : () => handleOptionSelect(option.name!, choice.description!);
              return option.name === "Color" ? (
                <li
                  className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative"
                  style={{
                    backgroundColor: choice.value,
                    cursor: disabled ? "not-allowed" : "pointer",
                  }}
                  onClick={clickHandler}
                >
                  {selected && (
                    <div className="w-10 h-10 ring-2 absolute rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                  {disabled && (
                    <div className="w-10 h-[2px] bg-red-400 rotate-45 absolute rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                </li>
              ) : (
                <li
                  className="ring-1 ring-ankit text-ankit rounded-md px-4 py-1 text-sm"
                  style={{
                    cursor: disabled ? "not-allowed" : "pointer",
                    backgroundColor: selected
                      ? "#f35c7a"
                      : disabled
                      ? "#FBCFE8"
                      : "white",
                    color: selected || disabled ? "white" : "#f35c7a",
                    boxShadow: disabled ? "none" : "",
                  }}
                  onClick={clickHandler}
                >
                  {choice.description}
                </li>
              );
              // (
              //   <div
              //     key={choice.value}
              //     onClick={() =>
              //       handleOptionSelect(option.name!, choice.description!)
              //     }
              //   >
              //     {choice.description}
              //     {disable && "disable"}
              //     {selected && "selected"}
              //   </div>
              // );
            })}
          </ul>
        </div>
      ))}
      <Add
        productId={productId}
        variantId={
          selectedVariant?._id || "00000000-0000-0000-0000-000000000000"
        }
        stockNumber={selectedVariant?.stock?.quantity || 0}
      />
      {/* COLORS  */}
      {/* 
          <ul className="flex items-center gap-3">
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative cursor-pointer bg-red-500">
              <div className="w-10 h-10 ring-2 absolute rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </li>
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative cursor-pointer bg-blue-500"></li>
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 relative cursor-not-allowed bg-green-500">
              <div className="w-10 h-[2px] bg-red-400 rotate-45 absolute rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </li>
          </ul> */}

      {/* OTHERS  */}
      {/* <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-ankit text-ankit rounded-md px-4 py-1 text-sm cursor-pointer">
          Small
        </li>
        <li className="ring-1 ring-ankit text-white bg-ankit rounded-md px-4 py-1 text-sm cursor-pointer">
          Medium
        </li>
        <li className="ring-1 ring-pink-200 text-white bg-pink-200 rounded-md px-4 py-1 text-sm cursor-not-allowed">
          Large
        </li>
      </ul> */}
    </div>
  );
};

export default CustomizeProduct;
