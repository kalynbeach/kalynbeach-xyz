import { cn } from "@/lib/utils";
import { GeistSans, GeistMono } from "geist/font";
import { Analytics } from "@vercel/analytics/react";
import ThemeProvider from "@/components/theme-provider";
import "@/styles/globals.css";

export const metadata = {
  title: {
    template: "%s | kalynbeach",
    default: "kalynbeach",
  },
  description: "Kalyn Beach",
  metadataBase: new URL("https://kalynbeach.xyz"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen font-sans antialiased", GeistSans.variable, GeistMono.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
