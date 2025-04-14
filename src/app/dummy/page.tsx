"use client";
import { ContactCard } from "@/components/ContactCard";

const Page = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center gap-5 bg-black">
      <ContactCard
        className="rounded-lg bg-transparent text-white border-2 border-white text-lg"
        text="LinkedIn"
        image="/linkedin-logo.png"
      />
      <ContactCard
        className="rounded-lg bg-transparent text-white border-2 border-white text-lg"
        text="GitHub"
        image="/github-logo.svg"
      />
    </div>
  );
};

export default Page;
