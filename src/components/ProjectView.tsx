import { projectData } from "@/data/project-info";
import SmallHeading from "./SmallHeading";
import { cn } from "@/lib/utils";
import { figtree } from "@/lib/fonts";
import { ExternalLink } from "lucide-react";
import { buttonVariants } from "./ui/button";
import TagGroup from "./TagGroup";

const ProjectView = ({
  projectName,
  details,
}: {
  projectName: string;
  details: (typeof projectData)[keyof typeof projectData];
}) => {
  return (
    <main className="px-6 pb-10 md:pb-0">
      <div className="lg:flex min-h-[70vh] items-stretch gap-5">
        <div className="max-w-prose my-auto md:mx-auto md:w-fit">
          <SmallHeading>{projectName}</SmallHeading>
          <div className={cn("flex items-center", figtree.className)}>
            <a
              href={details.github}
              className={cn(
                buttonVariants({
                  variant: "link",
                  className:
                    "text-lg text-blue-700 underline hover:no-underline",
                }),
                "text-pretty flex items-center gap-0.5"
              )}
            >
              GitHub <ExternalLink />
            </a>
            <a
              href={details.liveLink}
              className={cn(
                buttonVariants({
                  variant: "link",
                  className:
                    "text-lg text-blue-700 underline hover:no-underline",
                }),
                "text-pretty flex items-center gap-0.5"
              )}
            >
              Deployed Link <ExternalLink />
            </a>
          </div>
          <p className="text-base md:text-xl mt-2 text-pretty">
            {details.about}
          </p>
          <div className="mt-5">
            <TagGroup
              className="scale-90 md:scale-100 text-xs md:text-base mt-1"
              tags={details.techStack}
            />
          </div>
        </div>
        <div className="h-72 lg:flex-grow lg:h-auto mt-10 lg:mt-0">
          <div className="bg-black w-full h-full rounded-lg" />
        </div>
      </div>
    </main>
  );
};

export default ProjectView;
