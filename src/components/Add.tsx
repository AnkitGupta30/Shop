"use client";
import { useCartStore } from "@/hooks/useCardStore";
import { useWixClient } from "@/hooks/useWixClient";
import React, { useState } from "react";

const Add = ({
  productId,
  variantId,
  stockNumber,
}: {
  productId: string;
  variantId: string;
  stockNumber: number;
}) => {
  const [qunatity, setQuantity] = useState(1);
  // temporary
  // const stock = 4;
  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && qunatity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && qunatity < stockNumber) {
      setQuantity((prev) => prev + 1);
    }
  };

  const wixClient = useWixClient();

  const Add = async () => {
    // const response = await wixClient.currentCart.addToCurrentCart({
    //   lineItems: [
    //     {
    //       catalogReference: {
    //         appId: process.env.NEXT_PUBLIC_WIX_APP_ID,
    //         catalogItemId: productId,
    //         ...(variantId && { options: { variantId } }),
    //       },
    //       quantity: qunatity,
    //     },
    //   ],
    // });
    // console.log(response);
  };
  const { addItem, isLoading } = useCartStore();

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-200 px-4 py-2 rounded-3xl flex items-center justify-between w-32">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            {qunatity}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>
          {stockNumber < 1 ? (
            <div className="text-sm">Product is out of stock</div>
          ) : (
            <div className="text-sm">
              Only <span className="text-orange-500">{stockNumber} items</span>{" "}
              left!
              <br /> {"Don't"} miss it
            </div>
          )}
        </div>

        <button
          className="lg:w-36 text-sm rounded-3xl ring-1 ring-ankit text-ankit px-4 py-1 hover:bg-ankit hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none disabled:ring-0"
          onClick={() => addItem(wixClient, productId, variantId, qunatity)}
          disabled={isLoading}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
