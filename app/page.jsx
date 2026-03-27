'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const serviceImages = {
  pickup:    'https://images.pexels.com/photos/4308801/pexels-photo-4308801.jpeg?auto=compress&cs=tinysrgb&w=800',
  door:      'https://images.pexels.com/photos/4599719/pexels-photo-4599719.jpeg?auto=compress&cs=tinysrgb&w=800',
  customs:   'https://images.pexels.com/photos/6169033/pexels-photo-6169033.jpeg?auto=compress&cs=tinysrgb&w=800',
  container: 'https://images.pexels.com/photos/10360699/pexels-photo-10360699.jpeg?auto=compress&cs=tinysrgb&w=800',
};

const testimonials = [
  { quote: "I've trusted AG Express for nine years. Their team's professionalism makes every shipment effortless. The custom‑clearance process is incredibly swift and reliable.", name: 'Meghraj Mainali', role: 'Nepal Importer', init: 'MM' },
  { quote: "AG Express has never let me down when sending my fresh pickles to Hong Kong and the UK. They treat me not just as a customer but as a true partner.", name: 'Meera Rai', role: 'Pickle Producer', init: 'MR' },
  { quote: "Handling cross-border shipments couldn't be easier. I order bulk goods from China, and AG Express takes care of everything—from pick-up to my doorstep.", name: 'Surendra Dariwal', role: 'eCommerce', init: 'SD' },
  { quote: "I regularly send packages to the UK, and AG Express delivers every time in under a week what others do in two weeks plus, at highly competitive rates.", name: 'Min Gurung', role: 'HK Resident', init: 'MG' },
  { quote: "Five years ago, as a new startup, I had no idea how to navigate customs. AG Express guided me step by step, and they have been my go-to ever since.", name: 'Rajesh Khadka', role: 'Product Supplier', init: 'RK' },
];

const faqs = [
  { q: 'How to track an order in AG Express?', a: "After placing an order, you'll receive a confirmation email or SMS with a tracking number. Enter that number in the search box at the top of our site to see real-time updates." },
  { q: 'Why choose AG Express?', a: 'AG Express offers fast, secure, and reliable delivery services worldwide, backed by a strong global network and exceptional 24/7 customer support.' },
  { q: 'Will my product be safe?', a: 'Absolutely. We prioritize the safety of your products with secure packaging protocols, real-time tracking visibility, and comprehensive insurance options for high-value items.' },
];

export default function HomePage() {
  const [trackingInput, setTrackingInput] = useState('');
  const [serviceKey, setServiceKey] = useState('pickup');
  const [serviceImg, setServiceImg] = useState(serviceImages.pickup);
  const [imgOpacity, setImgOpacity] = useState(100);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [testimonialOpacity, setTestimonialOpacity] = useState(true);
  const [modal, setModal] = useState(null); // 'quote' | null
  const router = useRouter();

  const serviceItems = [
    { key: 'pickup', icon: 'fa-box', label: 'Express Pickup & Delivery' },
    { key: 'door', icon: 'fa-door-open', label: 'Door to Door Delivery' },
    { key: 'customs', icon: 'fa-file-signature', label: 'Customs Clearance' },
    { key: 'container', icon: 'fa-ship', label: 'Container Booking / LCL' },
  ];

  function changeService(key) {
    setServiceKey(key);
    setImgOpacity(0);
    setTimeout(() => { setServiceImg(serviceImages[key]); setImgOpacity(100); }, 300);
  }

  function selectTestimonial(i) {
    setTestimonialOpacity(false);
    setTimeout(() => { setActiveTestimonial(i); setTestimonialOpacity(true); }, 300);
  }

  function handleTrack() {
    if (trackingInput.trim()) {
      router.push(`/tracking?id=${encodeURIComponent(trackingInput.trim().toUpperCase())}`);
    } else {
      router.push('/tracking');
    }
  }

  const t = testimonials[activeTestimonial];

  return (
    <>
      <Navbar onRequestQuote={() => setModal('quote')} />

      {/* Hero */}
      <header className="relative bg-gradient-to-br from-white via-orange-50 to-orange-100 overflow-hidden pt-12 pb-24 lg:pt-24 lg:pb-32">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-orange-400/10 blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left" data-aos="fade-up" data-aos-duration="1000">
            <div className="inline-block bg-white text-orange-500 font-bold px-4 py-1.5 rounded-full text-sm mb-6 border border-orange-200 shadow-sm">
              <i className="fa-solid fa-bolt mr-2"></i> Fast &amp; Secure Logistics
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-black leading-[1.1] mb-6">
              Deliver your <br />packages <span className="text-orange-500">worldwide.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0">
              AG EXPRESS is your trusted partner offering fast, door-to-door courier solutions to every corner of the world.
            </p>
            <form 
              onSubmit={(e) => { e.preventDefault(); handleTrack(); }}
              className="bg-white p-2 rounded-full shadow-xl shadow-orange-500/10 flex flex-col sm:flex-row gap-2 border border-gray-200 max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex-grow flex items-center pl-4">
                <i className="fa-solid fa-box-open text-orange-400 mr-3 text-xl"></i>
                <input
                  type="text"
                  value={trackingInput}
                  onChange={e => setTrackingInput(e.target.value)}
                  placeholder="Enter Invoice No. (eg: AG123456789)"
                  className="w-full bg-transparent focus:outline-none text-gray-700 py-3 font-medium placeholder-gray-400"
                />
              </div>
              <Link
                href={trackingInput.trim() ? `/tracking?id=${encodeURIComponent(trackingInput.trim().toUpperCase())}` : '/tracking'}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition w-full sm:w-auto flex-shrink-0 shadow-md flex items-center justify-center"
              >
                Track <i className="fa-solid fa-arrow-right ml-2"></i>
              </Link>
            </form>
          </div>
          <div className="w-full lg:w-1/2 relative animate-float" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="200">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Cargo Logistics Delivery"
              className="rounded-3xl shadow-2xl border-4 border-white object-cover h-[450px] w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-200 flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-orange-500 text-xl">
                <i className="fa-solid fa-earth-americas"></i>
              </div>
              <div>
                <p className="text-2xl font-black text-black">150+</p>
                <p className="text-sm font-bold text-gray-500">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Why Choose AG Express */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black">Why Choose <span className="text-orange-500">AG Express?</span></h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon:'fa-truck-fast', title:'Express Shipment', desc:'Timely shipped, picked up, and carefully handed to your dear ones with our reliable worldwide partners.', delay:100 },
              { icon:'fa-shield-halved', title:'Safe Delivery', desc:'We deliver your package with utmost care and provide comprehensive insurance options for absolute peace of mind.', delay:200 },
              { icon:'fa-headset', title:'24/7 Support', desc:'With real-time tracking and dedicated customer support, we ensure a hassle-free shipping experience.', delay:300 },
            ].map(f => (
              <div key={f.title} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg shadow-orange-100 hover:-trangray-y-2 hover:shadow-orange-200 transition duration-300 group" data-aos="fade-up" data-aos-delay={f.delay}>
                <div className="w-16 h-16 bg-white text-orange-500 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                  <i className={`fa-solid ${f.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3 text-black">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 w-full space-y-4" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">Our Core Services</h2>
              <p className="text-gray-600 mb-8 text-lg border-l-4 border-orange-500 pl-4 bg-white p-4 rounded-r-xl shadow-sm">
                Express delivery across the globe and your country through our vast network of branches. Select a service to learn more.
              </p>
              <div className="space-y-3">
                {serviceItems.map(s => {
                  const active = serviceKey === s.key;
                  return (
                    <button
                      key={s.key}
                      onClick={() => changeService(s.key)}
                      className={`w-full flex items-center gap-4 p-4 bg-white rounded-xl cursor-pointer transition text-left ${active ? 'shadow-md border-2 border-orange-500 scale-[1.02]' : 'border border-transparent hover:border-orange-200 hover:shadow-md'}`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${active ? 'bg-orange-500 text-white' : 'bg-white text-orange-400'}`}>
                        <i className={`fa-solid ${s.icon}`}></i>
                      </div>
                      <span className={`text-lg flex-grow ${active ? 'font-bold text-black' : 'font-semibold text-gray-700'}`}>{s.label}</span>
                      {active && <i className="fa-solid fa-arrow-right text-orange-500"></i>}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="lg:w-1/2 w-full relative" data-aos="fade-left">
              <div className="absolute inset-0 bg-orange-500 rounded-3xl transform trangray-x-4 trangray-y-4"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={serviceImg}
                alt="Service"
                className={`relative rounded-3xl shadow-xl object-cover h-[500px] w-full z-10 transition-opacity duration-300 ease-in-out`}
                style={{ opacity: imgOpacity === 100 ? 1 : 0 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black" data-aos="fade-down">Satisfied <span className="text-orange-500">Clients</span></h2>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-6 mb-12 rounded-full" data-aos="fade-down"></div>
          <div className="relative bg-white p-8 md:p-14 rounded-[2.5rem] shadow-2xl shadow-orange-500/10 border border-gray-200 min-h-[360px] flex flex-col justify-between overflow-hidden text-left group" data-aos="zoom-in">
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            <i className="fa-solid fa-quote-right text-8xl md:text-9xl text-orange-50 absolute -bottom-6 -right-6 z-0 rotate-12 group-hover:rotate-0 transition-transform duration-500 ease-out"></i>
            <div className={`transition-opacity duration-300 relative z-10 flex flex-col h-full justify-between ${testimonialOpacity ? 'opacity-100' : 'opacity-0'}`}>
              <div>
                <div className="flex gap-1 text-orange-400 text-sm md:text-base mb-6">
                  {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
                </div>
                <p className="text-2xl md:text-3xl lg:text-4xl text-black font-bold leading-snug tracking-tight mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-5 mt-auto pt-8 border-t border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg shadow-orange-500/30 transform -rotate-3">
                  {t.init}
                </div>
                <div>
                  <h4 className="font-extrabold text-black text-lg md:text-xl">{t.name}</h4>
                  <p className="text-sm text-orange-500 font-bold uppercase tracking-wider mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6" data-aos="fade-up">Select a client to hear their story</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6" data-aos="fade-up" data-aos-delay="100">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() => selectTestimonial(i)}
                  className={`relative w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center font-extrabold text-lg cursor-pointer transition-all duration-300 border-2 focus:outline-none focus:ring-4 focus:ring-orange-100 ${i === activeTestimonial ? 'bg-orange-500 text-white border-orange-500 shadow-xl shadow-orange-500/40 scale-110 -trangray-y-2' : 'bg-white text-gray-400 border-gray-100 hover:border-orange-300 hover:text-orange-500 hover:-trangray-y-1 hover:shadow-md'}`}
                >
                  {t.init}
                  <span className={`absolute -bottom-3 w-1.5 h-1.5 rounded-full transition-colors ${i === activeTestimonial ? 'bg-orange-500' : 'bg-transparent'}`}></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-orange-500 py-20 relative overflow-hidden" data-aos="zoom-in" data-aos-duration="800">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Need Reliable Logistics?</h2>
          <p className="text-orange-100 text-xl mb-10 font-medium">Worldwide Express Shipping is just a click away.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button
              onClick={() => setModal('quote')}
              className="bg-white text-orange-500 hover:bg-white px-8 py-4 rounded-full text-lg font-bold transition shadow-2xl hover:scale-105 w-full sm:w-auto"
            >
              Get a Free Quote
            </button>
            <div className="flex items-center gap-3 text-white">
              <div className="w-12 h-12 rounded-full border-2 border-orange-300 flex items-center justify-center text-xl">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="text-left">
                <p className="text-sm text-orange-200 font-bold uppercase">Toll Free 24/7</p>
                <p className="text-2xl font-black">18105000456</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black">Frequently Asked <span className="text-orange-500">Questions</span></h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto mt-6 rounded-full"></div>
          </div>
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
            {faqs.map(f => (
              <details key={f.q} className="group bg-white rounded-2xl border border-gray-200 open:shadow-md transition-all">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-black hover:text-orange-500 list-none">
                  <span className="text-lg">{f.q}</span>
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-orange-500 group-open:rotate-180 transition-transform shadow-sm flex-shrink-0">
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-gray-600 pt-2 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Quote Modal */}
      {modal === 'quote' && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/60 backdrop-blur-sm p-4"
          onClick={() => setModal(null)}
        >
          <div
            className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setModal(null)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-orange-500 transition"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-500 text-3xl"><i className="fa-solid fa-file-invoice-dollar"></i></div>
              <h3 className="text-2xl font-black text-black mb-2">Request a Quote</h3>
              <p className="text-gray-500 mb-6 font-medium text-sm">Fill in your basic details and our team will get back to you immediately.</p>
              <form className="space-y-3 text-left mb-6">
                <input type="text" placeholder="Your Name" className="w-full bg-white border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none rounded-xl px-4 py-3 text-sm font-medium transition" />
                <input type="email" placeholder="Email Address" className="w-full bg-white border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none rounded-xl px-4 py-3 text-sm font-medium transition" />
                <textarea placeholder="Tell us about your shipment..." rows={3} className="w-full bg-white border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none rounded-xl px-4 py-3 text-sm font-medium transition resize-none"></textarea>
              </form>
              <button onClick={() => setModal(null)} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-full transition shadow-lg shadow-orange-500/30">Submit Request</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


