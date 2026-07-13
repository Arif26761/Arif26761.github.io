export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 p-8 text-center">
      <p className="text-foreground/60 font-mono text-sm tracking-widest uppercase">
        Scaffold ready
      </p>
      <h1 className="text-3xl font-semibold sm:text-4xl">MD. Arif Rahman — Portfolio</h1>
      <p className="text-foreground/70 max-w-md">
        Foundation is in place. Sections are built one at a time per{" "}
        <code className="font-mono">docs/SECTIONS.md</code>.
      </p>
    </main>
  );
}
