"use client";

import { useRouter } from "next/navigation";
import RaisedButton from "./RaisedButton";

const GotoLink = ({
  children,
  href,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const router = useRouter();
  return (
    <RaisedButton className={className} onButtonClick={() => router.push(href)}>
      {children}
    </RaisedButton>
  );
};

export default GotoLink;
