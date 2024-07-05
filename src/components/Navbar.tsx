import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";
// import NavbarIcons from "./NavbarIcons";

const NavIcons = dynamic(() => import("./NavbarIcons"), { ssr: false });

const Navbar = () => {
  return (
    <div className="h-16 sticky z-[1000] left-0 top-0 bg-white  px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* mobile  */}
      <div className="flex items-center justify-between h-full md:hidden">
        <Link href={"/"}>
          <div className="text-2xl tracking-wide">Ankit</div>
        </Link>
        <span className="w-full flex justify-end items-center pr-5">
          <NavIcons />
        </span>

        <Menu />
      </div>
      {/* bigger screen  */}
      <div className="hidden md:flex items-center justify-between h-full gap-8">
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href={"/"} className="flex items-center gap-3">
            <Image src={"/logo.png"} height={24} width={24} alt="logo" />
            <div className="text-2xl tracking-wide">Ankit</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href={"/"}>Homepage</Link>
            <Link href={"/"}>Shop</Link>
            <Link href={"/"}>Deals</Link>
            <Link href={"/"}>Contact</Link>
          </div>
        </div>
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
