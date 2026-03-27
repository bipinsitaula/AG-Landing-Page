import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const metadata = { title: 'Services | AG Express' };

const services = [
  { icon: 'fa-box', title: 'Express Pickup & Delivery', desc: 'Fast and reliable express delivery across the globe. Carefully picked up and shipped safely.', delay: 0 },
  { icon: 'fa-door-open', title: 'Door to Door Delivery', desc: 'End-to-end service from your doorstep directly to your destination.', delay: 100 },
  { icon: 'fa-file-signature', title: 'Customs Clearance', desc: 'Swift handling of tedious customs regulations ensuring your goods cross borders smoothly.', delay: 200 },
  { icon: 'fa-ship', title: 'Container Booking / LCL', desc: 'Cost-effective shipping for bulk items via sea or ocean freight.', delay: 300 },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive logistics solutions for all your needs."
        gradient="from-orange-400 to-orange-500"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map(s => (
            <div key={s.title} className="bg-white p-8 rounded-3xl shadow-lg border border-orange-50 flex items-start gap-6" data-aos="fade-up" data-aos-delay={s.delay}>
              <div className="w-14 h-14 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center text-2xl shrink-0">
                <i className={`fa-solid ${s.icon}`}></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-500">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
