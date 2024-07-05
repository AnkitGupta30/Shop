"use client";
import { useCartStore } from "@/hooks/useCardStore";
import { useWixClient } from "@/hooks/useWixClient";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const { counter } = useCartStore();
  const wixClient = useWixClient();
  const [isLoading, setIsLoading] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const router = useRouter();

  const handleLogOut = async () => {
    setIsLoading(true);
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    setIsLoading(false);
    setIsProfileOpen(false);
    router.push(logoutUrl);
  };
  return (
    <div>
      <Image
        src={"/menu.png"}
        alt="menu-button"
        height={22}
        width={22}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex justify-center items-center gap-8 flex-col text-xl z-10">
          <Link href={"/"}>HomePage</Link>
          <Link href={"/"}>Shop</Link>
          <Link href={"/"}>Deals</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
          <Link href={""} onClick={handleLogOut}>
            Logout
          </Link>
          <Link href={"/"}>
            Cart <sup className="text-xl">{counter}</sup>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
