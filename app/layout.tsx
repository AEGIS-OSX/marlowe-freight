import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Marlowe Freight | Cargo Insurance for Truckers',
  description: 'Marlowe Freight protects carriers and brokers with instant cargo insurance. Get coverage in minutes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
