"use client";
import "./index.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useWindowSize } from "rooks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";

import SignOutButton from "./SignOutButton";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

const Header = ({ hasAccess, categories }) => {
  const path = usePathname().slice(1);
  const [isOpen, setIsOpen] = useState(false);
  const [device, setDevice] = useState("");
  const window = useWindowSize().innerWidth;

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window > 769 ? setDevice("desktop") : setDevice("mobile");
  }, [window]);

  const linkMargin = device === "mobile" ? "" : "ml-6";

  const menuItems = categories.map((category) => {
    return (
      <Link
        key={category}
        href={category}
        onClick={handleClose}
        className={`${linkMargin} link ${path === category ? "selected" : ""}`}
      >
        <div className="flex gap-1 items-center">
          {category}
          {category === "family" ? (
            <FontAwesomeIcon
              icon={hasAccess ? faLockOpen : faLock}
              className="h-4"
            />
          ) : null}
        </div>
      </Link>
    );
  });

  menuItems.push(
    <SignOutButton
      hasAccess={hasAccess}
      isMobile={device === "mobile"}
      handleClose={handleClose}
      key="signout"
    />
  );

  return (
    <div className="top-0 flex justify-between z-10 py-6 gap-4 h-full items-center">
      {device === "desktop" && (
        <MenuDesktop menuItems={menuItems} path={path} />
      )}
      {device === "mobile" && (
        <MenuMobile
          menuItems={menuItems}
          handleClose={handleClose}
          isOpen={isOpen}
          path={path}
          hasAccess={hasAccess}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};

export default Header;
