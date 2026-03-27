'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/about', label: 'About us' },
  { href: '/network', label: 'Network' },
  { href: '/offers', label: 'Offers' },
  { href: '/services', label: 'Services' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/careers', label: 'Careers' },
  { href: '/partner', label: 'Become a corporate partner' },
];

export default function Navbar({ onRequestQuote }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40 border-b border-orange-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image src="/logo-ag.png" alt="AG Express Logo" width={160} height={40} className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop */}
          <div className="hidden xl:flex space-x-5 items-center">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`font-semibold text-sm transition whitespace-nowrap ${pathname === href ? 'text-orange-500 font-bold' : 'text-gray-600 hover:text-orange-500'}`}
              >
                {label}
              </Link>
            ))}
            <button
              onClick={onRequestQuote}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition shadow-lg shadow-orange-500/30 hover:-translate-y-0.5 ml-2 whitespace-nowrap"
            >
              Request Quote
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="xl:hidden flex items-center">
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-orange-500 text-2xl focus:outline-none">
              <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-orange-100 absolute w-full shadow-xl z-50">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col text-center max-h-screen overflow-y-auto">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-3 font-semibold rounded-lg transition ${pathname === href ? 'text-orange-500 bg-orange-50' : 'text-gray-600 hover:text-orange-500 hover:bg-orange-50'}`}
              >
                {label}
              </Link>
            ))}
            <button
              onClick={() => { setMobileOpen(false); onRequestQuote?.(); }}
              className="mt-4 w-full bg-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-orange-500/30"
            >
              Request Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
