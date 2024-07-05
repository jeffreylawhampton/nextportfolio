"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { useKey } from "rooks";
import Link from "next/link";

const MenuMobile = ({ menuItems, isOpen, handleClose, setIsOpen, path }) => {
  useKey(["Escape"], handleClose);
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
      <div>
        <FontAwesomeIcon
          onClick={() => setIsOpen(true)}
          icon={faBars}
          className="h-6 relative z-40"
        />

        <div className={isOpen ? "menu menu-open" : "menu menu-closed"}>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={handleClose}
            className="right-5 top-5 absolute h-8"
          />
          <div className="flex flex-col gap-8 items-center uppercase font-semibold tracking-wider text-lg">
            {menuItems}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuMobile;
