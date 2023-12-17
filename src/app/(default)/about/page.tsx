import Image from "next/image";
import PageHeading from "@/components/page-heading";
import UnderConstruction from "@/components/under-construction";
import { aboutText, loremIpsum } from "./content";

export const metadata = {
  title: "about",
  description: "About Kalyn Beach",
};

export default function About() {
  const content = aboutText; // TODO: replace with aboutText
  const contentHidden = false;

  return (
    <div>
      <PageHeading emoji="🪬" name="about" />
      {/* <UnderConstruction /> */}

      {/* About Content */}
      {!contentHidden && (
        <div className="flex flex-col justify-between gap-24">
          {/* Text */}
          <div className="flex flex-col justify-between gap-2 mb-8 md:mb-0">
            {content.split("\n").map((paragraph, i) => (
              <p key={i} className="">
                {paragraph}
              </p>
            ))}
          </div>
          {/* Image(s) */}
          <div className="">
            <Image
              src={"/kb_mirror.png"}
              alt="Let me cook."
              width={163}
              height={246}
              quality={90}
            />
          </div>
        </div>
      )}
    </div>
  );
}
