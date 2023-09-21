import { inter, ibm_plex_mono, ibm_plex_sans } from "@/app/fonts";
import { Analytics } from "@vercel/analytics/react";
import { verify } from "@/lib/verification";
import "@/app/globals.css";

export const metadata = {
  title: "kalynbeach",
  description: "Kalyn Beach",
};

export default function RootLayout({
  enter,
  music,
}: {
  children: React.ReactNode;
  enter: React.ReactNode;
  music: React.ReactNode;
}) {
  const isVerified = verify();
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibm_plex_mono.variable} ${ibm_plex_sans.variable} bg-white dark:bg-night-900`}
    >
      <body>
        <div className="w-full min-h-screen flex flex-col">
          <main className="min-h-max flex-1 flex flex-col justify-center items-center">
            {isVerified ? music : enter}
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
