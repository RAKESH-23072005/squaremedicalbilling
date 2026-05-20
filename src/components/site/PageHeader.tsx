export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-6 py-20 text-center">
      <h1 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
        {title}
      </h1>
      {subtitle && <p className="page-tagline mt-4 text-sm text-gray-300 md:text-base">{subtitle}</p>}
    </section>
  );
}
