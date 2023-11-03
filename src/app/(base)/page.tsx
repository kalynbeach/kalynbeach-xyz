import PageHeading from "@/components/page-heading";

export default function Home() {
  return (
    <div className="flex flex-col justify-between">
      <PageHeading emoji="🌐" name="" />
      <section className="text-sm font-mono">
        <ul className="pl-4 list-disc">
          <li>
            <p>Artist & Engineer</p>
          </li>
          <li>
            <p>Los Angeles, CA</p>
          </li>
        </ul>
      </section>
    </div>
  );
}
