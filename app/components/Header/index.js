"use client";
import { useState, useEffect, Fragment } from "react";
import { useWindowSize } from "rooks";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import SignOutButton from "./SignOutButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen, faBars } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const Header = ({ hasAccess, categories }) => {
  const path = usePathname().slice(1);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const icon = hasAccess ? faLockOpen : faLock;
  const window = useWindowSize().innerWidth;

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window > 769 ? setIsMobile(false) : setIsMobile(true);
  }, [window]);

  const linkMargin = isMobile ? "" : "ml-6";

  const menuItems = categories.map((category) => {
    return (
      <Link
        key={category}
        href={category}
        onClick={handleClose}
        className={`${linkMargin} link ${path === category ? "active" : ""}`}
      >
        {category}
      </Link>
    );
  });

  menuItems.push(
    <Fragment key="frag">
      <Link
        href="family"
        onClick={handleClose}
        className={`flex gap-1 items-center link ${
          path === "family" ? "active" : ""
        } ${linkMargin}`}
      >
        Family <FontAwesomeIcon icon={icon} className="h-4" />
      </Link>
      <SignOutButton
        hasAccess={hasAccess}
        isMobile={isMobile}
        handleClose={handleClose}
      />
    </Fragment>
  );

  return (
    <div className="top-0 flex justify-between z-10 py-6 gap-4 h-full items-center">
      <Link
        href="/"
        key="home"
        className="relative link font-bold text-2xl lg:text-3xl text-left uppercase tracking-tight leading-none"
      >
        Jeff Hampton
      </Link>
      {!isMobile ? (
        <div className="flex items-center text-xs md:text-base mr-1 uppercase font-semibold tracking-wider">
          {menuItems}
        </div>
      ) : (
        <div>
          <FontAwesomeIcon
            onClick={() => setIsOpen(true)}
            icon={faBars}
            className="h-6 relative z-40"
          />

          <MobileMenu
            menuItems={menuItems}
            handleClose={handleClose}
            isOpen={isOpen}
            path={path}
            hasAccess={hasAccess}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
