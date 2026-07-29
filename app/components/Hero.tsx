import React from 'react';

const FALLBACK_TERMINAL_COUNT = 847;

export default function Hero() {
  const terminalCount = FALLBACK_TERMINAL_COUNT;

  return (
    <section className="hero">
      <h1>Marlowe Freight</h1>
      <p>Operating {terminalCount} terminals across North America.</p>
    </section>
  );
}
