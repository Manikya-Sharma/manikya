import ClickLink from "@/components/ClickLink";
import GotoLink from "@/components/GotoLink";
import Heading from "@/components/Heading";
import SmallGoto from "@/components/SmallGoto";
import SmallHeading from "@/components/SmallHeading";
import { projectData } from "@/data/project-info";
import { figtree } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, MoveUpRight } from "lucide-react";

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
        {(Object.keys(projectData) as Array<keyof typeof projectData>).map(
          (project) => {
            const name = project;
            const data = projectData[project];
            return (
              <section key={name} id={name} className="mb-24 sm:mb-44">
                <div className="flex items-center gap-4">
                  <SmallHeading className="inline-block">
                    <span>{name}</span>
                  </SmallHeading>
                  <SmallGoto
                    className="text-base tracking-wide inline-block"
                    to={`/projects/${name}`}
                  >
                    <div className="flex items-center gap-1.5">
                      <div className="hidden sm:block">Learn more</div>
                      <MoveUpRight className="block size-5 sm:size-4" />
                    </div>
                  </SmallGoto>
                </div>
                <div className="mt-7">
                  <ClickLink href={`/projects/${name}`}>
                    <img
                      src={data.images[0].src}
                      alt={data.images[0].alt}
                      className="ring-black ring-2 ring-opacity-25 rounded-lg ring-offset-2 w-full aspect-video object-contain"
                    />
                  </ClickLink>
                </div>
              </section>
            );
          }
        )}
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
            Socials
            <ArrowRight className="size-7 xs:size-9 sm:size-10 inline-block" />
          </div>
        </GotoLink>
      </div>
    </div>
  );
};

export default Page;
