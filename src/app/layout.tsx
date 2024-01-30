import type { Metadata } from "next";

import StyledComponentsRegistry from "@/style/lib/registry";
import { Lalezar } from "next/font/google";

const lalezar = Lalezar({
  weight: ["400"],
  style: ["normal"],
  subsets: ["arabic", "latin", "latin-ext", "vietnamese"],
});

import icon from "../../public/icon.svg";

export const metadata: Metadata = {
  title: "PokedeexHub",
  description: "World Pokemon in one site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={icon.src} sizes="32x32" type="image/svg+xml" />
      </head>
      <body className={lalezar.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
