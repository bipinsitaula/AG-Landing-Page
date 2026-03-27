'use client';
import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function TrackingPage() {
  const [trackingInput, setTrackingInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [emailModal, setEmailModal] = useState(false);

  function trackParcel() {
    const val = trackingInput.trim().toUpperCase();
    if (val === 'AG798' || val === 'AG123456789') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setShowResult(true);
      }, 800);
    } else {
      alert('Invalid tracking number. Please try entering: AG798');
    }
  }

  return (
    <>
      <Navbar />
      <PageHeader
        title="Track Your Shipment"
        subtitle="Enter your tracking number below to get real-time updates on your parcel's journey."
        gradient="from-orange-500 to-orange-400"
        dotPattern
      >
        <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-white/20 rounded-full backdrop-blur-sm" data-aos="zoom-in">
          <i className="fa-solid fa-box-open text-4xl text-white"></i>
        </div>
      </PageHeader>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 mb-20">
        {/* Search Box */}
        <div className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl border border-gray-100" data-aos="fade-up" data-aos-delay="300">
          <div className="flex flex-col md:flex-row gap-4 relative">
            <div className="absolute top-1/2 left-6 transform -translate-y-1/2 text-gray-400 text-xl md:block hidden">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <input
              type="text"
              value={trackingInput}
              onChange={e => setTrackingInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && trackParcel()}
              placeholder="Enter Tracking Number (e.g. AG798)"
              className="w-full bg-gray-50 border-2 border-gray-100 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none rounded-2xl md:pl-14 px-6 py-5 text-lg font-bold transition text-gray-700 placeholder-gray-400"
            />
            <button
              onClick={trackParcel}
              className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-5 px-10 rounded-2xl transition shadow-lg shadow-orange-500/30 flex-shrink-0 flex items-center justify-center gap-2 text-lg"
            >
              {loading ? <><i className="fa-solid fa-spinner fa-spin"></i> Tracking...</> : <><span>Track Now</span><i className="fa-solid fa-arrow-right"></i></>}
            </button>
          </div>
          <p className="text-sm text-gray-400 font-medium mt-4 ml-2">
            <i className="fa-solid fa-circle-info mr-1 text-orange-400"></i> Multiple tracking numbers can be separated by commas.
          </p>
        </div>

        {/* Tracking Result */}
        {showResult && (
          <div className="mt-12 bg-white rounded-3xl shadow-xl border border-orange-50 p-6 sm:p-10 md:p-12" style={{ animation: 'fadeIn 0.5s ease' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 border-b border-gray-100 pb-8 mb-8">
              <div><p className="text-sm text-orange-500 font-bold mb-1">Tracking Number</p><h2 className="text-2xl font-bold text-gray-900">AG798</h2></div>
              <div><p className="text-sm text-orange-500 font-bold mb-1">Type</p><h2 className="text-2xl font-bold text-gray-900 uppercase">Package</h2></div>
              <div><p className="text-sm text-orange-500 font-bold mb-1">Weight</p><h2 className="text-2xl font-bold text-gray-900">26.11 KG</h2></div>
              <div className="col-span-2 md:col-span-1 border-t md:border-t-0 border-gray-100 pt-4 md:pt-0"><p className="text-sm text-orange-500 font-bold mb-1">Destination</p><h2 className="text-2xl font-bold text-gray-900 uppercase">Birmingham</h2></div>
            </div>

            <div className="flex items-center gap-3 mb-12 bg-gray-50 p-4 rounded-xl border border-gray-100">
              <span className="relative flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-orange-500 border-2 border-white"></span>
              </span>
              <span className="text-lg font-bold text-gray-800">Current Status: <span className="text-orange-500">In Transit</span></span>
            </div>

            <div className="relative mt-8">
              <div className="absolute left-[23px] top-6 bottom-12 w-0.5 bg-gray-200 z-0"></div>
              <div className="absolute left-[23px] top-6 h-[40%] w-0.5 bg-orange-500 z-0 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>

              {[
                { icon: 'fa-file-invoice', label: 'Shipment Created', date: 'Oct 20, 09:15 AM', desc: 'Shipping details were submitted electronically.', done: true },
                { icon: 'fa-warehouse', label: 'Received by HUB', date: 'Oct 20, 10:30 AM', desc: 'Package received at our processing facility.', loc: 'BIRMINGHAM', done: true },
                { icon: 'fa-plane-departure', label: 'In Transit', date: 'Oct 21, 08:15 PM', desc: 'Shipment has left the sorting facility and is in transit.', loc: 'UK Intl Airport', active: true },
                { icon: 'fa-boxes-packing', label: 'Arrived at Destination', date: 'Pending', desc: 'Shipment will be processed at the destination sorting facility.' },
                { icon: 'fa-truck', label: 'Out for Delivery', date: 'Pending', desc: 'Package will be handed over to dispatch.' },
                { icon: 'fa-house-circle-check', label: 'Delivered', date: 'Pending', desc: 'Package delivered to the recipient.' },
              ].map((step, i) => (
                <div key={i} className={`relative z-10 flex items-start ${i < 5 ? 'mb-12' : ''}`}>
                  <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center font-bold ring-4 ring-white relative mt-1 ${step.active ? 'bg-orange-100 text-orange-500 border-2 border-orange-500 animate-pulse' : step.done ? 'bg-orange-500 text-white shadow-md' : 'bg-white border-2 border-gray-200 text-gray-300'}`}>
                    <i className={`fa-solid ${step.icon} text-lg ${step.active ? 'relative left-0.5' : ''}`}></i>
                  </div>
                  <div className={`flex-1 ml-6 relative top-1.5 ${!step.done && !step.active ? 'opacity-60' : ''}`}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                      <h4 className={`text-lg font-bold ${step.active ? 'text-orange-500 font-extrabold' : step.done ? 'text-gray-900' : 'text-gray-400'}`}>{step.label}</h4>
                      <span className={`text-sm font-bold mt-1 sm:mt-0 px-3 py-1 rounded-full ${step.active ? 'text-orange-500 bg-orange-50 border border-orange-100' : step.done ? 'text-gray-400 bg-gray-50 border border-gray-100' : 'text-gray-300'}`}>{step.date}</span>
                    </div>
                    <p className={`text-sm mt-2 font-medium ${step.active ? 'text-gray-900 font-semibold' : step.done ? 'text-gray-600' : 'text-gray-400'}`}>{step.desc}</p>
                    {step.loc && <p className="text-xs text-orange-500 mt-2 font-bold uppercase tracking-wider"><i className="fa-solid fa-location-crosshairs mr-1"></i>{step.loc}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-6 border-t border-gray-100 text-center">
              <button onClick={() => setEmailModal(true)} className="text-orange-500 hover:text-orange-600 font-bold transition flex items-center justify-center gap-2 mx-auto bg-orange-50 px-6 py-3 rounded-full hover:bg-orange-100">
                <i className="fa-regular fa-bell pt-0.5"></i> Get Email Updates for this Shipment
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Email Modal */}
      {emailModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-gray-100 relative">
            <button onClick={() => setEmailModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center transition">
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6 mx-auto">
              <i className="fa-regular fa-envelope text-2xl text-orange-500"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Get Email Updates</h3>
            <p className="text-gray-500 text-sm mb-6 text-center leading-relaxed">Enter your email address to receive real-time notifications about this shipment&apos;s status.</p>
            <div className="mb-5">
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <input type="email" placeholder="you@example.com" className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-50 transition placeholder-gray-400" />
            </div>
            <button onClick={() => { alert('You will receive email updates for this tracking number.'); setEmailModal(false); }} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-4 rounded-xl transition shadow-lg shadow-orange-500/30">
              Subscribe
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
