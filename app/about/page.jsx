import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const metadata = { title: 'About Us | AG Express' };

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Updated to Dark Orange to Light Orange Gradient */}
      <PageHeader
        title="About Us"
        subtitle="AG EXPRESS, your trusted partner in logistics, offering fast, secure courier solutions to every corner of the world."
        gradient="from-orange-700 via-orange-500 to-orange-400"
        dotPattern
      />

      {/* Main Content Section */}
      <div className="py-24 bg-gray-50 relative overflow-hidden">

        {/* Simple Design: Subtle Orange Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-orange-200 to-transparent blur-3xl opacity-40"></div>
          <div className="absolute top-[40%] -left-[10%] w-[30%] h-[40%] rounded-full bg-gradient-to-tr from-orange-100 to-transparent blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* Left Column: Text Content */}
            <div className="lg:col-span-7" data-aos="fade-right">

              {/* Header Section */}
              <div className="mb-10">
                <span className="text-orange-600 font-bold tracking-wider uppercase text-sm mb-3 block">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                  Revolutionizing Logistics for the Global Community
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  <strong className="text-gray-900 font-bold">AG Express</strong> was born out of a need for better logistics. Originally a trading company in China, our journey took a new direction after COVID-19 exposed major gaps in global courier systems—especially for Nepalese communities.
                </p>
              </div>

              {/* Information Cards */}
              <div className="space-y-6 mb-12">
                {/* Need Card */}
                <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-orange-50 transition-all hover:shadow-md hover:border-orange-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                      <i className="fa-solid fa-lightbulb text-orange-600 text-lg"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Recognizing the Need</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Recognizing the need, our parent company, <span className="font-semibold text-gray-900">Ambala Group</span>, launched AG Express in Hong Kong with a mission to revolutionize the courier landscape. At a time when sending goods from Hong Kong to Nepal was expensive and unreliable, we created a modern, efficient system to bridge the gap.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Benchmarks Card */}
                <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-orange-50 transition-all hover:shadow-md hover:border-orange-100">
                  <div className="flex items-start gap-4">
                    {/* Changed from black to deep orange */}
                    <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center shrink-0 shadow-inner">
                      <i className="fa-solid fa-globe text-white text-lg"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Setting Benchmarks Globally</h3>
                      <p className="text-gray-600 leading-relaxed mb-5">
                        Since our inception in 2020 after the second wave of the pandemic, we&apos;ve been setting benchmarks in logistics and supply chain services. AG Express now proudly serves:
                      </p>

                      {/* Country Tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {['Nepal', 'Malaysia', 'UK', 'Japan', 'United States'].map(c => (
                          <span key={c} className="bg-white border border-orange-100 text-gray-700 px-4 py-1.5 rounded-lg text-sm font-medium shadow-sm">
                            {c}
                          </span>
                        ))}
                        <span className="bg-orange-50 border border-orange-200 text-orange-700 px-4 py-1.5 rounded-lg text-sm font-bold shadow-sm">
                          And more <i className="fa-solid fa-arrow-right text-xs ml-1"></i>
                        </span>
                      </div>

                      <p className="text-gray-600 leading-relaxed">
                        We ensure that Nepalese products reach global doorsteps with ease and reliability. We&apos;re not just a logistics company—we&apos;re a movement that empowers the Nepalese diaspora by connecting them with products from home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission & Vision Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-t-orange-600 border border-gray-100 hover:-translate-y-1 transition-transform">
                  <i className="fa-solid fa-rocket text-2xl text-orange-600 mb-4"></i>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Our Mission</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">To modernize and simplify global logistics for the Nepalese diaspora by delivering reliable, affordable, and technology-driven courier solutions.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-t-orange-400 border border-gray-100 hover:-translate-y-1 transition-transform">
                  <i className="fa-solid fa-eye text-2xl text-orange-400 mb-4"></i>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Our Vision</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">To become a globally recognized logistics brand that leads innovation in courier services, enabling Nepalese businesses and communities to thrive across borders.</p>
                </div>
              </div>

            </div>

            {/* Right Column: Founder Image & Card */}
            <div className="lg:col-span-5 relative" data-aos="fade-up" data-aos-delay="100">
              <div className="sticky top-24">

                {/* Elegant Image Frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border-4 border-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/founderImage.jpeg"
                    alt="Tulashi Uprety - Founder"
                    className="w-full h-[500px] object-cover"
                  />

                  {/* Overlay Gradient for Text Readability - Updated to warm tone */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-950 via-gray-900/40 to-transparent opacity-90"></div>

                  {/* Founder Info */}
                  <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                    <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-bold tracking-wider uppercase rounded-full mb-3 shadow-md">
                      Founder & CEO
                    </span>
                    <h3 className="text-3xl font-bold mb-1">Tulashi Uprety</h3>
                    <p className="text-orange-200 font-medium">AG Express</p>
                  </div>
                </div>

                {/* Decorative Background Element */}
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-200 to-orange-50 opacity-50 rounded-[2.5rem] -z-10 transform translate-x-4 translate-y-4"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}