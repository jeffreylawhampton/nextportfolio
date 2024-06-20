"use client";
import Link from "next/link";
import { categories } from "@/categories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { usePathname, redirect } from "next/navigation";
import { signOut } from "@/lib/authFunctions";
import { useFormState } from "react-dom";
import { useEffect } from "react";

const Header = ({ session }) => {
  const path = usePathname().slice(1);
  const { hasAccess } = session;
  const [state, formAction] = useFormState(signOut, {});

  const icon = hasAccess ? faLockOpen : faLock;

  useEffect(() => {
    if (state.success) {
      redirect("/");
    }
  }, [state]);

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
        <div className="flex items-center gap-4 md:gap-6 lg:gap-8 text-xs md:text-base mr-1 uppercase font-semibold tracking-wider">
          {categories?.map((category) => {
            return (
              <Link
                key={category.name}
                href={category.path}
                className={`items-center relative link ${
                  path === category.path ? "active" : ""
                }`}
              >
                {category.name}
              </Link>
            );
          })}
          <Link
            key="family"
            href="/family"
            className={`flex gap-1 items-center relative link ${
              path === "family" ? "active" : ""
            }`}
          >
            Family
            <FontAwesomeIcon icon={icon} className="w-3" />
          </Link>
          {hasAccess && (
            <form action={formAction}>
              <button className="tracking-wider uppercase">Sign out</button>
            </form>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
