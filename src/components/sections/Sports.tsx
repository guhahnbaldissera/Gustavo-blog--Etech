import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import campNouAsset from "@/assets/camp-nou.jpg.asset.json";
import chaseCenterAsset from "@/assets/chase-center.jpg.asset.json";

const ease = [0.32, 0.72, 0, 1] as const;

export function Sports() {
  return (
    <section id="esportes" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Esportes"
        title="Onde corpo e estratégia se encontram."
      >
        Basquete e futebol moldam minha mentalidade competitiva — disciplina coletiva,
        leitura de jogo e resiliência aplicadas dentro e fora da quadra.
      </SectionHeader>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease }}
          className="lg:col-span-2 group relative overflow-hidden rounded-3xl border border-border bg-secondary/30 min-h-[320px]"
        >
          <img
            src={chaseCenterAsset.url}
            alt="Chase Center — arena de basquete"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
          <div className="relative h-full p-10 flex flex-col justify-between min-h-[320px]">
            <div>
              <span className="eyebrow">Esporte Principal</span>
              <h4 className="text-4xl sm:text-5xl font-black tracking-tighter mt-4">Basquete</h4>
            </div>
            <p className="text-muted-foreground max-w-md text-pretty">
              Campeão JESC nas fases microrregional e regional. O esporte que mais
              exige inteligência tática e leitura instantânea — exatamente como engenharia.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="group relative overflow-hidden rounded-3xl border border-border bg-secondary/30 min-h-[320px]"
        >
          <img
            src={campNouAsset.url}
            alt="Camp Nou — estádio do FC Barcelona"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
          <div className="relative h-full p-8 flex flex-col justify-between min-h-[320px]">
            <div>
              <span className="eyebrow">Paixão Coletiva</span>
              <h4 className="text-3xl font-black tracking-tighter mt-4">Futebol</h4>
            </div>
            <p className="text-muted-foreground text-pretty text-sm">
              O esporte do país — estratégia coletiva, ritmo e rivalidade saudável.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
