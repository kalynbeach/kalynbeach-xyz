export const metadata = {
  title: "music",
  description: "Kalyn Beach Music",
};

export default function MusicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <main className="min-h-max flex-1 flex flex-col justify-center items-center">
        {children}
      </main>
    </div>
  );
}
