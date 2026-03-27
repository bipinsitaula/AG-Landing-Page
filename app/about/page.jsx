import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const metadata = { title: 'About Us | AG Express' };

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="About Us"
        subtitle="AG EXPRESS, your trusted partner in logistics, offering fast, secure courier solutions to every corner of the world."
        gradient="from-orange-500 to-orange-500"
        dotPattern
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Text Content */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-orange-50" data-aos="fade-right">
            <h2 className="text-orange-500 text-sm font-black uppercase tracking-widest mb-2 border-l-4 border-orange-500 pl-3">Our Story</h2>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-6">Revolutionizing Logistics for the Global Community</h3>

            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              <span className="font-bold text-gray-900">AG Express</span> was born out of a need for better logistics. Originally a trading company in China, our journey took a new direction after COVID-19 exposed major gaps in global courier systems—especially for Nepalese communities.
            </p>

            <div className="mb-10 pl-6 border-l-2 border-orange-100">
              <h4 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <i className="fa-solid fa-lightbulb text-orange-400 mr-3"></i> Recognizing the Need
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Recognizing the need, our parent company, <span className="font-semibold text-gray-800">Ambala Group</span>, launched AG Express in Hong Kong with a mission to revolutionize the courier landscape. At a time when sending goods from Hong Kong to Nepal was expensive and unreliable, we created a modern, efficient system to bridge the gap.
              </p>
            </div>

            <div className="mb-10 pl-6 border-l-2 border-orange-100">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fa-solid fa-chart-line text-orange-400 mr-3"></i> Setting Benchmarks and Expanding Globally
              </h4>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Since our inception in 2020 after the second wave of the pandemic, we&apos;ve been setting benchmarks in logistics and supply chain services. AG Express now proudly serves:
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {['Nepal', 'Malaysia', 'UK', 'Japan', 'United States'].map(c => (
                  <span key={c} className="bg-gray-50 border border-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
                    <i className="fa-solid fa-location-dot text-orange-500 mr-1.5"></i>{c}
                  </span>
                ))}
                <span className="bg-orange-50 border border-orange-200 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">And more <i className="fa-solid fa-plus text-xs ml-1"></i></span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ensuring that Nepalese products reach global doorsteps with ease and reliability. We&apos;re not just a logistics company—we&apos;re a movement that empowers the Nepalese diaspora by connecting them with products from home.
              </p>
            </div>

            <div className="flex items-center gap-5 p-5 bg-gradient-to-r from-orange-50 to-white rounded-2xl border border-orange-100 mb-10 shadow-sm">
              <div className="w-14 h-14 bg-orange-500 text-white rounded-xl flex items-center justify-center text-2xl shrink-0 shadow-md shadow-orange-500/20">
                <i className="fa-solid fa-user-tie"></i>
              </div>
              <div>
                <p className="text-xs text-orange-500 font-bold uppercase tracking-widest mb-1">Founder</p>
                <p className="text-xl font-black text-gray-900">Tulashi Uprety <span className="text-gray-400 font-medium">(Basil)</span></p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition duration-300 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange-500 text-xl mb-4 shadow-sm group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <i className="fa-solid fa-rocket"></i>
                </div>
                <h4 className="text-xl font-extrabold text-gray-900 mb-3">Our Mission</h4>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">To modernize and simplify global logistics for the Nepalese diaspora by delivering reliable, affordable, and technology-driven courier solutions.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition duration-300 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-orange-500 text-xl mb-4 shadow-sm group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <i className="fa-solid fa-eye"></i>
                </div>
                <h4 className="text-xl font-extrabold text-gray-900 mb-3">Our Vision</h4>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">To become a globally recognized logistics brand that leads innovation in courier services, enabling Nepalese businesses and communities to thrive across borders.</p>
              </div>
            </div>
          </div>

          {/* Founder Image Desktop */}
          <div className="lg:col-span-5 hidden lg:block sticky top-28" data-aos="fade-left" data-aos-delay="200">
            <div className="border-4 border-white rounded-[2.5rem] overflow-hidden shadow-2xl relative group bg-gray-100 min-h-[500px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/founderImage.jpeg" alt="Tulashi Uprety - Founder" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-gray-900/80 to-transparent text-white">
                <p className="font-bold text-xl">Tulashi Uprety (Basil)</p>
                <p className="text-orange-400 font-medium text-sm">Founder &amp; CEO, AG Express</p>
              </div>
            </div>
          </div>

          {/* Founder Image Mobile */}
          <div className="lg:hidden col-span-1 mt-8 mb-4 border-4 border-white rounded-[2.5rem] shadow-xl overflow-hidden relative" data-aos="fade-up">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/founderImage.jpeg" alt="Tulashi Uprety - Founder" className="w-full h-auto object-cover min-h-[350px]" />
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-gray-900/80 to-transparent text-white">
              <p className="font-bold border-l-4 border-orange-500 pl-3">Tulashi Uprety (Basil)</p>
              <p className="text-orange-400 font-medium text-xs pl-4 mt-1">Founder, AG Express</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
