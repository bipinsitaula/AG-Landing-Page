import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import AosProvider from './components/AosProvider';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const metadata = {
  title: 'AG Express | Worldwide Logistics',
  description: 'AG EXPRESS is your trusted partner offering fast, door-to-door courier solutions to every corner of the world.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={`${plusJakarta.variable} bg-white text-black antialiased selection:bg-orange-500 selection:text-white overflow-x-hidden`}>
        <AosProvider>
          {children}
        </AosProvider>
      </body>
    </html>
  );
}
