import React from 'react';

export default async function Hero() {
  const res = await fetch('https://coverage.marlowe-freight.com/api/v1/terminals/active-count', {
    cache: 'force-cache',
    headers: { Authorization: `Bearer ${process.env.MARLOWE_COVERAGE_API_KEY}` },
  });

  let count = 0;
  try {
    const data = await res.json();
    count = data?.activeTerminals ?? 0;
  } catch {
    count = 0;
  }

  return (
    <section id="hero" className="relative bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Cargo Insurance Built for Truckers
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl">
          Protect every load with instant, affordable coverage. {count.toLocaleString()} active terminals already on Marlowe.
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="#quote"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white hover:bg-emerald-500 transition"
          >
            Get Coverage
          </a>
          <a
            href="#coverage"
            className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-6 py-3 text-base font-semibold text-white hover:border-slate-400 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
