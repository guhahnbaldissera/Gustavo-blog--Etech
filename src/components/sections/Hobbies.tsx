import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const ease = [0.32, 0.72, 0, 1] as const;

const movies = [
  { name: "Interestelar", note: "A busca pelo desconhecido" },
  { name: "A Origem", note: "A arquitetura das ideias" },
  { name: "Homem de Ferro", note: "Engenharia como poder" },
];

const games = [
  { name: "FIFA", tag: "Competitivo" },
  { name: "Red Dead Redemption 2", tag: "Cinematográfico" },
  { name: "NBA 2K24", tag: "Estratégico" },
];

const passions = [
  "Academia",
  "Tecnologia",
  "Aprender coisas novas",
  "Livros de conhecimento",
];

export function Hobbies() {
  return (
    <section id="hobbies" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Hobbies & Jogos"
        title="O que move minha mente fora da sala de aula."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Cinema */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease }}
          className="glass-card glass-card-hover rounded-3xl p-8"
        >
          <span className="eyebrow">Cinema</span>
          <ul className="mt-6 space-y-3">
            {movies.map((m, i) => (
              <li
                key={m.name}
                className="flex items-start justify-between gap-4 border-b border-border pb-3 last:border-0"
              >
                <div className="flex gap-3">
                  <span className="font-mono text-xs text-muted-foreground mt-1">
                    0{i + 1}
                  </span>
                  <span className="font-semibold">{m.name}</span>
                </div>
                <span className="text-xs text-muted-foreground text-right">{m.note}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Gaming */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="glass-card glass-card-hover rounded-3xl p-8"
        >
          <span className="eyebrow">Gaming</span>
          <ul className="mt-6 space-y-3">
            {games.map((g, i) => (
              <li
                key={g.name}
                className="flex items-start justify-between gap-4 border-b border-border pb-3 last:border-0"
              >
                <div className="flex gap-3">
                  <span className="font-mono text-xs text-muted-foreground mt-1">
                    0{i + 1}
                  </span>
                  <span className="font-semibold">{g.name}</span>
                </div>
                <span className="text-xs text-accent">{g.tag}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Mindset */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="glass-card glass-card-hover rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden"
        >
          <div className="absolute -bottom-16 -right-16 size-48 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative">
            <span className="eyebrow">Mindset</span>
            <p className="text-lg leading-snug mt-6 text-pretty">
              Sou movido por <span className="text-accent">curiosidade</span>, livros
              de conhecimento e a disciplina da rotina.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {passions.map((p) => (
                <span
                  key={p}
                  className="px-3 py-1.5 rounded-full bg-secondary/60 border border-border text-xs font-medium"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div className="relative mt-8 pt-6 border-t border-border">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Primeiro livro lido
            </span>
            <p className="text-foreground italic mt-1">Extraordinário</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
