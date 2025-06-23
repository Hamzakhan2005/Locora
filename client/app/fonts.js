import { Karla, Work_Sans } from "next/font/google";

export const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Adjust as per your need
  display: "swap",
});

export const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
