import StuartInventory from '@/components/StuartInventory';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-red-500 selection:text-white">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto pt-24 pb-12 px-6">
        <div className="inline-block bg-red-950/30 border border-red-500/50 px-4 py-1 rounded-full text-red-500 text-sm font-bold mb-6">
          PREDICTIVE TERRITORY INTELLIGENCE
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8 italic">
          STOP BUYING <span className="text-red-600">LEADS</span>.<br />
          START OWNING <span className="text-white">TERRITORIES</span>.
        </h1>

        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-12 leading-relaxed">
          While your competitors fight over shared Angi leads, we give you the 
          <span className="text-white font-bold"> Mechanical Failure Map </span> 
          of your backyard. Predict replacements 12 months before they happen.
        </p>

        <StuartInventory />

        <div className="flex flex-col md:flex-row gap-4 mt-12">
          <a href="mailto:skaplan@instinctrise.com?subject=Lock My ZIP" 
             className="bg-red-600 hover:bg-red-700 text-white font-black py-5 px-10 rounded-lg text-xl transition-all transform hover:scale-105 text-center">
            LOCK YOUR ZIP EXCLUSIVELY
          </a>
          <div className="flex items-center justify-center text-zinc-500 font-bold px-6">
            $604M Pipeline Mapped
          </div>
        </div>
      </section>

      {/* The Hormozi Frame */}
      <section className="bg-zinc-900 py-24 px-6 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6 uppercase">The Math is Simple</h2>
          <p className="text-zinc-400 text-lg mb-12">
            One average HVAC install (~$15k) pays for <span className="text-white font-bold">13 months</span> of our intelligence. 
            Everything else you close is pure profit. We send you a <span className="text-red-500">Fresh 25</span> drip every Monday morning pre-formatted for ServiceTitan.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-zinc-800 rounded-xl bg-black">
              <div className="text-4xl mb-4">📍</div>
              <h4 className="font-bold mb-2 uppercase">Verified</h4>
              <p className="text-sm text-zinc-500 italic">Government permit data used to map mechanical age.</p>
            </div>
            <div className="p-8 border border-zinc-800 rounded-xl bg-black">
              <div className="text-4xl mb-4">🛡️</div>
              <h4 className="font-bold mb-2 uppercase">Exclusive</h4>
              <p className="text-sm text-zinc-500 italic">One partner per ZIP. No bidding against 5 others.</p>
            </div>
            <div className="p-8 border border-zinc-800 rounded-xl bg-black">
              <div className="text-4xl mb-4">⚙️</div>
              <h4 className="font-bold mb-2 uppercase">Integrated</h4>
              <p className="text-sm text-zinc-500 italic">One-click import into ServiceTitan, JobNimbus, or HCP.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
