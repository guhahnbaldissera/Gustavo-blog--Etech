import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const ease = [0.32, 0.72, 0, 1] as const;

const stack = [
  { name: "React", desc: "Interfaces componentizadas e reativas" },
  { name: "Next.js", desc: "Arquitetura full-stack moderna" },
  { name: "TailwindCSS", desc: "Design system utilitário e consistente" },
  { name: "Framer Motion", desc: "Animações cinematográficas e fluidas" },
  { name: "TypeScript", desc: "Robustez e contratos seguros" },
  { name: "Astronomia", desc: "Curiosidade científica como prática" },
];

export function Tech() {
  return (
    <section id="tecnologia" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Tecnologia & Estudos"
        title="O stack que uso para transformar ideias em produtos reais."
      >
        Estudo continuamente — entre o rigor acadêmico da UFSC e a prática diária com
        as ferramentas que definem o estado da arte da web moderna.
      </SectionHeader>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {stack.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease, delay: i * 0.06 }}
            className="glass-card glass-card-hover rounded-2xl p-6 group flex items-start gap-4"
          >
            <span className="font-mono text-xs text-accent mt-1">
              0{i + 1}
            </span>
            <div>
              <h4 className="text-lg font-bold tracking-tight mb-1">{s.name}</h4>
              <p className="text-sm text-muted-foreground text-pretty">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
