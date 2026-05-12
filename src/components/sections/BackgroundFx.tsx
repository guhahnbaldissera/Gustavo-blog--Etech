export function BackgroundFx() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-0">
      <div className="absolute -top-[20%] -left-[10%] size-[600px] bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[5%] -right-[10%] size-[500px] bg-accent/5 rounded-full blur-[100px]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
    </div>
  );
}
