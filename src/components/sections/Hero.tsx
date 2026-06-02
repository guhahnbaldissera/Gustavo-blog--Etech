import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.32, 0.72, 0, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100svh] flex items-center px-6 max-w-7xl mx-auto pt-32 pb-24"
    >
      <motion.div style={{ y, opacity }} className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="size-1.5 rounded-full bg-accent animate-pulse-soft" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Portfólio Pessoal · 2025
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.15 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-balance mb-12"
        >
          GUSTAVO LUIZ <span className="text-accent">HAHN</span> BALDISSERA
        </motion.h1>

        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.35 }}
            className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed mb-8"
          >
            Estudante de Ciência e Tecnologia na{" "}
            <span className="text-foreground font-semibold">UFSC Joinville</span>,
            com interesse em engenharia, tecnologia, design e desenvolvimento de projetos
            que unem criatividade e raciocínio lógico.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            {["Bacharelado C&T", "Joinville, SC", "19 anos"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 glass-card rounded-full text-xs font-mono tracking-wider uppercase"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 right-6 hidden md:flex items-center gap-3"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Role para explorar
        </span>
        <div className="h-8 w-px bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
