import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const ease = [0.32, 0.72, 0, 1] as const;

const events = [
  {
    year: "Início",
    title: "Colégio dos Santos Anjos",
    desc: "Toda a formação básica e fundamental — base de disciplina, leitura e curiosidade científica.",
  },
  {
    year: "2024",
    title: "Medalha de Prata — OBA",
    desc: "2º lugar na Olimpíada Brasileira de Astronomia e Astronáutica.",
  },
  {
    year: "2024",
    title: "Campeão JESC — Basquete",
    desc: "Título nas fases microrregional e regional dos Jogos Escolares.",
  },
  {
    year: "2025",
    title: "Medalha de Ouro — OBA",
    desc: "1º lugar na Olimpíada Brasileira de Astronomia 2025.",
  },
  {
    year: "2025",
    title: "Prêmio Jovem Autor Joinville",
    desc: "3º lugar — reconhecimento pela escrita e criatividade literária.",
  },
  {
    year: "Hoje",
    title: "UFSC Joinville",
    desc: "Bacharelado em Ciência e Tecnologia. Construindo a próxima fronteira.",
  },
];

export function Timeline() {
  return (
    <section id="trajetoria" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Trajetória"
        title="Uma linha do tempo construída por estudo, esporte e ciência."
        count={`(${String(events.length).padStart(2, "0")}_MARCOS)`}
      />

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent md:-translate-x-px" />

        <div className="space-y-10">
          {events.map((e, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease, delay: i * 0.05 }}
                className="relative md:grid md:grid-cols-2 md:gap-12 pl-12 md:pl-0"
              >
                <div className="absolute left-4 md:left-1/2 top-6 size-3 rounded-full bg-accent ring-4 ring-accent/15 md:-translate-x-1/2" />

                <div className={left ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}>
                  <div className="glass-card glass-card-hover rounded-2xl p-6">
                    <span className="font-mono text-xs text-accent block mb-2">{e.year}</span>
                    <h4 className="text-xl font-bold tracking-tight mb-2">{e.title}</h4>
                    <p className="text-sm text-muted-foreground text-pretty">{e.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
