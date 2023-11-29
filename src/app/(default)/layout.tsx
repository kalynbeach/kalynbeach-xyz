import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full md:max-w-3xl lg:max-w-4xl min-h-screen mx-auto flex flex-col">
      <SiteHeader />
      <main className="min-h-max p-8 md:px-4 md:py-12 flex-1 flex flex-col">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
