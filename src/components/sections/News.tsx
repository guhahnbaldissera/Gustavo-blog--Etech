import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import newsAsset from "@/assets/ultimas-noticias.png.asset.json";

const ease = [0.32, 0.72, 0, 1] as const;

export function News() {
  return (
    <section id="noticias" className="relative py-24 sm:py-32 px-6 max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Notícias"
        title="Últimas notícias sobre mim"
        count="01 / 01"
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease }}
        className="relative mx-auto max-w-md"
      >
        <div
          aria-hidden
          className="absolute -inset-8 rounded-[2rem] bg-accent/15 blur-3xl opacity-70"
        />
        <div className="relative glass-card rounded-[1.5rem] p-2 overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
          <div className="relative aspect-[9/16] overflow-hidden rounded-[1.25rem] bg-black">
            <img
              src={newsAsset.url}
              alt="Montagem de post de notícia sobre Gustavo"
              className="absolute inset-0 w-full h-[112%] object-cover object-bottom"
              loading="lazy"
              style={{ top: "-6%" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
