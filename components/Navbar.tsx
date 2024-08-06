import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1444px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Auto Central logo"
            width={118}
            height={18}
            className="object-contain "
          />
        </Link>
        <CustomButton
          title="Sing in"
          btnType="button"
          containerStyles="text-primary-green rounded-full bg-light-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default Navbar;
