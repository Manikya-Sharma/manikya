import Heading from "@/components/Heading";

/*

Sections

- Small intro
- Education
- Experience
- Interests

*/

const Page = () => {
  return (
    <div>
      <Heading>About me</Heading>
      <section id="intro"></section>
      <section id="education"></section>
      <section id="experience"></section>
      <section id="interests"></section>
    </div>
  );
};

export default Page;
