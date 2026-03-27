'use client';
import dynamic from 'next/dynamic';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import BranchModal from './BranchModal';

const NetworkMap = dynamic(() => import('./NetworkMap'), { ssr: false, loading: () => <div className="w-full h-[450px] md:h-[550px] lg:h-[700px] rounded-[2.5rem] bg-gray-100 animate-pulse" /> });

const branches = ['Tinkune', 'Satdobato', 'Dharan', 'Itahari', 'Butwal', 'Chitwan', 'Birtamode', 'Hetauda'];

export default function NetworkPage() {
  return (
    <>
      <Navbar />
      <PageHeader title="Our Global Network" subtitle="Connecting you with our 150+ strong worldwide community." />

      <div className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-orange-200 to-transparent blur-3xl opacity-40"></div>
          <div className="absolute top-[40%] -left-[10%] w-[30%] h-[40%] rounded-full bg-gradient-to-tr from-orange-100 to-transparent blur-3xl opacity-50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Hong Kong */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-l-4 border-orange-600 pl-4">Hong Kong</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-orange-50 hover:-translate-y-1 transition-all hover:shadow-md hover:border-orange-100">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center text-xl mb-6">
                <i className="fa-solid fa-building"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">Headquarters (Jordan)</h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-start"><i className="fa-solid fa-location-dot mt-1 w-6 text-orange-400"></i><span>G/F Rear No 37m Jordan Mansion 37L-37T Jordan Road<br />Yaumatei, Kowloon<br /><span className="text-gray-400 text-sm">Att: Basil</span></span></p>
                <p className="flex items-center"><i className="fa-brands fa-whatsapp w-6 text-orange-400"></i><span>+852-65937706</span></p>
                <p className="flex items-center"><i className="fa-solid fa-envelope w-6 text-orange-400"></i><a href="mailto:agexpresshk@gmail.com" className="hover:text-orange-500 transition">agexpresshk@gmail.com</a></p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-orange-50 hover:-translate-y-1 transition-all hover:shadow-md hover:border-orange-100">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center text-xl mb-6">
                <i className="fa-solid fa-store"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">Yuen Long Office</h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-start"><i className="fa-solid fa-location-dot mt-1 w-6 text-orange-400"></i><span>Portion 2 of shop N on G/F.<br />Shun fat house<br />nos. 54-56 Kau Yuk Road<br />Yuen Long, N.T.</span></p>
                <p className="flex items-center"><i className="fa-brands fa-whatsapp w-6 text-orange-400"></i><span>+852-65937706</span></p>
                <p className="flex items-center"><i className="fa-solid fa-envelope w-6 text-orange-400"></i><a href="mailto:agexpresshk@gmail.com" className="hover:text-orange-500 transition">agexpresshk@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* China */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-l-4 border-orange-600 pl-4">China</h2>
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 max-w-2xl hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center text-xl mb-6">
              <i className="fa-solid fa-city"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 text-black">Guangzhou (Head Office)</h3>
            <div className="space-y-3 text-gray-600">
              <p className="flex items-start"><i className="fa-solid fa-location-dot mt-1 w-6 text-orange-400"></i><span>No. 1 Hetai Road, Helong Street<br />Baiyun District, Guangzhou<br />Building C, Hetai Plaza, 03</span></p>
              <p className="flex items-center"><i className="fa-solid fa-phone w-6 text-orange-400"></i><span>+86-14117942 | +86-9841000000</span></p>
              <p className="flex items-center"><i className="fa-solid fa-envelope w-6 text-orange-400"></i><a href="mailto:agexpresshk@gmail.com" className="hover:text-orange-500 transition">agexpresshk@gmail.com</a></p>
            </div>
          </div>
        </div>

        {/* Nepal */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-l-4 border-orange-600 pl-4">Nepal</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-orange-50 hover:-translate-y-1 transition-all hover:shadow-md hover:border-orange-100">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center text-xl mb-6">
                <i className="fa-regular fa-building"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">Kathmandu (Head Office)</h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-start"><i className="fa-solid fa-location-dot mt-1 w-6 text-orange-400"></i><span>AG EXPRESS, Kathmandu<br />PRAGATI MARGA, TINKUNE<br />KATHMANDU, NEPAL</span></p>
                <p className="flex items-center"><i className="fa-solid fa-phone w-6 text-orange-400"></i><span>TEL: 01-4535335</span></p>
                <p className="flex items-center"><i className="fa-brands fa-whatsapp w-6 text-orange-400"></i><span>+977-9766387636</span></p>
                <p className="flex items-center"><i className="fa-solid fa-headset w-6 text-orange-400"></i><span className="font-bold text-orange-500">Toll Free: 18105000456</span></p>
                <p className="flex items-center"><i className="fa-solid fa-envelope w-6 text-orange-400"></i><a href="mailto:info@ag.express" className="hover:text-orange-500 transition">info@ag.express</a></p>
              </div>
            </div>
            <div className="bg-white border border-gray-100 p-8 rounded-3xl hover:border-orange-200 transition-colors">
              <h3 className="text-xl font-extrabold text-black mb-6 flex items-center">
                <i className="fa-solid fa-network-wired text-orange-500 mr-3"></i> Nepal Branches
              </h3>
              <BranchModal branches={branches} />
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Interactive Map Section - Full Bleed */}
      <div className="w-full pb-20 relative z-20" data-aos="fade-up" data-aos-delay="100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
           <h2 className="text-3xl font-extrabold text-black border-l-4 border-orange-500 pl-4 uppercase tracking-tight">Interactive Global Network</h2>
           <p className="text-gray-500 mt-2 ml-5 text-sm">Real-time visualization of our active global transit lines and hub connectivity.</p>
        </div>
        
        <div className="px-4 sm:px-8 lg:px-12 xl:px-20">
          <div className="bg-[#cdf3ff] rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.12)] border border-gray-200 overflow-hidden relative group">
            <NetworkMap />
            <div className="absolute top-12 left-12 flex space-x-3 z-10 pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity">
              <div className="w-3 h-3 rounded-full bg-orange-400"></div>
              <div className="w-3 h-3 rounded-full bg-orange-300"></div>
              <div className="w-3 h-3 rounded-full bg-orange-100"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}


