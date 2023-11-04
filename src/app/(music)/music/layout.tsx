import { cn } from "@/lib/utils";
import { GeistSans, GeistMono } from "geist/font";
import { Analytics } from "@vercel/analytics/react";
import { verify } from "@/lib/verification";
import ThemeProvider from "@/components/theme-provider";
import "@/styles/globals.css";

export const metadata = {
  title: "music | kalynbeach",
  description: "Kalyn Beach Music",
};

export default function MusicLayout({
  enter,
  music,
}: {
  children: React.ReactNode;
  enter: React.ReactNode;
  music: React.ReactNode;
}) {
  const isVerified = verify();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen font-sans antialiased", GeistSans.variable, GeistMono.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-full min-h-screen flex flex-col">
            <main className="min-h-max flex-1 flex flex-col justify-center items-center">
              {isVerified ? music : enter}
            </main>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
