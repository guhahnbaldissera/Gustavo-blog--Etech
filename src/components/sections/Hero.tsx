import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import portraitAsset from "@/assets/gustavo-portrait.png.asset.json";

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
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Texto */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="size-1.5 rounded-full bg-accent animate-pulse-soft" />
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Portfólio Pessoal · 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.15 }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl font-black tracking-tighter leading-[0.85] text-balance mb-12"
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
          </div>

          {/* Retrato */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: 0.2 }}
            className="order-1 lg:order-2 relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none"
          >
            {/* Glow accent */}
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2rem] bg-accent/20 blur-3xl opacity-60"
            />
            {/* Moldura */}
            <div className="relative glass-card rounded-[1.75rem] p-2 overflow-hidden">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <img
                  src={portraitAsset.url}
                  alt="Gustavo Luiz Hahn Baldissera"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                />
                {/* Overlay para integração ao tema dark */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent"
                />
                <div aria-hidden className="absolute inset-0 grain opacity-40 mix-blend-overlay" />

                {/* Etiquetas */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full glass-card backdrop-blur-md">
                  <span className="size-1.5 rounded-full bg-accent animate-pulse-soft" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-foreground/90">
                    Joinville · SC
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                    Retrato · 2026
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent">
                    GLHB
                  </span>
                </div>
              </div>
            </div>
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
