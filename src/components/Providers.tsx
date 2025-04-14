"use client";

import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";

interface Props {
  children: ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <SessionProvider>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </SessionProvider>
  );
}
