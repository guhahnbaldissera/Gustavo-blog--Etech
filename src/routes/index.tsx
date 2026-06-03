import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { Awards } from "@/components/sections/Awards";
import { Sports } from "@/components/sections/Sports";
import { Hobbies } from "@/components/sections/Hobbies";
import { Footer } from "@/components/sections/Footer";
import { BackgroundFx } from "@/components/sections/BackgroundFx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gustavo Luiz Hahn Baldissera — Portfólio Pessoal" },
      {
        name: "description",
        content:
          "Portfólio de Gustavo Luiz Hahn Baldissera — estudante de Ciência e Tecnologia na UFSC Joinville. Conquistas, trajetória, esportes e tecnologia.",
      },
      { property: "og:title", content: "Gustavo Luiz Hahn Baldissera — Portfólio" },
      {
        property: "og:description",
        content:
          "Acadêmico de Ciência e Tecnologia na UFSC Joinville. Medalhista da OBA, campeão JESC e apaixonado por tecnologia.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground grain">
      <BackgroundFx />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <About />
          <Timeline />
          <Awards />
          <Sports />
          
          <Hobbies />
        </main>
        <Footer />
      </div>
    </div>
  );
}
