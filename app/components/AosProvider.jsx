'use client';
import { useEffect } from 'react';

export default function AosProvider({ children }) {
  useEffect(() => {
    const initAos = async () => {
      const AOS = (await import('aos')).default;
      await import('aos/dist/aos.css');
      AOS.init({ once: true, offset: 50, duration: 800, easing: 'ease-out-cubic' });
    };
    initAos();
  }, []);

  return <>{children}</>;
}
