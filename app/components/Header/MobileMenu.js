"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useKey } from "rooks";

const MobileMenu = ({ menuItems, isOpen, handleClose }) => {
  useKey(["Escape"], handleClose);
  return (
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
  );
};

export default MobileMenu;
