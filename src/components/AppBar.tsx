"use client";
import Link from "next/link";
import React from "react";
import SigninButton from "./SigninButton";
import { useTranslation } from "react-i18next";

const AppBar = () => {
  const { t, ready } = useTranslation("common");

  if (!ready) return false; // یا spinner/loader نشون بده

  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
      <Link
        className="transition-colors hover:text-blue-500"
        href={"/"}
      >
        {t("home")}
      </Link>
      <Link
        className="transition-colors hover:text-blue-500"
        href={"/UserPost"}
      >
        {t("user_post_page")}
      </Link>
      <SigninButton />
    </header>
  );
};

export default AppBar;
