import { Electrolize, Fira_Code, Space_Grotesk } from "next/font/google";

export const electrolize = Electrolize({
  weight: "400",
  subsets: ["latin"],
});

export const firacode = Fira_Code({
  weight: "400",
  subsets: ["latin"],
});

export const space = Space_Grotesk({
  weight: ["400", "600"],
  subsets: ["latin"],
});
