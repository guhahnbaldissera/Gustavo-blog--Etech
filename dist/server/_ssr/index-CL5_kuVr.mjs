import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { m as motion, A as AnimatePresence, u as useScroll, a as useTransform } from "../_libs/framer-motion.mjs";

import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/unenv.mjs";


const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#conquistas", label: "Conquistas" },
  { href: "#hobbies", label: "Hobbies" }
];
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.nav,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] },
      className: `fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${scrolled ? "bg-background/70 border-b border-border backdrop-blur-md" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#hero", className: "font-mono text-xs tracking-widest text-accent uppercase", children: "G. Baldissera — 2026" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex gap-8 text-[11px] uppercase tracking-widest font-medium text-muted-foreground", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: l.href,
              className: "hover:text-foreground transition-colors duration-300",
              children: l.label
            },
            l.href
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setOpen((v) => !v),
              className: "md:hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
              "aria-label": "Menu",
              children: open ? "Fechar" : "Menu"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] },
            className: "md:hidden overflow-hidden border-t border-border bg-background/90 backdrop-blur-md",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-6 flex flex-col gap-4", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: l.href,
                onClick: () => setOpen(false),
                className: "text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground",
                children: l.label
              },
              l.href
            )) })
          }
        ) })
      ]
    }
  );
}
const ease$6 = [0.32, 0.72, 0, 1];
function Hero() {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      ref,
      id: "hero",
      className: "relative min-h-[100svh] flex items-center px-6 max-w-7xl mx-auto pt-32 pb-24",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: { y, opacity }, className: "w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 16 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, ease: ease$6 },
              className: "flex items-center gap-3 mb-8",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-accent animate-pulse-soft" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "Portfólio Pessoal · 2026" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.h1,
            {
              initial: { opacity: 0, y: 24 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 1, ease: ease$6, delay: 0.15 },
              className: "text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-balance mb-12",
              children: [
                "GUSTAVO LUIZ ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "HAHN" }),
                " BALDISSERA"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.p,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.9, ease: ease$6, delay: 0.35 },
                className: "text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed mb-8",
                children: [
                  "Estudante de Ciência e Tecnologia na",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: "UFSC Joinville" }),
                  ", com interesse em engenharia, tecnologia, design e desenvolvimento de projetos que unem criatividade e raciocínio lógico."
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.9, ease: ease$6, delay: 0.5 },
                className: "flex flex-wrap gap-3",
                children: ["Bacharelado C&T", "Joinville, SC", "19 anos"].map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "px-4 py-2 glass-card rounded-full text-xs font-mono tracking-wider uppercase",
                    children: tag
                  },
                  tag
                ))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 1.2, duration: 1 },
            className: "absolute bottom-10 right-6 hidden md:flex items-center gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "Role para explorar" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-px bg-gradient-to-b from-accent to-transparent" })
            ]
          }
        )
      ]
    }
  );
}
const ease$5 = [0.32, 0.72, 0, 1];
function SectionHeader({ eyebrow, title, count, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 0.8, ease: ease$5 },
      className: "mb-12",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between border-b border-border pb-4 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "eyebrow", children: eyebrow }),
          count && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground font-mono", children: count })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance max-w-3xl", children: title }),
        children && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 max-w-2xl text-muted-foreground text-pretty", children })
      ]
    }
  );
}
const ease$4 = [0.32, 0.72, 0, 1];
const facts = [
  { label: "Idade", value: "19 anos" },
  { label: "Cidade", value: "Joinville, SC" },
  { label: "Universidade", value: "UFSC" },
  { label: "Curso", value: "Ciência e Tecnologia" }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "sobre", className: "py-32 px-6 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Sobre Mim", title: "Minha trajetória e interesses." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.9, ease: ease$4 },
          className: "lg:col-span-7 glass-card glass-card-hover rounded-3xl p-8 sm:p-10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg text-foreground/90 leading-relaxed text-pretty mb-6", children: [
              "Estudei no ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: "Colégio dos Santos Anjos" }),
              "durante toda a minha trajetória escolar. Atualmente curso",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: "Bacharelado em Ciência e Tecnologia" }),
              " na UFSC Joinville, onde desenvolvo conhecimentos em matemática, programação, engenharia e resolução de problemas."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-pretty", children: "Tenho grande interesse por tecnologia e engenharia, áreas que me motivam a aprender constantemente e buscar soluções para diferentes desafios. Também valorizo o esporte e a disciplina, que considero importantes para o desenvolvimento pessoal e profissional." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.9, ease: ease$4, delay: 0.1 },
          className: "lg:col-span-5 grid grid-cols-2 gap-3",
          children: facts.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "glass-card glass-card-hover rounded-2xl p-5 flex flex-col justify-between min-h-[120px]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: f.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base sm:text-lg font-semibold tracking-tight", children: f.value })
              ]
            },
            f.label
          ))
        }
      )
    ] })
  ] });
}
const ease$3 = [0.32, 0.72, 0, 1];
const events = [
  {
    year: "17 / 04 / 2007",
    title: "Nascimento",
    desc: "O ponto de partida — Joinville, Santa Catarina."
  },
  {
    year: "2008 — 2025",
    title: "Colégio dos Santos Anjos",
    desc: "Toda a formação básica e fundamental. Base de disciplina, leitura e curiosidade científica que moldaram o resto da trajetória."
  },
  {
    year: "Nov 2025 — Mar 2026",
    title: "Engenharia de Moldes",
    desc: "Primeira experiência profissional em uma empresa de engenharia de moldes — contato real com indústria, prazos e processos técnicos."
  },
  {
    year: "Mar 2026 — Hoje",
    title: "UFSC Joinville · C&T",
    desc: "Bacharelado em Ciência e Tecnologia. Construindo a próxima fronteira entre engenharia, software e ambição."
  },
  {
    year: "Em andamento",
    title: "Processo de Trainees · ETECH Jr.",
    desc: "Em processo seletivo da ETECH Jr. — A melhor empresa júnior da UFSC e do Brasil."
  }
];
function Timeline() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "trajetoria", className: "py-32 px-6 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Trajetória",
        title: "Uma linha do tempo construída por estudo, esporte e ciência.",
        count: `(${String(events.length).padStart(2, "0")}_MARCOS)`
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent md:-translate-x-px" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-10", children: events.map((e, i) => {
        const left = i % 2 === 0;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 24 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-80px" },
            transition: { duration: 0.7, ease: ease$3, delay: i * 0.05 },
            className: "relative md:grid md:grid-cols-2 md:gap-12 pl-12 md:pl-0",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-1/2 top-6 size-3 rounded-full bg-accent ring-4 ring-accent/15 md:-translate-x-1/2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: left ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card glass-card-hover rounded-2xl p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-accent block mb-2", children: e.year }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xl font-bold tracking-tight mb-2", children: e.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-pretty", children: e.desc })
              ] }) })
            ]
          },
          e.title
        );
      }) })
    ] })
  ] });
}
const ease$2 = [0.32, 0.72, 0, 1];
const awards = [
  {
    year: "2025",
    rank: "1º",
    title: "Olimpíada Brasileira de Astronomia",
    desc: "Medalha de ouro na OBA 2025 — competição nacional de astronomia e astronáutica."
  },
  {
    year: "2024",
    rank: "2º",
    title: "Olimpíada Brasileira de Astronomia",
    desc: "Medalha de prata na OBA 2024 — excelência em ciências espaciais."
  },
  {
    year: "2025",
    rank: "3º",
    title: "Prêmio Jovem Autor Joinville",
    desc: "Reconhecimento literário pela escrita criativa e originalidade."
  },
  {
    year: "JESC",
    rank: "🏆",
    title: "Campeão de Basquete — Microrregional & Regional",
    desc: "Título nos Jogos Escolares de Santa Catarina representando o colégio."
  }
];
function Awards() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "conquistas", className: "py-32 px-6 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Conquistas & Premiações",
        title: "Resultados que reforçam disciplina, foco e versatilidade.",
        count: `(${String(awards.length).padStart(2, "0")}_TOTAL)`
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: awards.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.7, ease: ease$2, delay: i * 0.08 },
        className: "glass-card glass-card-hover rounded-2xl p-6 group relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-accent", children: a.year }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-black tracking-tighter text-foreground/80 group-hover:text-accent transition-colors", children: a.rank })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-bold tracking-tight mb-2 leading-snug", children: a.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground text-pretty", children: a.desc })
        ]
      },
      a.title + a.year
    )) })
  ] });
}
const url$4 = "/__l5e/assets-v1/cc074517-7355-45d7-a66e-ac31613ec6a9/camp-nou.jpg";
const campNouAsset = {
  url: url$4
};
const url$3 = "/__l5e/assets-v1/356be091-1868-420a-8ae0-2e7687ca6e68/chase-center.jpg";
const chaseCenterAsset = {
  url: url$3
};
const ease$1 = [0.32, 0.72, 0, 1];
function Sports() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "esportes", className: "py-32 px-6 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Esportes",
        title: "Esporte e desenvolvimento pessoal.",
        children: "Basquete e futebol moldam minha mentalidade competitiva — disciplina coletiva, leitura de jogo e resiliência aplicadas dentro e fora da quadra."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.8, ease: ease$1 },
          className: "lg:col-span-2 group relative overflow-hidden rounded-3xl border border-border bg-secondary/30 min-h-[320px]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: chaseCenterAsset.url,
                alt: "Chase Center — arena de basquete",
                loading: "lazy",
                className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 ring-1 ring-inset ring-white/5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full p-10 flex flex-col justify-between min-h-[320px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Esporte Principal" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-4xl sm:text-5xl font-black tracking-tighter mt-4", children: "Basquete" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-md text-pretty", children: "A modalidade contribuiu muito para eu desenvolver raciocínio estratégico, concentração e tomada de decisões." })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.8, ease: ease$1, delay: 0.1 },
          className: "group relative overflow-hidden rounded-3xl border border-border bg-secondary/30 min-h-[320px]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: campNouAsset.url,
                alt: "Camp Nou — estádio do FC Barcelona",
                loading: "lazy",
                className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 ring-1 ring-inset ring-white/5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full p-8 flex flex-col justify-between min-h-[320px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Paixão Coletiva" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-3xl font-black tracking-tighter mt-4", children: "Futebol" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-pretty text-sm", children: "Futebol é um dos esportes que mais acompanho e pratico. Gosto do trabalho em equipe, da competitividade e da dinâmica que o esporte proporciona." })
            ] })
          ]
        }
      )
    ] })
  ] });
}
const interestelar = "/assets/interestelar-DW5THbh2.jpg";
const url$2 = "/__l5e/assets-v1/9422ef39-86c9-4938-bbd3-383e50fc785e/inception-new.jpg";
const inceptionAsset = {
  url: url$2
};
const url$1 = "/__l5e/assets-v1/64e3f286-0612-41cc-9896-ba9bc40daaa0/fifa-new.jpg";
const fifaAsset = {
  url: url$1
};
const rdr2 = "/assets/rdr2-DbagJuuF.jpg";
const url = "/__l5e/assets-v1/e482b25d-444a-47c4-aa3c-2754dab9dfaa/nba-new.jpg";
const nbaAsset = {
  url
};
const inception = inceptionAsset.url;
const fifa = fifaAsset.url;
const nba = nbaAsset.url;
const ease = [0.32, 0.72, 0, 1];
const movies = [
  {
    name: "Interestelar",
    note: "A busca pelo desconhecido",
    img: interestelar,
    span: "lg:col-span-2 lg:row-span-2"
  },
  {
    name: "A Origem",
    note: "A arquitetura das ideias",
    img: inception,
    span: "lg:col-span-1 lg:row-span-2"
  }
];
const games = [
  { name: "FIFA 18", tag: "Competitivo", img: fifa },
  { name: "Red Dead Redemption 2", tag: "Cinematográfico", img: rdr2 },
  { name: "NBA 2K24", tag: "Estratégico", img: nba }
];
const passions = [
  "Academia",
  "Tecnologia",
  "Aprender coisas novas",
  "Livros de conhecimento"
];
function MediaCard({
  img,
  name,
  note,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: { duration: 0.8, ease },
      className: `group relative overflow-hidden rounded-3xl border border-border bg-secondary/30 ${className}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: img,
            alt: name,
            loading: "lazy",
            className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 ring-1 ring-inset ring-white/5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full min-h-[260px] flex flex-col justify-end p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-accent", children: note }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-2 text-2xl font-bold tracking-tight", children: name })
        ] })
      ]
    }
  );
}
function Hobbies() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "hobbies", className: "py-32 px-6 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        eyebrow: "Hobbies & Cultura",
        title: "O que move minha mente fora da sala de aula."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-baseline justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Cinema" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-muted-foreground", children: "(02_FILMES)" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4 mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        MediaCard,
        {
          img: movies[0].img,
          name: movies[0].name,
          note: movies[0].note,
          className: "lg:col-span-2 min-h-[360px]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        MediaCard,
        {
          img: movies[1].img,
          name: movies[1].name,
          note: movies[1].note,
          className: "min-h-[360px]"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-baseline justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Gaming" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-muted-foreground", children: "(03_TÍTULOS)" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16", children: games.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.7, ease, delay: i * 0.08 },
        className: "group relative overflow-hidden rounded-3xl border border-border bg-secondary/30",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/5] relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: g.img,
              alt: g.name,
              loading: "lazy",
              className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 ring-1 ring-inset ring-white/5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-accent", children: g.tag }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-2 text-xl font-bold tracking-tight", children: g.name })
          ] })
        ] })
      },
      g.name
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.8, ease },
        className: "glass-card glass-card-hover rounded-3xl p-8 md:p-12 relative overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-24 -right-24 size-72 rounded-full bg-accent/10 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid md:grid-cols-2 gap-8 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Mindset" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl md:text-3xl font-bold leading-tight mt-4 text-pretty", children: [
                "Sou movido por ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "curiosidade" }),
                ", livros de conhecimento e a disciplina da rotina."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: passions.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "px-3 py-1.5 rounded-full bg-secondary/60 border border-border text-xs font-medium",
                  children: p
                },
                p
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 pt-6 border-t border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: "Primeiro livro lido" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground italic mt-1", children: "Extraordinário" })
              ] })
            ] })
          ] })
        ]
      }
    )
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "py-12 border-t border-border mt-16 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-muted-foreground", children: "© 2026 GUSTAVO LUIZ HAHN BALDISSERA" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground/70 mt-1 font-mono uppercase tracking-widest", children: "UFSC Joinville · Ciência e Tecnologia" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.linkedin.com/in/gustavo-luiz-583a16308", target: "_blank", rel: "noopener noreferrer", className: "hover:text-accent transition-colors", children: "LinkedIn" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/guhahnbaldissera", target: "_blank", rel: "noopener noreferrer", className: "hover:text-accent transition-colors", children: "GitHub" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/gustavo.hhn/", target: "_blank", rel: "noopener noreferrer", className: "hover:text-accent transition-colors", children: "Instagram" })
    ] })
  ] }) });
}
function BackgroundFx() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 overflow-hidden pointer-events-none -z-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-[20%] -left-[10%] size-[600px] bg-accent/10 rounded-full blur-[120px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[5%] -right-[10%] size-[500px] bg-accent/5 rounded-full blur-[100px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 opacity-[0.04]",
        style: {
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)"
        }
      }
    )
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen bg-background text-foreground grain", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BackgroundFx, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Timeline, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Awards, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sports, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Hobbies, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] })
  ] });
}
export {
  Index as component
};
