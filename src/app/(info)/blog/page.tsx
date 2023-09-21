import PageHeading from "@/ui/PageHeading";
import UnderConstruction from "@/ui/UnderConstruction";

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
