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
      <SectionHeader eyebrow="Sobre Mim" title="Curiosidade analítica como pilar de tudo que construo." />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
          className="lg:col-span-7 glass-card glass-card-hover rounded-3xl p-8 sm:p-10"
        >
          <p className="text-lg text-foreground/90 leading-relaxed text-pretty mb-6">
            Estudei toda minha vida no <span className="text-foreground font-semibold">Colégio dos Santos Anjos</span>,
            uma base sólida que moldou minha disciplina e curiosidade. Hoje, curso{" "}
            <span className="text-foreground font-semibold">Bacharelado em Ciência e Tecnologia</span> na
            UFSC Joinville, onde transformo abstrações em sistemas — e perguntas em respostas.
          </p>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            Vejo tecnologia como linguagem: ela conecta lógica, criatividade e impacto.
            Estudo com a mesma intensidade com que treino — buscando a próxima fronteira,
            seja em código, ciência, esporte ou pensamento crítico.
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
