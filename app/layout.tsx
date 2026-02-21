import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const satoshi = localFont({
  src: [
    {
      path: '../fonts/Satoshi-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Satoshi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
});

export const metadata: Metadata = {
  title: 'Kalobtand X Coffee | Luxury Sensory Destination',
  description: 'Tempat di mana waktu melambat, ide mengalir, dan setiap cangkir diperlakukan seperti karya seni.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${satoshi.variable}`}> 
      <body className="bg-[#0D0B0A] text-[#E8C9A9] antialiased"> 
        {children}
      </body>
    </html>
  );
}