import GotoLink from "@/components/GotoLink";
import Heading from "@/components/Heading";
import SmallHeading from "@/components/SmallHeading";
import TagGroup from "@/components/TagGroup";
import { figtree } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

/*

Sections

- Intro
- Web Development
- Machine Learning
- Software Engineering
- Competitive Programming

*/

const Page = () => {
  return (
    <div>
      <Heading className="text-center text-6xl sm:text-8xl md:text-9xl">
        Skills
      </Heading>
      <div
        className={cn(
          "max-w-prose px-14 md:px-20 mx-auto text-2xl leading-relaxed",
          figtree.className
        )}
      >
        <section id="intro" className="mb-24 sm:mb-52">
          <p className="text-pretty">
            I am experienced in several programming languages and frameworks. I
            have experience with{" "}
            <strong className="text-gradient">web development</strong>,{" "}
            <strong className="text-gradient">machine learning</strong>,{" "}
            <strong className="text-gradient">software engineering</strong> and{" "}
            <strong className="text-gradient">competitive programming</strong>.
            I am always looking for new opportunities to learn and grow as a
            developer.
          </p>
        </section>
        <section id="web" className="mb-24 sm:mb-44">
          <SmallHeading>Web Development</SmallHeading>
          <TagGroup
            className="scale-90 md:scale-100 text-xs md:text-base mt-1"
            tags={[
              "html",
              "css",
              "tailwindcss",
              "javascript",
              "typescript",
              "react",
              "nextjs",
            ]}
          />
          <p className="text-pretty mt-5 sm:mt-18 md:mt-20 text-xl/9 md:text-2xl/7">
            I have experience building websites using modern web development
            technologies. I have experience in{" "}
            <strong className="text-gradient">front end development</strong>,
            bringing life to designs and creating interactive user interfaces. I
            have also experience in{" "}
            <strong className="text-gradient">backend development</strong>,
            creating APIs and server-side logic.
          </p>
        </section>
        <section id="ml" className="mb-24 sm:mb-44">
          <SmallHeading>Machine Learning</SmallHeading>
          <TagGroup
            className="scale-90 md:scale-100 text-xs md:text-base mt-1"
            tags={[
              "python",
              "tensorflow",
              "pytorch",
              "scikit-learn",
              "jupyter",
            ]}
          />
          <p className="text-pretty mt-5 sm:mt-18 md:mt-20 text-xl/9 md:text-2xl/7">
            I have been building machine learning models and deploying them. I
            have experience in{" "}
            <strong className="text-gradient">deep learning</strong> and{" "}
            <strong className="text-gradient">computer vision</strong>. I also
            find{" "}
            <strong className="text-gradient">
              natural language processing
            </strong>{" "}
            very interesting.
          </p>
        </section>
        <section id="se" className="mb-24 sm:mb-44">
          <SmallHeading>Software Engineering</SmallHeading>
          <TagGroup
            className="scale-90 md:scale-100 text-xs md:text-base mt-1"
            tags={["java", "cpp", "c", "rust", "docker"]}
          />
          <p className="text-pretty mt-5 sm:mt-18 md:mt-20 text-xl/9 md:text-2xl/7">
            Having done my degree in information technology and having worked on
            several <strong className="text-gradient">team projects</strong> and{" "}
            <strong className="text-gradient">open source</strong>, I have
            knowledge about the{" "}
            <strong className="text-gradient">
              software development process
            </strong>
            .
          </p>
        </section>
        <section id="cp" className="mb-24 sm:mb-44">
          <SmallHeading>Competitive Programming</SmallHeading>
          <TagGroup
            className="scale-90 md:scale-100 text-xs md:text-base mt-1"
            tags={["algorithms", "data-structures", "problem-solving"]}
          />
          <p className="text-pretty mt-5 sm:mt-18 md:mt-20 text-xl/9 md:text-2xl/7">
            I love solving problems and have been participating in{" "}
            <strong className="text-gradient">
              competitive programming contests
            </strong>{" "}
            on Codeforces, Leetcode, AtCoder and CodeChef. I have experience in
            solving algorithmic problems and have a good understanding of data
            structures.
          </p>
        </section>
      </div>
      <div className="px-16 md:px-40 flex flex-col md:flex-row md:items-center justify-between gap-10 pb-20">
        <GotoLink
          className="text-2xl xs:text-5xl w-full xs:w-fit mr-auto"
          href="/about"
        >
          <div className="flex items-center gap-1.5 tracking-tight">
            <ArrowLeft className="size-7 xs:size-9 sm:size-10 inline-block" />
            About
          </div>
        </GotoLink>
        <GotoLink
          className="text-2xl xs:text-5xl w-full xs:w-fit ml-auto"
          href="/projects"
        >
          <div className="flex items-center gap-1.5 tracking-tight justify-end xs:justify-start">
            Projects
            <ArrowRight className="size-7 xs:size-9 sm:size-10 inline-block" />
          </div>
        </GotoLink>
      </div>
    </div>
  );
};

export default Page;
