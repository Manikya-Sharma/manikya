"use client";
import RaisedButton from "@/components/RaisedButton";
import { ArrowRight } from "lucide-react";

const Page = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <RaisedButton onButtonClick={() => console.log("Hi")}>
        Click me <ArrowRight className="inline-block size-10" />
      </RaisedButton>
    </div>
  );
};

export default Page;
