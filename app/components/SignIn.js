"use client";
import { useFormState } from "react-dom";
import { signIn } from "@/lib/authentication";
import Image from "next/image";

const SignIn = () => {
  const [state, formAction] = useFormState(signIn, {});

  return (
    <form
      action={formAction}
      className="mx-auto p-12 mt-8 mb-12 shadow-xl w-full max-w-[440px] min-h-[400px] rounded bg-[#f8f8f8] flex flex-col items-center"
    >
      <Image
        src={"/babydave.jpg"}
        alt="Portrait of a beautiful baby"
        width={300}
        height={300}
        className="mb-10 rounded-[50%]"
      />

      <label
        className="font-bold text-gray-700 text-left w-full"
        htmlFor="passphrase"
      >
        {state.error ? state.error : "What's the word?"}
      </label>
      <input
        className={`focus:bg-slate-100 w-full appearance-none rounded px-3 py-2 my-4 ${
          state.error ? "outline outline-red-600" : ""
        }`}
        id="passphrase"
        name="passphrase"
        type="password"
        placeholder="Password"
        autoComplete="off"
      />

      <button
        className="bg-blue1 text-white w-full py-3 font-bold uppercase tracking-wider hover:bg-blue2 active:bg-blue3"
        type="submit"
      >
        Sign In
      </button>
    </form>
  );
};

export default SignIn;
