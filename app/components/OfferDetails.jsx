'use client';
import React from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import PageHeader from './PageHeader';

function formatDate(dateStr) {
  if (!dateStr) return null;
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: '2-digit', month: 'long', year: 'numeric',
  });
}

const OfferDetails = ({ offerData }) => {
  if (!offerData) return null;

  const startDate = formatDate(offerData.startDate);
  const endDate = formatDate(offerData.endDate);

  return (
    <>
      <Navbar />
      <PageHeader
        title={offerData.title}
        subtitle={offerData.discount > 0 ? `Save ${offerData.discount}% — Limited Time Offer` : 'Exclusive Offer from AG Express'}
        gradient="from-orange-700 via-orange-500 to-orange-400"
      />

      <div className="bg-gray-50 min-h-screen py-20 pb-0 relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-orange-200 to-transparent blur-3xl opacity-40" />
          <div className="absolute top-[40%] -left-[10%] w-[30%] h-[40%] rounded-full bg-gradient-to-tr from-orange-100 to-transparent blur-3xl opacity-50" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back button */}
          <div className="mb-12" data-aos="fade-up">
            <Link
              href="/offers"
              className="inline-flex items-center gap-3 text-gray-400 hover:text-orange-500 font-black transition-all group text-xs uppercase tracking-widest bg-white px-6 py-3 rounded-2xl shadow-sm border border-gray-50 hover:border-gray-200"
            >
              <i className="fa-solid fa-arrow-left transition-transform group-hover:-translate-x-1" />
              Back to All Offers
            </Link>
          </div>

          <article
            className="bg-white rounded-[3rem] shadow-sm overflow-hidden border border-gray-100 mb-20"
            data-aos="fade-up"
          >
            {/* Offer image if available */}
            {offerData.imageUrl && (
              <div className="relative h-72 md:h-[420px] w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={offerData.imageUrl}
                  alt={offerData.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {Number(offerData.discount) > 0 && (
                  <div className="absolute top-6 right-6 bg-orange-500 text-white text-sm font-black px-5 py-2.5 rounded-full shadow-xl shadow-orange-500/40">
                    {offerData.discount}% OFF
                  </div>
                )}
              </div>
            )}

            {/* Top accent if no image */}
            {!offerData.imageUrl && (
              <div className="relative">
                <div className="h-2 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600" />
                {Number(offerData.discount) > 0 && (
                  <div className="absolute top-4 right-6 bg-orange-500 text-white text-sm font-black px-5 py-2 rounded-full shadow-lg shadow-orange-500/30">
                    {offerData.discount}% OFF
                  </div>
                )}
              </div>
            )}

            <div className="p-8 md:p-16">
              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-black text-black mb-8 leading-tight uppercase tracking-wide">
                {offerData.title}
              </h1>

              {/* Meta info row */}
              {(startDate || endDate || Number(offerData.discount) > 0) && (
                <div className="flex flex-wrap gap-4 mb-12">
                  {Number(offerData.discount) > 0 && (
                    <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-5 py-3 rounded-2xl border border-orange-100">
                      <i className="fa-solid fa-bolt text-sm" />
                      <span className="font-black text-sm">{offerData.discount}% Discount</span>
                    </div>
                  )}
                  {(startDate || endDate) && (
                    <div className="inline-flex items-center gap-2 bg-gray-50 text-gray-600 px-5 py-3 rounded-2xl border border-gray-100">
                      <i className="fa-regular fa-calendar text-orange-400 text-sm" />
                      <span className="font-bold text-sm">
                        {startDate && endDate ? `${startDate} – ${endDate}` : startDate || endDate}
                      </span>
                    </div>
                  )}
                  {offerData.isActive && (
                    <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-5 py-3 rounded-2xl border border-green-100">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="font-black text-sm">Active Now</span>
                    </div>
                  )}
                </div>
              )}

              {/* Offer Content */}
              {offerData.description && (
                <div
                  className="offer-content text-gray-600 leading-relaxed text-lg"
                  dangerouslySetInnerHTML={{ __html: offerData.description.replace(/\n/g, '<br/>') }}
                />
              )}

              {/* CTA Footer */}
              <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">
                    Interested in this offer?
                  </p>
                  <p className="text-lg font-black text-black">Contact us to avail this deal.</p>
                </div>
                <div className="flex gap-3">
                  <Link
                    href="/partner"
                    className="inline-flex items-center gap-2 bg-orange-500 text-white font-black text-xs uppercase tracking-widest px-7 py-4 rounded-2xl hover:bg-orange-600 transition-all duration-300 shadow-xl shadow-orange-500/20 hover:scale-105"
                  >
                    <i className="fa-solid fa-handshake" />
                    Become a Partner
                  </Link>
                  <Link
                    href="/offers"
                    className="inline-flex items-center gap-2 bg-white text-gray-500 font-black text-xs uppercase tracking-widest px-7 py-4 rounded-2xl hover:bg-gray-50 hover:text-orange-500 transition-all duration-300 shadow-sm border border-gray-100"
                  >
                    More Offers
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <Footer />

      <style jsx global>{`
        .offer-content h1, .offer-content h2, .offer-content h3 {
          color: #111827;
          font-weight: 900;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .offer-content h2 { font-size: 1.75rem; }
        .offer-content h3 { font-size: 1.35rem; }
        .offer-content p { margin-bottom: 1.5rem; }
        .offer-content ul { list-style: none; padding-left: 0; margin-bottom: 1.5rem; }
        .offer-content ul li { position: relative; padding-left: 1.75rem; margin-bottom: 0.75rem; }
        .offer-content ul li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: #f97316;
          font-weight: 900;
        }
        .offer-content ol { list-style: decimal; padding-left: 1.5rem; margin-bottom: 1.5rem; }
        .offer-content strong { color: #111827; font-weight: 800; }
        .offer-content a { color: #f97316; text-decoration: underline; font-weight: 700; }
        .offer-content blockquote {
          background: #fdf7f2;
          border-left: 4px solid #f97316;
          padding: 1.5rem 2rem;
          border-radius: 0 1.5rem 1.5rem 0;
          font-style: italic;
          font-weight: 600;
          color: #374151;
          margin: 2rem 0;
        }
      `}</style>
    </>
  );
};

export default OfferDetails;
