import { Inter, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const ibm_plex_mono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const ibm_plex_sans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});
