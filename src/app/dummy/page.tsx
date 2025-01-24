"use client";

import TagGroup from "@/components/TagGroup";

const Page = () => {
  return (
    <div className="h-[150vh] w-full flex items-center justify-center px-10">
      <div className="flex flex-wrap gap-3">
        <TagGroup
          tags={[
            "html",
            "css",
            "tailwindcss",
            "javascript",
            "typescript",
            "react",
            "python",
            "rust",
            "docker",
            "algorithms",
            "data-structures",
            "problem-solving",
          ]}
        />
      </div>
    </div>
  );
};

export default Page;
