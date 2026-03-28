'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { APIGetALlActiveOffers } from "@/api/offer";

function formatDate(dateStr) {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]+>/g, '').trim();
}

export default function OffersPage() {
  const [offers, setOffers] = useState([]);
  const [totalOffers, setTotalOffers] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [expanded, setExpanded] = useState({});
  const limit = 6;

  const fetchOffers = async () => {
    try {
      setLoading(true);
      const res = await APIGetALlActiveOffers(page, limit);
      const data = res?.data?.data || res?.data;
      setOffers(Array.isArray(data) ? data : []);
      setTotalOffers(res?.data?.total || res?.total || 0);
    } catch (err) {
      console.error("Failed to fetch offers:", err);
      setOffers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, [page]);

  const toggleDescription = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const totalPages = Math.ceil(totalOffers / limit);

  return (
    <>
      <Navbar />
      <PageHeader
        title="Exclusive Offers"
        subtitle="Save big on your worldwide logistics with AG Express."
        gradient="from-orange-700 via-orange-500 to-orange-400"
      />

      <div className="bg-gray-50 min-h-screen py-20 pb-0 relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-orange-200 to-transparent blur-3xl opacity-40" />
          <div className="absolute top-[40%] -left-[10%] w-[30%] h-[40%] rounded-full bg-gradient-to-tr from-orange-100 to-transparent blur-3xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section heading */}
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block bg-orange-50 text-orange-500 text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full mb-4 border border-orange-100">
              Limited Time Deals
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-black mb-4">
              Our Latest <span className="text-orange-500">Offers</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Discover our most exciting deals and discounts available right now.
            </p>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32">
              <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 rounded-full border-4 border-orange-100" />
                <div className="absolute inset-0 rounded-full border-4 border-orange-500 border-t-transparent animate-spin" />
              </div>
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Loading offers...</p>
            </div>
          ) : (!offers || offers.length === 0) ? (
            /* Empty State */
            <div className="text-center py-32 bg-white rounded-[3rem] shadow-sm border border-gray-100 mb-20 px-8 opacity-100 transition-opacity duration-500">
              <div className="text-orange-100 text-8xl mb-8">
                <i className="fa-solid fa-tags" />
              </div>
              <h2 className="text-3xl font-black text-black mb-4">No Active Offers Currently</h2>
              <p className="text-gray-500 max-w-md mx-auto text-lg">
                Please check back later for our seasonal discounts and promotional rates for international shipping.
              </p>
            </div>
          ) : (
            <>
              {/* Offers Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {offers.map((offer, idx) => {
                  const startDate = formatDate(offer.startDate);
                  const endDate = formatDate(offer.endDate);
                  const plainText = stripHtml(offer.description);
                  const isLong = plainText.length > 200;
                  const isExpanded = expanded[offer.id];

                  return (
                    <div
                      key={offer.id}
                      className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 flex flex-col relative group"
                      data-aos="fade-up"
                      data-aos-delay={idx * 60}
                    >
                      {/* Discount badge */}
                      {Number(offer.discount) > 0 && (
                        <div className="absolute top-5 right-5 z-10 bg-orange-500 text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg shadow-orange-500/30">
                          {offer.discount}% OFF
                        </div>
                      )}

                      {/* Top accent bar */}
                      <div className="h-1.5 w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600" />

                      <div className="p-8 flex flex-col flex-1">
                        {/* Icon */}
                        <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-orange-500 transition-colors duration-300">
                          <i className="fa-solid fa-tag text-orange-500 group-hover:text-white transition-colors duration-300 text-lg" />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-black text-black mb-3 group-hover:text-orange-500 transition-colors uppercase tracking-wide leading-tight">
                          {offer.title}
                        </h3>

                        {/* Description */}
                        {offer.description && (
                          <div className="mb-4 flex-1">
                            <div
                              className={`text-sm text-gray-500 leading-relaxed ${!isExpanded && isLong ? 'line-clamp-4' : ''}`}
                              dangerouslySetInnerHTML={{ __html: offer.description.replace(/\n/g, '<br/>') }}
                            />
                            {isLong && (
                              <button
                                onClick={() => toggleDescription(offer.id)}
                                className="text-orange-500 font-bold mt-2 text-xs uppercase tracking-widest hover:underline"
                              >
                                {isExpanded ? 'Show less ↑' : 'Read more ↓'}
                              </button>
                            )}
                          </div>
                        )}

                        {/* Period */}
                        {(startDate || endDate) && (
                          <div className="flex items-center gap-2 text-xs text-gray-400 border-t border-gray-50 pt-4 mt-auto mb-5">
                            <i className="fa-regular fa-calendar text-orange-400" />
                            <span>
                              <span className="font-bold text-orange-500">Valid: </span>
                              {startDate}{endDate ? ` – ${endDate}` : ''}
                            </span>
                          </div>
                        )}

                        {/* CTA */}
                        <Link
                          href={`/offers/${offer.id}`}
                          className="inline-flex items-center justify-center gap-2 bg-orange-50 text-orange-500 font-black text-xs uppercase tracking-widest px-6 py-3 rounded-2xl hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm mt-auto"
                        >
                          View Offer Details
                          <i className="fa-solid fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="pb-20 flex justify-center gap-3">
                  <button
                    onClick={() => setPage(prev => Math.max(1, prev - 1))}
                    disabled={page === 1}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all bg-white border ${
                      page === 1
                        ? 'text-gray-200 border-gray-50 cursor-not-allowed'
                        : 'text-gray-600 border-gray-100 hover:border-orange-500 hover:text-orange-500 hover:shadow-lg shadow-sm'
                    }`}
                  >
                    <i className="fa-solid fa-chevron-left" />
                  </button>

                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setPage(i + 1)}
                      className={`w-14 h-14 rounded-2xl font-black transition-all ${
                        page === i + 1
                          ? 'bg-orange-500 text-white shadow-xl shadow-orange-500/30 scale-110'
                          : 'bg-white text-gray-400 border border-gray-100 hover:border-orange-500 hover:text-orange-500 shadow-sm'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => setPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={page === totalPages}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all bg-white border ${
                      page === totalPages
                        ? 'text-gray-200 border-gray-50 cursor-not-allowed'
                        : 'text-gray-600 border-gray-100 hover:border-orange-500 hover:text-orange-500 hover:shadow-lg shadow-sm'
                    }`}
                  >
                    <i className="fa-solid fa-chevron-right" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
