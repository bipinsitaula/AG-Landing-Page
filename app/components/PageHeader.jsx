'use client';

export default function PageHeader({ title, subtitle, gradient = 'from-orange-700 to-orange-400', dotPattern = false, children }) {
  return (
    <div className={`bg-gradient-to-r ${gradient} text-white py-24 relative overflow-hidden`}>
      {dotPattern && (
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}
        />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {children}
        {title && <h1 className="text-5xl font-extrabold mb-4" data-aos="zoom-in" suppressHydrationWarning>{title}</h1>}
        {subtitle && <p className="text-orange-100 text-xl max-w-2xl mx-auto" data-aos="fade-up" suppressHydrationWarning>{subtitle}</p>}
      </div>
    </div>
  );
}