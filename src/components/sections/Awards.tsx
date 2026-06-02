import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import redacaoAsset from "@/assets/redacao-jovem-autor.jpg.asset.json";

const ease = [0.32, 0.72, 0, 1] as const;

const awards: Array<{
  year: string;
  rank: string;
  title: string;
  desc: string;
  image?: string;
  imageAlt?: string;
}> = [
  {
    year: "2025",
    rank: "1º",
    title: "Olimpíada Brasileira de Astronomia",
    desc: "Medalha de ouro na OBA 2025 — competição nacional de astronomia e astronáutica.",
  },
  {
    year: "2024",
    rank: "2º",
    title: "Olimpíada Brasileira de Astronomia",
    desc: "Medalha de prata na OBA 2024 — excelência em ciências espaciais.",
  },
  {
    year: "2025",
    rank: "3º",
    title: "Prêmio Jovem Autor Joinville",
    desc: "Reconhecimento literário pela escrita criativa e originalidade.",
    image: redacaoAsset.url,
    imageAlt: "Redação manuscrita — Prêmio Jovem Autor 2025",
  },
  {
    year: "JESC",
    rank: "🏆",
    title: "Campeão de Basquete — Microrregional & Regional",
    desc: "Título nos Jogos Escolares de Santa Catarina representando o colégio.",
  },
];

export function Awards() {
  return (
    <section id="conquistas" className="py-32 px-6 max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Conquistas & Premiações"
        title="Resultados que reforçam disciplina, foco e versatilidade."
        count={`(${String(awards.length).padStart(2, "0")}_TOTAL)`}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {awards.map((a, i) => (
          <motion.article
            key={a.title + a.year}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease, delay: i * 0.08 }}
            className="glass-card glass-card-hover rounded-2xl p-6 group relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />
            <div className="flex items-baseline justify-between mb-6">
              <span className="font-mono text-xs text-accent">{a.year}</span>
              <span className="text-3xl font-black tracking-tighter text-foreground/80 group-hover:text-accent transition-colors">
                {a.rank}
              </span>
            </div>
            <h4 className="text-lg font-bold tracking-tight mb-2 leading-snug">{a.title}</h4>
            <p className="text-sm text-muted-foreground text-pretty">{a.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
