import Image from "next/image";
import PageHeading from "@/components/page-heading";
import UnderConstruction from "@/components/under-construction";
import { aboutText, aboutImage, loremIpsum } from "./content";
import aboutPic from "public/about-kb.jpeg";

export const metadata = {
  title: "about | kalynbeach",
  description: "About Kalyn Beach",
};

export default function About() {
  const content = loremIpsum; // TODO: replace with aboutText
  const contentHidden = true;

  return (
    <div>
      <PageHeading emoji="🪬" name="about" />
      <UnderConstruction />

      {/* About Content */}
      {!contentHidden && (
        <div className="flex flex-col justify-between gap-4">
          {/* Text */}
          <div className="flex flex-col gap-2 mb-8 md:mb-0">
            {content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="">
                {paragraph}
              </p>
            ))}
          </div>
          {/* Image(s) */}
          <div className="md:self-end">
            <Image
              src={aboutImage}
              alt="Let me cook."
              width={326}
              height={492}
              quality={90}
            />
          </div>
        </div>
      )}
    </div>
  );
}
