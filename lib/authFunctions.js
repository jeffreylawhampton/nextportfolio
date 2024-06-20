/* eslint-disable prefer-destructuring */
"use server";
import getAuth from "@/auth";
import { compareSync } from "bcryptjs";

export async function getSession() {
  const auth = getAuth();
  return await auth.all();
}

export async function signIn(prevState, formData = new FormData()) {
  const { HASHED_PASSPHRASE } = process.env;

  const inputPhrase = formData.get("passphrase");
  if (!compareSync(inputPhrase, HASHED_PASSPHRASE)) {
    return {
      error: "Nope",
    };
  }

  const auth = getAuth();
  await auth.set("hasAccess", true);
  return { success: true };
}

export async function signOut(prevState, formData = new FormData()) {
  const auth = getAuth();
  await auth.clear();
  return { success: true };
}
