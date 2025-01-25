import GotoLink from "@/components/GotoLink";
import Heading from "@/components/Heading";
import SmallHeading from "@/components/SmallHeading";
import { figtree } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

/*

Projects

- Stusome
- Storyphilia
- Fashion AI
- todo cli
- mini vim
- flappy bird pygame

*/

const Page = () => {
  return (
    <div>
      <Heading className="text-7xl md:text-9xl">Projects</Heading>
      <div
        className={cn(
          "max-w-prose px-14 md:px-20 mx-auto text-2xl leading-relaxed",
          figtree.className
        )}
      >
        <section id="intro" className="mb-24 sm:mb-52">
          <p className="text-pretty">
            Hi, I am a{" "}
            <strong className="text-gradient">full stack developer</strong> with
            a passion for building web applications that are both{" "}
            <em>functional and beautiful</em>. I love solving problems and
            learning new technologies.
          </p>
        </section>
        <section id="stusome" className="mb-24 sm:mb-44">
          <SmallHeading>Stusome</SmallHeading>
          <p className="text-pretty mt-16 sm:mt-20 text-xl/9 md:text-2xl/7"></p>
        </section>
        <section id="storyphilia" className="mb-24 sm:mb-44">
          <SmallHeading>Storyphilia</SmallHeading>
          <p className="text-pretty mt-16 sm:mt-20 text-xl/9 md:text-2xl/7"></p>
        </section>
        <section id="fashion-ai" className="mb-24 sm:mb-44">
          <SmallHeading>Fashion AI</SmallHeading>
          <p className="text-pretty mt-16 sm:mt-20 text-xl/9 md:text-2xl/7"></p>
        </section>
        <section id="todo-cli" className="mb-24 sm:mb-44">
          <SmallHeading>Todo CLI</SmallHeading>
          <p className="text-pretty mt-16 sm:mt-20 text-xl/9 md:text-2xl/7"></p>
        </section>
        <section id="mini-vim" className="mb-24 sm:mb-44">
          <SmallHeading>Mini VIM</SmallHeading>
          <p className="text-pretty mt-16 sm:mt-20 text-xl/9 md:text-2xl/7"></p>
        </section>
        <section id="flappy-bird" className="mb-24 sm:mb-44">
          <SmallHeading>Flappy Bird</SmallHeading>
          <p className="text-pretty mt-16 sm:mt-20 text-xl/9 md:text-2xl/7"></p>
        </section>
      </div>
      <div className="px-16 md:px-40 flex flex-col md:flex-row md:items-center justify-between gap-10 pb-20">
        <GotoLink
          className="text-2xl xs:text-5xl w-full xs:w-fit mr-auto"
          href="/skills"
        >
          <div className="flex items-center gap-1.5 tracking-tight">
            <ArrowLeft className="size-7 xs:size-9 sm:size-10 inline-block" />
            Skills
          </div>
        </GotoLink>
        <GotoLink
          className="text-2xl xs:text-5xl w-full xs:w-fit ml-auto"
          href="/contact"
        >
          <div className="flex items-center gap-1.5 tracking-tight justify-end xs:justify-start">
            Contact
            <ArrowRight className="size-7 xs:size-9 sm:size-10 inline-block" />
          </div>
        </GotoLink>
      </div>
    </div>
  );
};

export default Page;
