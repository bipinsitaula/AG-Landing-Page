import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const metadata = { title: 'Services | AG Express' };

const services = [
  { icon: 'fa-box', title: 'Express Pickup & Delivery', desc: 'Fast and reliable express delivery across the globe. Carefully picked up and shipped safely.', delay: 0 },
  { icon: 'fa-door-open', title: 'Door to Door Delivery', desc: 'End-to-end service from your doorstep directly to your destination.', delay: 100 },
  { icon: 'fa-right-left', title: 'Import & Export', desc: 'Comprehensive import and export solutions to streamline your international trade and global logistics.', delay: 200 },
  { icon: 'fa-file-signature', title: 'Customs Clearance', desc: 'Swift handling of tedious customs regulations ensuring your goods cross borders smoothly.', delay: 300 },
  { icon: 'fa-ship', title: 'Container Booking / LCL', desc: 'Cost-effective shipping for bulk items via sea or ocean freight.', delay: 400 },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive logistics solutions for all your needs."
        gradient="from-orange-700 via-orange-500 to-orange-400"
      />
      <div className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Simple Design: Subtle Orange Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-orange-200 to-transparent blur-3xl opacity-40"></div>
          <div className="absolute top-[40%] -left-[10%] w-[30%] h-[40%] rounded-full bg-gradient-to-tr from-orange-100 to-transparent blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
          {services.map(s => (
            <div key={s.title} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-orange-50 transition-all hover:shadow-md hover:border-orange-100 flex items-start gap-6" data-aos="fade-up" data-aos-delay={s.delay}>
              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                <i className={`fa-solid ${s.icon} text-orange-600 text-2xl`}></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}


