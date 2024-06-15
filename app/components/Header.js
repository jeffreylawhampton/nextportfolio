"use client";
import Link from "next/link";
import { categories } from "@/categories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname().slice(1);

  return (
    <header>
      <div className="top-0 flex justify-between z-10 py-6 gap-4">
        <Link
          href="/"
          className={`relative link font-bold text-xl md:text-2xl lg:text-3xl text-left uppercase tracking-tight leading-none ${
            !path ? "active" : ""
          }`}
        >
          Jeff Hampton
        </Link>
        <ul className="flex items-center gap-4 md:gap-6 lg:gap-8 text-xs md:text-base mr-1 uppercase font-semibold tracking-wider">
          {categories?.map((category) => {
            return (
              <Link
                key={category.name}
                href={category.path}
                className={`flex gap-1 items-center relative link ${
                  path === category.path ? "active" : ""
                }`}
              >
                {category.name}
                {category.protected ? (
                  <FontAwesomeIcon icon={faLock} className="w-3" />
                ) : null}
              </Link>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
