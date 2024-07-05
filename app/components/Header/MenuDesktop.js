"use client";

import Link from "next/link";

const MenuDesktop = ({ menuItems, path }) => {
  return (
    <>
      <Link
        href="/"
        key="home"
        className={`${
          path && "link"
        } relative font-bold text-2xl lg:text-3xl text-left uppercase tracking-tight leading-none`}
      >
        Jeff Hampton
      </Link>
      <div className="flex items-center text-xs md:text-base mr-1 uppercase font-semibold tracking-wider">
        {menuItems}
      </div>
    </>
  );
};

export default MenuDesktop;
