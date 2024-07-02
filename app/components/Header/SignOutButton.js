"use client";
import { useFormState } from "react-dom";
import { signOut } from "@/lib/authentication";

const SignOutButton = ({ handleClose, hasAccess, isMobile }) => {
  const [state, formAction] = useFormState(signOut, {});

  return (
    <form
      action={formAction}
      onSubmit={handleClose}
      className={`transition overflow-hidden ${
        hasAccess ? "button-visible" : "button-hidden"
      }`}
    >
      <button
        className={`${isMobile ? "" : "ml-6"} uppercase tracking-wider link `}
      >
        Sign&nbsp;out
      </button>
    </form>
  );
};

export default SignOutButton;
