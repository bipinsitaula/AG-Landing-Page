'use client';
import dynamic from 'next/dynamic';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import BranchModal from './BranchModal';

const NetworkMap = dynamic(() => import('./NetworkMap'), { ssr: false, loading: () => <div className="w-full h-[350px] md:h-[450px] lg:h-[550px] rounded-2xl bg-gray-100 animate-pulse" /> });

const branches = ['Tinkune', 'Satdobato', 'Dharan', 'Itahari', 'Butwal', 'Chitwan', 'Birtamode', 'Hetauda'];

export default function NetworkPage() {
  return (
    <>
      <Navbar />
      <PageHeader title="Our Global Network" subtitle="Connecting you with our 150+ strong worldwide community." />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Hong Kong */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-l-4 border-orange-500 pl-4">Hong Kong</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-orange-50 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-xl flex items-center justify-center text-xl mb-6">
                <i className="fa-solid fa-building"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Headquarters (Jordan)</h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-start"><i className="fa-solid fa-location-dot mt-1 w-6 text-orange-400"></i><span>G/F Rear No 37m Jordan Mansion 37L-37T Jordan Road<br />Yaumatei, Kowloon<br /><span className="text-gray-400 text-sm">Att: Basil</span></span></p>
                <p className="flex items-center"><i className="fa-brands fa-whatsapp w-6 text-orange-400"></i><span>+852-65937706</span></p>
                <p className="flex items-center"><i className="fa-solid fa-envelope w-6 text-orange-400"></i><a href="mailto:agexpresshk@gmail.com" className="hover:text-orange-500 transition">agexpresshk@gmail.com</a></p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-orange-50 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-xl flex items-center justify-center text-xl mb-6">
                <i className="fa-solid fa-store"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Yuen Long Office</h3>
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
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-l-4 border-orange-500 pl-4">China</h2>
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-orange-50 max-w-2xl hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-xl flex items-center justify-center text-xl mb-6">
              <i className="fa-solid fa-city"></i>
            </div>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Guangzhou (Head Office)</h3>
            <div className="space-y-3 text-gray-600">
              <p className="flex items-start"><i className="fa-solid fa-location-dot mt-1 w-6 text-orange-400"></i><span>No. 1 Hetai Road, Helong Street<br />Baiyun District, Guangzhou<br />Building C, Hetai Plaza, 03</span></p>
              <p className="flex items-center"><i className="fa-solid fa-phone w-6 text-orange-400"></i><span>+86-14117942 | +86-9841000000</span></p>
              <p className="flex items-center"><i className="fa-solid fa-envelope w-6 text-orange-400"></i><a href="mailto:agexpresshk@gmail.com" className="hover:text-orange-500 transition">agexpresshk@gmail.com</a></p>
            </div>
          </div>
        </div>

        {/* Nepal */}
        <div data-aos="fade-up">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-l-4 border-orange-500 pl-4">Nepal</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-orange-50 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-xl flex items-center justify-center text-xl mb-6">
                <i className="fa-regular fa-building"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Kathmandu (Head Office)</h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-start"><i className="fa-solid fa-location-dot mt-1 w-6 text-orange-400"></i><span>AG EXPRESS, Kathmandu<br />PRAGATI MARGA, TINKUNE<br />KATHMANDU, NEPAL</span></p>
                <p className="flex items-center"><i className="fa-solid fa-phone w-6 text-orange-400"></i><span>TEL: 01-4535335</span></p>
                <p className="flex items-center"><i className="fa-brands fa-whatsapp w-6 text-orange-400"></i><span>+977-9766387636</span></p>
                <p className="flex items-center"><i className="fa-solid fa-headset w-6 text-orange-400"></i><span className="font-bold text-orange-500">Toll Free: 18105000456</span></p>
                <p className="flex items-center"><i className="fa-solid fa-envelope w-6 text-orange-400"></i><a href="mailto:info@ag.express" className="hover:text-orange-500 transition">info@ag.express</a></p>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-3xl hover:border-orange-200 transition-colors">
              <h3 className="text-xl font-extrabold text-gray-900 mb-6 flex items-center">
                <i className="fa-solid fa-network-wired text-orange-500 mr-3"></i> Nepal Branches
              </h3>
              <BranchModal branches={branches} />
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Map */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-20" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-l-4 border-orange-500 pl-4">Interactive Global Map</h2>
        <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-orange-50 p-2 lg:p-4 overflow-hidden relative">
          <NetworkMap />
          <div className="absolute top-8 left-8 flex space-x-2 z-10 pointer-events-none">
            <div className="w-2.5 h-2.5 rounded-full bg-orange-100"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-orange-200"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-orange-300"></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
