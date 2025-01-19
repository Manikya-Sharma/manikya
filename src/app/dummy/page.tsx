"use client";
import ViewPhotos from "@/components/ViewPhotos";

const Page = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <ViewPhotos title="Images" photos={["/globe.svg", "/next.svg"]} />
    </div>
  );
};

export default Page;
