/*

- Linkedin
- GitHub
- Email
- Codeforces
- Leetcode
- Twitter

*/

/*
<div className="h-screen w-screen flex flex-col items-center justify-center">

    </div>

*/

import { ContactCard } from "@/components/ContactCard";
import { ContactForm } from "@/components/ContactForm";
import Heading from "@/components/Heading";
import { figtree } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const Page = () => {
  return (
    <main className="flex flex-col md:flex-row h-screen w-screen px-5 md:px-10 md:gap-6">
      <div className="flex-1 mt-20 md:mt-0 h-full flex flex-col justify-center gap-10">
        <Heading className="h-auto text-5xl md:text-7xl md:place-items-start text-center md:text-start">
          Get In Touch
        </Heading>
        <div
          className={cn(
            "grid grid-cols-2 md:grid-cols-3 w-fit gap-3 mx-auto md:mx-0",
            figtree.className
          )}
        >
          <ContactCard
            className="rounded-lg bg-transparent text-blue-700 border-2 border-blue-400 text-sm sm:text-base md:text-lg max-w-40 bg-blue-50"
            text="LinkedIn"
            image="/linkedin-black.png"
          />

          <ContactCard
            className="rounded-lg bg-transparent text-zinc-700 border-2 border-zinc-400 text-sm sm:text-base md:text-lg max-w-40 bg-zinc-50"
            text="GitHub"
            image="/github-black.png"
          />

          <ContactCard
            className="rounded-lg bg-transparent text-teal-700 border-2 border-teal-400 text-sm sm:text-base md:text-lg max-w-40 bg-teal-50"
            text="Email"
            image="/mail-logo.svg"
          />

          <ContactCard
            className="rounded-lg bg-transparent text-red-700 border-2 border-red-400 text-sm sm:text-base md:text-lg max-w-40 bg-red-50"
            text="Codeforces"
            image="/cf-logo.png"
          />

          <ContactCard
            className="rounded-lg bg-transparent text-yellow-700 border-2 border-yellow-400 text-sm sm:text-base md:text-lg max-w-40 bg-yellow-50"
            text="Leetcode"
            image="/lc-logo.png"
          />

          <ContactCard
            className="rounded-lg bg-transparent text-slate-700 border-2 border-slate-400 text-sm sm:text-base md:text-lg max-w-40 bg-slate-50"
            text="Twitter (X)"
            image="/x-black.png"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <ContactForm />
      </div>
    </main>
  );
};

export default Page;
