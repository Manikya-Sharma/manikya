import ClickLink from "@/components/ClickLink";

const Page = () => {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <ClickLink href="/dummy">
        <div className="w-[60vw] aspect-video rounded-lg bg-zinc-300"></div>
      </ClickLink>
    </div>
  );
};

export default Page;
