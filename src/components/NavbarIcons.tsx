"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CartModal from "./CartModal";
import { useWixClient } from "@/hooks/useWixClient";
import Cookies from "js-cookie";
import { useCartStore } from "@/hooks/useCardStore";

const NavbarIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // // Temporary
  // const isLoggedIn = false;

  const wixClient = useWixClient();
  const isLoggedIn = wixClient.auth.loggedIn();
  const handleChange = () => {
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsProfileOpen((prev) => !prev);
    }
  };

  // AUTH WITH WIX

  // const wixClient = useWixClient();
  // const login = async () => {
  //   const loginRequestData = wixClient.auth.generateOAuthData(
  //     "http://localhost:3000"
  //   );

  //   console.log(loginRequestData);
  //   localStorage.setItem("oAuthRedirectData", JSON.stringify(loginRequestData));

  //   const { authUrl } = await wixClient.auth.getAuthUrl(loginRequestData);
  //   window.location.href = authUrl;
  // };

  const handleLogOut = async () => {
    setIsLoading(true);
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    setIsLoading(false);
    setIsProfileOpen(false);
    router.push(logoutUrl);
  };

  const { cart, counter, getCart } = useCartStore();

  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src={"/profile.png"}
        height={22}
        width={22}
        alt="profile"
        className="cursor-pointer"
        onClick={handleChange}
        // onClick={login}
      />
      {isProfileOpen && (
        <div className="absolute p-4 bg-white rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href={"/"}>Profile</Link>
          <div className="mt-2  cursor-pointer" onClick={handleLogOut}>
            {isLoading ? "Logging out " : "Logout"}
          </div>
        </div>
      )}
      <Image
        src={"/notification.png"}
        height={22}
        width={22}
        alt="profile"
        className="cursor-pointer"
      />
      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <Image
          src={"/cart.png"}
          height={22}
          width={22}
          alt="profile"
          className="cursor-pointer"
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-[#FF527B] text-white rounded-full text-sm flex justify-center items-center">
          {counter}
        </div>
      </div>
      {isCartOpen && (
        <div>
          <CartModal />
        </div>
      )}
    </div>
  );
};

export default NavbarIcons;
