import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-gray-100 text-sm mt-24 py-24">
      {/* top  */}
      <div className="flex justify-between gap-24 flex-col md:flex-row">
        {/* left  */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href={"/"}>
            <div className="text-2xl tracking-wide">Ankit</div>
          </Link>
          <p>Bhagat Singh Colony, New Delhi</p>
          <span className="font-semibold">ankit@gmail.com</span>
          <span className="font-semibold">1234567890</span>
          <div className="flex gap-6">
            <Image src={"/facebook.png"} height={16} width={16} alt="" />
            <Image src={"/instagram.png"} height={16} width={16} alt="" />
            <Image src={"/youtube.png"} height={16} width={16} alt="" />
            <Image src={"/pinterest.png"} height={16} width={16} alt="" />
            <Image src={"/x.png"} height={16} width={16} alt="" />
          </div>
        </div>
        {/* center  */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">Company</h1>
            <div className="flex flex-col gap-6">
              <Link href={""}>About Us</Link>
              <Link href={""}>Careers</Link>
              <Link href={""}>Affiliates</Link>
              <Link href={""}>Blog</Link>
              <Link href={""}>Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">Shop</h1>
            <div className="flex flex-col gap-6">
              <Link href={""}>New Arrivals</Link>
              <Link href={""}>Accessories</Link>
              <Link href={""}>Men</Link>
              <Link href={""}>Women</Link>
              <Link href={""}>All Product</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">Help</h1>
            <div className="flex flex-col gap-6">
              <Link href={""}>Customer Service</Link>
              <Link href={""}>My Account</Link>
              <Link href={""}>Find a Store</Link>
              <Link href={""}>ligal & Privacy</Link>
              <Link href={""}>Gift Card</Link>
            </div>
          </div>
        </div>
        {/* right  */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="text-2xl tracking-wide">EMAIL</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4 outline-none"
            />
            <button className="bg-[#FF527B] w-1/4 text-white">Join</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src={"/discover.png"} alt="" width={40} height={20} />
            <Image src={"/skrill.png"} alt="" width={40} height={20} />
            <Image src={"/paypal.png"} alt="" width={40} height={20} />
            <Image src={"/mastercard.png"} alt="" width={40} height={20} />
            <Image src={"/visa.png"} alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* bottom  */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">&copy; 2024 Ankit Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">Hindi | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">₹ INR</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
