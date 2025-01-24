"use client";
import { motion } from "motion/react";
import SkillTag from "./SkillTag";

const TagGroup = ({
  tags,
  className,
}: {
  tags: Array<string>;
  className?: string;
}) => {
  return (
    <motion.div
      className="flex flex-wrap gap-1 md:gap-2"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.15 } },
      }}
    >
      {tags.map((tag) => (
        <motion.div
          key={tag}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1 },
          }}
        >
          <SkillTag className={className} tagName={tag} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TagGroup;
