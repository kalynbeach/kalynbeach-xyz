import PageHeading from "@/components/page-heading";
import UnderConstruction from "@/components/under-construction";

export const metadata = {
  title: "blog | kalynbeach",
  description: `Kalyn Beach's blog`,
};

export default function Blog() {
  return (
    <div>
      <PageHeading emoji="💭" name="blog" />
      <UnderConstruction />
    </div>
  );
}
