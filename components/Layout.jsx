export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0B1C1A] text-slate-100 font-sans">
      <header className="w-full py-6 px-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-tight">Instinct Rise</h1>
          <nav className="hidden md:flex gap-8 text-sm text-slate-300">
            <a href="#framework" className="hover:text-white transition">Framework</a>
            <a href="#why" className="hover:text-white transition">Why It Works</a>
            <a href="#apply" className="hover:text-white transition">Apply</a>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="py-10 px-6 border-t border-white/10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Instinct Rise • Built for hunters, not marketers.
      </footer>
    </div>
  );
}
