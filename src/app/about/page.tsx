import GotoLink from "@/components/GotoLink";
import Heading from "@/components/Heading";
import SmallHeading from "@/components/SmallHeading";
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
            Hi, I am a <strong>full stack developer</strong> with a passion for
            building web applications that are both{" "}
            <em>functional and beautiful</em>. I love solving problems and
            learning new technologies.
          </p>
        </section>
        <section id="education" className="mb-44">
          <SmallHeading>Education</SmallHeading>
          <p className="text-pretty mt-20">
            I am a student of <strong>Delhi Technological University</strong>{" "}
            with a bachelor's degree in <strong>Information Technology</strong>.
            I have also completed several online courses in artificial
            intelligence, web development and software engineering.
          </p>
        </section>
        <section id="experience" className="mb-44">
          <SmallHeading>Experience</SmallHeading>
          <p className="text-pretty mt-20">
            I have taken part in several <strong>hackathons</strong> and have
            worked on a variety of projects. I have experience with{" "}
            <strong>several programming languages and frameworks</strong>{" "}
            including Python, JavaScript, TypeScript, ReactJS, NextJs Node.js
            etc.
          </p>
        </section>
        <section id="interests" className="mb-44">
          <SmallHeading>Interests</SmallHeading>
          <p className="text-pretty mt-20">
            In my free time, <strong>I enjoy reading</strong>, and learning
            about new technologies and <strong>programming languages</strong>. I
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
