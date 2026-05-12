import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import interestelar from "@/assets/interestelar.jpg";
import inception from "@/assets/inception.jpg";
import fifa from "@/assets/fifa18.jpg";
import rdr2 from "@/assets/rdr2.jpg";
import nba from "@/assets/nba2k24.jpg";

const ease = [0.32, 0.72, 0, 1] as const;

const movies = [
  {
    name: "Interestelar",
    note: "A busca pelo desconhecido",
    img: interestelar,
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    name: "A Origem",
    note: "A arquitetura das ideias",
    img: inception,
    span: "lg:col-span-1 lg:row-span-2",
  },
];

const games = [
  { name: "FIFA 18", tag: "Competitivo", img: fifa },
  { name: "Red Dead Redemption 2", tag: "Cinematográfico", img: rdr2 },
  { name: "NBA 2K24", tag: "Estratégico", img: nba },
];

const passions = [
  "Academia",
  "Tecnologia",
  "Aprender coisas novas",
  "Livros de conhecimento",
];

function MediaCard({
  img,
  name,
  note,
  className = "",
}: {
  img: string;
  name: string;
  note: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease }}
      className={`group relative overflow-hidden rounded-3xl border border-border bg-secondary/30 ${className}`}
    >
      <img
        src={img}
        alt={name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
      <div className="relative h-full min-h-[260px] flex flex-col justify-end p-6">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          {note}
        </span>
        <h4 className="mt-2 text-2xl font-bold tracking-tight">{name}</h4>
      </div>
    </motion.div>
  );
}

export function Hobbies() {
  return (
    <section id="hobbies" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Hobbies & Cultura"
        title="O que move minha mente fora da sala de aula."
      />

      {/* Cinema */}
      <div className="mb-6 flex items-baseline justify-between">
        <span className="eyebrow">Cinema</span>
        <span className="font-mono text-[10px] text-muted-foreground">(02_FILMES)</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-16">
        <MediaCard
          img={movies[0].img}
          name={movies[0].name}
          note={movies[0].note}
          className="lg:col-span-2 min-h-[360px]"
        />
        <MediaCard
          img={movies[1].img}
          name={movies[1].name}
          note={movies[1].note}
          className="min-h-[360px]"
        />
      </div>

      {/* Gaming */}
      <div className="mb-6 flex items-baseline justify-between">
        <span className="eyebrow">Gaming</span>
        <span className="font-mono text-[10px] text-muted-foreground">(03_TÍTULOS)</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {games.map((g, i) => (
          <motion.div
            key={g.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-secondary/30"
          >
            <div className="aspect-[4/5] relative">
              <img
                src={g.img}
                alt={g.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                  {g.tag}
                </span>
                <h4 className="mt-2 text-xl font-bold tracking-tight">{g.name}</h4>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mindset */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease }}
        className="glass-card glass-card-hover rounded-3xl p-8 md:p-12 relative overflow-hidden"
      >
        <div className="absolute -bottom-24 -right-24 size-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="eyebrow">Mindset</span>
            <p className="text-2xl md:text-3xl font-bold leading-tight mt-4 text-pretty">
              Sou movido por <span className="text-accent">curiosidade</span>, livros
              de conhecimento e a disciplina da rotina.
            </p>
          </div>
          <div>
            <div className="flex flex-wrap gap-2">
              {passions.map((p) => (
                <span
                  key={p}
                  className="px-3 py-1.5 rounded-full bg-secondary/60 border border-border text-xs font-medium"
                >
                  {p}
                </span>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-border">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Primeiro livro lido
              </span>
              <p className="text-foreground italic mt-1">Extraordinário</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
