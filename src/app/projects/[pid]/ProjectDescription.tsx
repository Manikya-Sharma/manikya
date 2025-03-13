"use client";

import ProjectView from "@/components/ProjectView";
import { projectData } from "@/data/project-info";
import { notFound, usePathname } from "next/navigation";

const ProjectDescription = () => {
  const pathname = usePathname();
  const projectName = pathname.split("/").pop() as string;

  if (!Object.keys(projectData).includes(projectName)) {
    return notFound();
  }

  //@ts-expect-error We have already ensured that the project exists
  const details = projectData[
    projectName
  ] as (typeof projectData)[keyof typeof projectData];

  return (
    <div>
      <ProjectView details={details} projectName={projectName} />
    </div>
  );
};

export default ProjectDescription;
