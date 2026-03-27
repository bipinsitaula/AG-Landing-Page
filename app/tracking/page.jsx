'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { APIGetShipment } from '@/api/shipments';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ArrowRight, 
  Loader2, 
  Package, 
  MapPin, 
  Bell,
  XCircle,
  Warehouse,
  Truck,
  Home,
  Info,
  X,
  Mail,
  FileText,
  Plane,
  CheckCircle2,
  Clock,
  Box,
  Activity
} from 'lucide-react';

// --- Components Import ---
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function TrackingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // --- State ---
  const [searchTerm, setSearchTerm] = useState('');
  const [searched, setSearched] = useState(false);
  const [data, setData] = useState(null);
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(false);
  const [emailModal, setEmailModal] = useState(false);

  // --- Logic Functions ---
  const notAllowed = [
    "ASSIGNED_TO_BAG",
    "MASTER_AIR_BILL_GENERATED",
    "HOUSE_AIR_BILL_GENERATED",
    "UPDATED",
    "MANIFEST_GENERATED",
  ];

  const getStatusIcon = (status) => {
    const s = status?.toUpperCase() || "";
    if (s.includes("DELIVERED")) return <Home size={18} />;
    if (s.includes("OUT_FOR_DELIVERY") || s.includes("OUT FOR DELIVERY")) return <Activity size={18} />;
    if (s.includes("TRANSIT") || s.includes("DEPARTED") || s.includes("PLANE")) return <Plane size={18} />;
    if (s.includes("WAREHOUSE") || s.includes("HUB") || s.includes("FACILITY")) return <Warehouse size={18} />;
    if (s.includes("PICKED") || s.includes("COLLECTED")) return <Package size={18} />;
    if (s.includes("CREATED") || s.includes("NEW") || s.includes("MANIFEST")) return <FileText size={18} />;
    if (s.includes("ARRIVED")) return <Box size={18} />;
    if (s.includes("PROCESSING") || s.includes("ASSIGNED")) return <Clock size={18} />;
    return <Truck size={18} />;
  };

  const mergeTimeline = (res) => {
    const carrierName = res.shipmentCarrier?.carrier?.name || "Carrier";

    const internal = (res.shipmentStatus || [])
      .filter((st) => !notAllowed.includes(st.status))
      .map((st) => ({
        type: "SYSTEM",
        sourceLabel: "System Update",
        title: st.status.replace(/_/g, " "),
        description: st.description.replace(/_/g, " "),
        location: st?.createdByUser?.branches?.[0]?.branch_name || "—",
        created_at: st.created_at,
        icon: getStatusIcon(st.status),
      }));

    const carrier = (res.shipmentCarrier?.shipmentTrackingEvent || []).map(
      (ev) => ({
        type: "CARRIER",
        sourceLabel: `${carrierName} Update`,
        title: ev.event_state?.replace(/_/g, " ") || "",
        description: ev.event_description,
        location: ev.event_location || "—",
        created_at: ev.event_at,
        icon: getStatusIcon(ev.event_state || ev.event_description),
      })
    );

    const merged = [...internal, ...carrier].sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
    
    setTimeline(merged);
  };

  const fetchData = async (idToFetch) => {
    const id = idToFetch || searchTerm.trim();
    if (!id) return;
    
    // Avoid redundant fetching if we already have the data for this ID
    if (data?.trackingNumber === id && searched && !loading) return;

    setLoading(true);
    setSearched(true);
    
    try {
      const res = await APIGetShipment(id);
      const shipmentData = res?.data || res; 
      if (shipmentData && shipmentData.trackingNumber) {
        setData(shipmentData);
        mergeTimeline(shipmentData);
      } else {
        setData(null);
      }
    } catch (err) {
      console.error("Tracking fetch error:", err);
      setData(null);
    }
    setLoading(false);
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    
    // Update URL - this will trigger the useEffect
    const url = new URL(window.location.href);
    if (url.searchParams.get("id") === searchTerm.trim()) {
      // If the ID is already in the URL, manually trigger fetch
      fetchData(searchTerm.trim());
    } else {
      url.searchParams.set("id", searchTerm.trim());
      router.replace(url.toString(), { scroll: false });
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  useEffect(() => {
    const s = searchParams.get('id');
    if (s && s !== data?.trackingNumber) {
      setSearchTerm(s);
      fetchData(s);
    }
  }, [searchParams, data?.trackingNumber]);

  // Format Date Helper
  const formatDate = (dateString) => {
    const dt = new Date(dateString);
    if (isNaN(dt.getTime())) return { date: '—', time: '—' };
    return {
      date: dt.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      time: dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <PageHeader
        title="Track Your Shipment"
        subtitle="Enter your tracking number below to get real-time updates on your parcel's journey."
        gradient="from-orange-700 via-orange-500 to-orange-400"
        dotPattern
      >
        <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-white/20 rounded-full backdrop-blur-sm" data-aos="zoom-in" suppressHydrationWarning>
          <Package className="text-white w-10 h-10" />
        </div>
      </PageHeader>

      <div className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 mb-20 w-full">
        
        {/* Search Box */}
        <div className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl border border-gray-100" data-aos="fade-up" data-aos-delay="300" suppressHydrationWarning>
          <div className="flex flex-col md:flex-row gap-4 relative">
            <div className="absolute top-1/2 left-6 transform -translate-y-1/2 text-gray-400 text-xl md:block hidden">
              <Search size={20} />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
              placeholder="Enter Tracking Number (e.g. AG798)"
              className="w-full bg-white border-2 border-gray-100 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none rounded-2xl md:pl-14 px-6 py-5 text-lg font-bold transition text-gray-700 placeholder-gray-400"
            />
            <button
              onClick={handleSearch}
              disabled={loading}
              className="bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white font-extrabold py-5 px-10 rounded-2xl transition shadow-lg shadow-orange-500/30 flex-shrink-0 flex items-center justify-center gap-2 text-lg min-w-[180px]"
            >
              {loading ? (
                <><Loader2 className="animate-spin" size={20} /> Tracking...</>
              ) : (
                <><span>Track Now</span> <ArrowRight size={20} /></>
              )}
            </button>
          </div>
          
          <AnimatePresence>
            {!loading && searched && !data? (
              <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-red-500 font-bold mt-4 ml-2 flex items-center gap-2">
                <XCircle size={16} /> Invalid tracking number. Please try again.
              </motion.p>
            ) : null}
          </AnimatePresence>

          <p className="text-sm text-gray-400 font-medium mt-4 ml-2 flex items-center gap-1.5">
            <Info size={14} className="text-orange-400" /> Your tracking number is the waybill number given by the carrier.
          </p>
        </div>

        {/* Tracking Result */}
        <AnimatePresence>
          {data && searched && !loading && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              className="mt-12 bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-10 md:p-12 mb-10"
            >
              
              {/* Info Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 border-b border-gray-100 pb-8 mb-8">
                <div>
                  <p className="text-sm text-orange-500 font-bold mb-1">Tracking Number</p>
                  <h2 className="text-xl sm:text-2xl font-bold text-black">{data.trackingNumber}</h2>
                </div>
                <div>
                  <p className="text-sm text-orange-500 font-bold mb-1">Type</p>
                  <h2 className="text-xl sm:text-2xl font-bold text-black uppercase">{data.type || "Package"}</h2>
                </div>
                <div>
                  <p className="text-sm text-orange-500 font-bold mb-1">Weight</p>
                  <h2 className="text-xl sm:text-2xl font-bold text-black">{data.totalPackageWeight || "—"} KG</h2>
                </div>
                <div className="col-span-2 md:col-span-1 border-t md:border-t-0 border-gray-100 pt-4 md:pt-0">
                  <p className="text-sm text-orange-500 font-bold mb-1">Destination</p>
                  <h2 className="text-xl sm:text-2xl font-bold text-black uppercase">{data.receiver?.city || "—"}</h2>
                </div>
              </div>

              {/* Current Status Banner */}
              <div className="flex items-center gap-3 mb-12 bg-white p-4 rounded-xl border border-gray-100">
                <span className="relative flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-orange-500 border-2 border-white"></span>
                </span>
                <span className="text-lg font-bold text-black">
                  Current Status: <span className="text-orange-500 capitalize">{timeline[0]?.title || "Processing"}</span>
                </span>
              </div>

              {/* Stepper Visualization */}
              <div className="relative mt-12 px-2 md:px-0">
                {/* Connecting Lines */}
                <div className="hidden md:block absolute left-12 right-12 top-[24px] h-0.5 bg-gray-100 z-0"></div>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: timeline.length > 0 ? "85%" : 0 }}
                  className="hidden md:block absolute left-12 top-[24px] h-0.5 bg-orange-500 z-0 shadow-[0_0_10px_rgba(249,115,22,0.3)]"
                  transition={{ duration: 1 }}
                />

                <div className="md:hidden absolute left-[23px] top-6 bottom-12 w-0.5 bg-gray-100 z-0"></div>
                <motion.div 
                   initial={{ height: 0 }}
                   animate={{ height: timeline.length > 0 ? "85%" : 0 }}
                   className="md:hidden absolute left-[23px] top-6 w-0.5 bg-orange-500 z-0"
                   transition={{ duration: 1 }}
                />

                <div className="relative z-10 flex flex-col md:flex-row md:justify-between gap-10 md:gap-4 overflow-x-auto pb-4 no-scrollbar">
                  {timeline.slice(0, 5).reverse().map((step, i, arr) => {
                    const isActive = i === arr.length - 1;
                    const { date, time } = formatDate(step.created_at);

                    return (
                      <div key={i} className={`flex flex-row md:flex-col items-start md:items-center text-left md:text-center group relative flex-1 min-w-[200px] md:min-w-0`}>
                        {/* Icon Container */}
                        <div className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center font-bold ring-8 ring-white relative z-20 transition-all duration-500 ${
                          isActive ? 'bg-orange-500 text-white scale-110 shadow-xl shadow-orange-500/30' : 
                          'bg-orange-500 text-white shadow-md'
                        }`}>
                          <div className={isActive ? 'animate-bounce' : ''}>
                            {step.icon}
                          </div>
                        </div>
                        
                        {/* Text Content */}
                        <div className="ml-6 md:ml-0 md:mt-8 flex-1">
                          <h4 className={`text-sm md:text-base font-bold mb-1 leading-tight transition-colors capitalize ${isActive ? 'text-orange-600' : 'text-black'}`}>
                            {step.title}
                          </h4>
                          <p className={`text-[10px] md:text-xs font-black uppercase tracking-widest mb-2 ${isActive ? 'text-orange-500' : 'text-gray-400'}`}>
                            {date}, {time}
                          </p>
                          <p className="text-[11px] md:text-xs text-gray-500 md:max-w-[150px] mx-auto leading-relaxed line-clamp-2">
                            {step.description}
                          </p>
                          {step.location && step.location !== "—" && (
                            <div className="mt-3 inline-flex items-center gap-1.5 bg-white text-orange-600 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider border border-gray-200 shadow-sm">
                              <MapPin size={10} /> {step.location}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Detailed Tracking History */}
              <div className="mt-20">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-8 bg-orange-500 rounded-full"></div>
                  <h3 className="text-xl font-extrabold text-black tracking-tight">Detailed Tracking History</h3>
                </div>
                
                <div className="hidden md:block overflow-hidden rounded-3xl border border-gray-100 shadow-sm bg-white/50">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-white border-b border-gray-100">
                        <th className="px-6 py-5 text-sm font-black text-gray-400 uppercase tracking-widest">Date & Time</th>
                        <th className="px-6 py-5 text-sm font-black text-gray-400 uppercase tracking-widest">Status</th>
                        <th className="px-6 py-5 text-sm font-black text-gray-400 uppercase tracking-widest">Location</th>
                        <th className="px-6 py-5 text-sm font-black text-gray-400 uppercase tracking-widest">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {timeline.map((row, i) => {
                        const isActive = i === 0;
                        const { date, time } = formatDate(row.created_at);
                        return (
                          <tr key={i} className={`group transition-colors ${isActive ? 'bg-orange-50/50' : 'bg-white hover:bg-gray-50'}`}>
                            <td className="px-6 py-5 whitespace-nowrap">
                               <div className="font-bold text-gray-600 text-sm">{date}</div>
                               <div className="text-[11px] font-bold text-gray-400">{time}</div>
                            </td>
                            <td className="px-6 py-5">
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider capitalize ${isActive ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
                                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>}
                                {row.title}
                              </span>
                            </td>
                            <td className="px-6 py-5 text-sm font-bold text-gray-700 flex items-center gap-2 pt-6">
                              {row.location !== "—" && <MapPin size={14} className="text-orange-500" />} {row.location}
                            </td>
                            <td className="px-6 py-5 text-sm font-medium text-gray-500 max-w-xs">{row.description}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                
                {/* Mobile Card View for Table */}
                <div className="md:hidden space-y-4 mt-6">
                  {timeline.map((row, i) => {
                    const isActive = i === 0;
                    const { date, time } = formatDate(row.created_at);
                    return (
                      <div key={i} className={`p-6 rounded-2xl border ${isActive ? 'bg-white border-orange-200 shadow-md' : 'bg-white border-gray-100 shadow-sm'}`}>
                        <div className="flex justify-between items-start mb-4">
                          <div>
                             <span className="text-[11px] font-black text-gray-500 uppercase leading-none block">{date}</span>
                             <span className="text-[10px] font-bold text-gray-400 block mt-0.5">{time}</span>
                          </div>
                          <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-black uppercase ${isActive ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
                            {row.title}
                          </span>
                        </div>
                        <div className="space-y-3">
                          {row.location !== "—" && (
                            <div>
                              <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter mb-0.5">Location</p>
                              <p className="font-bold text-black flex items-center gap-1.5"><MapPin size={12} className="text-orange-500"/>{row.location}</p>
                            </div>
                          )}
                          <div>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter mb-0.5">Update</p>
                            <p className="text-sm font-medium text-gray-700">{row.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Email Subscription Trigger */}
              <div className="mt-12 pt-6 border-t border-gray-100 text-center">
                <button 
                  onClick={() => setEmailModal(true)} 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold transition flex items-center justify-center gap-2 mx-auto px-8 py-3 rounded-full shadow-lg shadow-orange-500/30"
                >
                  <Bell size={18} /> Get Email Updates for this Shipment
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Email Modal */}
      <AnimatePresence>
        {emailModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-gray-100 relative"
            >
              <button onClick={() => setEmailModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-white hover:bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center transition">
                <X size={18} />
              </button>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
                <Mail className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2 text-center">Get Email Updates</h3>
              <p className="text-gray-500 text-sm mb-6 text-center leading-relaxed">Enter your email address to receive real-time notifications about this shipment&apos;s status.</p>
              <div className="mb-5">
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input type="email" placeholder="you@example.com" className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-50 transition placeholder-gray-400" />
              </div>
              <button onClick={() => { alert('You will receive email updates for this tracking number.'); setEmailModal(false); }} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-4 rounded-xl transition shadow-lg shadow-orange-500/30">
                Subscribe
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}

export default function TrackingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <Loader2 className="animate-spin text-orange-500 w-12 h-12" />
        <p className="text-orange-500 font-black animate-pulse uppercase tracking-widest text-sm">Loading Tracker</p>
      </div>
    }>
      <TrackingContent />
    </Suspense>
  );
}
