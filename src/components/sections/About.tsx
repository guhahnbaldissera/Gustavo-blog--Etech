import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const ease = [0.32, 0.72, 0, 1] as const;

const facts = [
  { label: "Idade", value: "19 anos" },
  { label: "Cidade", value: "Joinville, SC" },
  { label: "Universidade", value: "UFSC" },
  { label: "Curso", value: "Ciência e Tecnologia" },
];

export function About() {
  return (
    <section id="sobre" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeader eyebrow="Sobre Mim" title="Minha trajetória e interesses." />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
          className="lg:col-span-7 glass-card glass-card-hover rounded-3xl p-8 sm:p-10"
        >
          <p className="text-lg text-foreground/90 leading-relaxed text-pretty mb-6">
            Estudei no <span className="text-foreground font-semibold">Colégio dos Santos Anjos</span>
            durante toda a minha trajetória escolar. Atualmente curso{" "}
            <span className="text-foreground font-semibold">Bacharelado em Ciência e Tecnologia</span> na
            UFSC Joinville, onde desenvolvo conhecimentos em matemática, programação, engenharia e resolução de problemas.
          </p>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            Tenho grande interesse por tecnologia e engenharia, áreas que me motivam a aprender
            constantemente e buscar soluções para diferentes desafios. Também valorizo o esporte
            e a disciplina, que considero importantes para o desenvolvimento pessoal e profissional.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
          className="lg:col-span-5 grid grid-cols-2 gap-3"
        >
          {facts.map((f) => (
            <div
              key={f.label}
              className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col justify-between min-h-[120px]"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {f.label}
              </span>
              <span className="text-base sm:text-lg font-semibold tracking-tight">{f.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
