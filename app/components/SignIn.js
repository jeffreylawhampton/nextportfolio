"use client";
import { useFormState } from "react-dom";
import { signIn } from "@/lib";
import Image from "next/image";

const SignIn = () => {
  const [state, formAction] = useFormState(signIn, {});
  console.log(state);
  return (
    <form
      action={formAction}
      className="mx-auto p-12 mt-12 shadow-xl w-full max-w-[360px] min-h-[400px] rounded bg-[#f8f8f8]"
    >
      <Image
        src={"/babydave.png"}
        alt="Portrait of a beautiful baby"
        width={300}
        height={300}
        className="mb-5"
      />

      <label className="font-bold text-gray-700" htmlFor="passphrase">
        {state.error ? state.error : "Password"}
      </label>
      <input
        className={`focus:bg-slate-100 w-full appearance-none rounded px-3 py-2 my-4 ${
          state.error ? "outline outline-red-600" : ""
        }`}
        id="passphrase"
        name="passphrase"
        type="password"
        placeholder=""
        autoComplete="off"
      />

      <button
        className="bg-[#4D7C8A] text-white w-full py-3 font-bold uppercase tracking-wider"
        type="submit"
      >
        Sign In
      </button>
    </form>
  );
};

export default SignIn;
