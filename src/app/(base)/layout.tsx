import { inter, ibm_plex_mono, ibm_plex_sans } from "@/app/fonts";
import { Analytics } from "@vercel/analytics/react";
import ThemeProvider from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "kalynbeach",
  description: "Kalyn Beach",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body className={`${inter.variable} ${ibm_plex_mono.variable} ${ibm_plex_sans.variable} min-h-screen`}> */}
      <body className={cn("min-h-screen font-sans antialiased", inter.variable, ibm_plex_mono.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="w-full md:max-w-3xl lg:max-w-4xl min-h-screen mx-auto flex flex-col">
            <Header />
            <main className="min-h-max p-8 md:px-4 md:py-12 flex-1 flex flex-col">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
