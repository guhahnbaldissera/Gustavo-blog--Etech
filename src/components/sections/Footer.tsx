export function Footer() {
  return (
    <footer className="py-12 border-t border-border mt-16 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <p className="font-mono text-xs text-muted-foreground">
            © 2026 GUSTAVO LUIZ HAHN BALDISSERA
          </p>
          <p className="text-[10px] text-muted-foreground/70 mt-1 font-mono uppercase tracking-widest">
            UFSC Joinville · Ciência e Tecnologia
          </p>
        </div>
        <div className="flex gap-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <a href="https://www.linkedin.com/in/gustavo-luiz-583a16308" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
          <a href="https://github.com/guhahnbaldissera" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
          <a href="https://www.instagram.com/gustavo.hhn/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
