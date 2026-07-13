import { ThemeToggle } from "@/components/layout/theme-toggle";

const swatches = [
  { name: "background", className: "bg-background" },
  { name: "surface", className: "bg-surface" },
  { name: "surface-2", className: "bg-surface-2" },
  { name: "primary", className: "bg-primary" },
  { name: "accent", className: "bg-accent" },
] as const;

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col justify-center gap-10 px-6 py-16">
      <header className="flex items-center justify-between">
        <span className="font-display text-2xl font-bold">
          Arif<span className="text-gradient">.</span>
        </span>
        <ThemeToggle />
      </header>

      <div className="flex flex-col gap-4">
        <p className="font-eyebrow text-primary">Design system online</p>
        <h1 className="text-4xl font-bold sm:text-5xl">
          <span className="text-gradient">MD. Arif Rahman</span>
        </h1>
        <p className="text-muted max-w-prose">
          The foundation and design language are in place — tokens, light/dark theming, and the type
          system below. Sections are built one at a time per{" "}
          <code className="text-foreground font-mono">docs/SECTIONS.md</code>. Try the theme toggle.
        </p>
      </div>

      <section aria-label="Color tokens" className="flex flex-wrap gap-3">
        {swatches.map((s) => (
          <div key={s.name} className="flex flex-col items-center gap-2">
            <div className={`border-border h-14 w-14 rounded-md border shadow-sm ${s.className}`} />
            <span className="text-subtle font-mono text-xs">{s.name}</span>
          </div>
        ))}
      </section>

      <section aria-label="Typography" className="border-border flex flex-col gap-2 border-t pt-8">
        <p className="font-display text-xl font-semibold">Space Grotesk — display</p>
        <p className="text-muted font-sans text-base">Inter — body copy for readable prose.</p>
        <p className="text-subtle font-mono text-sm">JetBrains Mono — labels &amp; code</p>
      </section>
    </main>
  );
}
