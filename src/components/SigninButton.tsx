"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import i18n from "@/lib/i18n";
import React from "react";

const SigninButton = () => {
  const { data: session } = useSession();
  const direction = i18n.language === "fa" ? "rtl" : "ltr";
  //console.log(session?.user);

  if (session && session.user) {
    return (
      <div
        className={`flex gap-4 ${
          i18n.language === "fa" ? "mr-auto" : "ml-auto"
        }`}
      >
        <p className="text-sky-600">{session.user.name}</p>
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <button
      onClick={() => signIn()}
      className={`text-green-600 ${
        i18n.language === "fa" ? "mr-auto" : "ml-auto"
      }`}
    >
      Sign In
    </button>
  );
};

export default SigninButton;
