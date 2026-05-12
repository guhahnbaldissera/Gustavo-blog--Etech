import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

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
          className="lg:col-span-2 glass-card glass-card-hover rounded-3xl p-10 relative overflow-hidden min-h-[280px] flex flex-col justify-between"
        >
          <div className="absolute -top-20 -right-20 size-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative">
            <span className="eyebrow">Esporte Principal</span>
            <h4 className="text-4xl sm:text-5xl font-black tracking-tighter mt-4">Basquete</h4>
          </div>
          <p className="relative text-muted-foreground max-w-md text-pretty">
            Campeão JESC nas fases microrregional e regional. O esporte que mais
            exige inteligência tática e leitura instantânea — exatamente como engenharia.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="glass-card glass-card-hover rounded-3xl p-8 flex flex-col justify-between min-h-[280px]"
        >
          <div>
            <span className="eyebrow">Paixão Coletiva</span>
            <h4 className="text-3xl font-black tracking-tighter mt-4">Futebol</h4>
          </div>
          <p className="text-muted-foreground text-pretty text-sm">
            O esporte do país — estratégia coletiva, ritmo e rivalidade saudável.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
