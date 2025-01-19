import GotoLink from "@/components/GotoLink";
import Heading from "@/components/Heading";
import SmallHeading from "@/components/SmallHeading";
import ViewPhotos from "@/components/ViewPhotos";
import { figtree } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

/*

Sections

- Small intro
- Education
- Experience
- Interests

*/

const Page = () => {
  return (
    <div>
      <Heading className="text-center">About me</Heading>
      <div
        className={cn(
          "max-w-prose px-14 md:px-20 mx-auto text-2xl leading-relaxed",
          figtree.className
        )}
      >
        <section id="intro" className="mb-52">
          <p className="text-pretty">
            Hi, I am a{" "}
            <strong className="text-gradient">full stack developer</strong> with
            a passion for building web applications that are both{" "}
            <em>functional and beautiful</em>. I love solving problems and
            learning new technologies.
          </p>
        </section>
        <section id="education" className="mb-44">
          <SmallHeading>
            Education
            <ViewPhotos
              className="ml-3"
              photos={["/dtu.jpeg", "/hall.jpg"]}
              title="My institution"
            />
          </SmallHeading>
          <p className="text-pretty mt-20">
            I am a student of{" "}
            <strong className="text-gradient">
              Delhi Technological University
            </strong>{" "}
            with a bachelor&apos;s degree in{" "}
            <strong className="text-gradient">Information Technology</strong>. I
            have also completed several online courses in artificial
            intelligence, web development and software engineering.
          </p>
        </section>
        <section id="experience" className="mb-44">
          <SmallHeading>
            Experience
            <ViewPhotos
              className="ml-3"
              photos={["/iitr.jpg", "iitr2.jpg"]}
              title="Some hackathons"
            />
          </SmallHeading>
          <p className="text-pretty mt-20">
            I have participated in several{" "}
            <strong className="text-gradient">hackathons</strong> and have
            worked on a variety of projects. I have experience with several{" "}
            <strong className="text-gradient">
              programming languages and frameworks
            </strong>{" "}
            including Python, JavaScript, TypeScript, ReactJS, NextJs Node.js
            etc.
          </p>
        </section>
        <section id="interests" className="mb-44">
          <SmallHeading>
            Interests
            <ViewPhotos
              className="ml-3"
              photos={["/peacock.jpg", "ducks.jpg"]}
              title="Traveling"
            />
          </SmallHeading>
          <p className="text-pretty mt-20">
            In my free time,{" "}
            <strong className="text-gradient">I enjoy reading</strong>, and
            learning about new technologies and{" "}
            <strong className="text-gradient">programming languages</strong>. I
            also enjoy traveling and exploring new places. I am always looking
            for new opportunities to learn and grow as a developer.
          </p>
        </section>
      </div>
      <div className="px-16 md:px-40 flex flex-col md:flex-row md:items-center justify-between gap-10 pb-20">
        <GotoLink className="w-fit mr-auto" href="/contact">
          <div className="flex items-center gap-1.5 tracking-tight">
            <ArrowLeft className="size-10 inline-block" />
            Contact
          </div>
        </GotoLink>
        <GotoLink className="w-fit ml-auto" href="/skills">
          <div className="flex items-center gap-1.5 tracking-tight">
            Skills
            <ArrowRight className="size-10 inline-block" />
          </div>
        </GotoLink>
      </div>
    </div>
  );
};

export default Page;
