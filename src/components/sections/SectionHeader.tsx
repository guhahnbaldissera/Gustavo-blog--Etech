import { motion } from "framer-motion";
import { ReactNode } from "react";

const ease = [0.32, 0.72, 0, 1] as const;

interface Props {
  eyebrow: string;
  title: string;
  count?: string;
  children?: ReactNode;
}

export function SectionHeader({ eyebrow, title, count, children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease }}
      className="mb-12"
    >
      <div className="flex items-baseline justify-between border-b border-border pb-4 mb-8">
        <h2 className="eyebrow">{eyebrow}</h2>
        {count && (
          <span className="text-[10px] text-muted-foreground font-mono">{count}</span>
        )}
      </div>
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance max-w-3xl">
        {title}
      </h3>
      {children && <div className="mt-4 max-w-2xl text-muted-foreground text-pretty">{children}</div>}
    </motion.div>
  );
}
