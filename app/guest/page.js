"use client";

import { useFormState } from "react-dom";
import { signIn } from "@/lib";

const Page = () => {
  const [state, formAction] = useFormState(signIn, {});

  return (
    <div className="text-center">
      <form action={formAction}>
        <div className="mb-20 mt-6">
          <button type="submit">Sign Out</button>
        </div>

        {state.error && (
          <p className="mt-2 text-sm italic text-red-500">{state.error}</p>
        )}
      </form>
    </div>
  );
};

export default Page;
