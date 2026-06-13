export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-block bg-red-900/30 border border-red-700/50 text-red-400 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Shame-Driven Productivity
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          You Wasted{" "}
          <span className="text-[#58a6ff]">47 Hours</span>{" "}
          on Social Media Last Month.
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          DoomScroll Tracker quantifies every minute lost to infinite feeds, calculates the real productivity cost, and shows you shame metrics you can&apos;t ignore.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
        >
          Start Tracking My Shame — $3/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No judgment. (Well, a little judgment.)</p>
        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl font-black text-red-400">2.4h</div>
            <div className="text-xs text-[#8b949e] mt-1">Avg daily waste</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl font-black text-yellow-400">$38</div>
            <div className="text-xs text-[#8b949e] mt-1">Daily productivity cost</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl font-black text-[#58a6ff]">876h</div>
            <div className="text-xs text-[#8b949e] mt-1">Hours lost per year</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">One Plan. Maximum Shame.</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Tracker</div>
          <div className="text-5xl font-black text-white mb-1">$3</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited platform tracking",
              "Daily shame score & reports",
              "Productivity cost calculator",
              "Weekly email guilt trips",
              "Goal setting & streaks",
              "Export your data anytime"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-green-400 font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors duration-200"
          >
            Get Started — $3/mo
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">Powered by Lemon Squeezy · Secure checkout</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does it track my social media time?</h3>
            <p className="text-sm text-[#8b949e]">You can log sessions manually or connect our lightweight browser extension that automatically detects time spent on Twitter, Instagram, TikTok, Reddit, and more.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How is the productivity cost calculated?</h3>
            <p className="text-sm text-[#8b949e]">We use your hourly rate (or a default knowledge-worker average) multiplied by time wasted, plus a focus-recovery penalty — because every interruption costs more than just the scroll time.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel with one click from your dashboard. No questions, no dark patterns — though we will send one final shame report on your way out.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} DoomScroll Tracker · Built to make you feel bad (so you do better)
      </footer>
    </main>
  );
}
