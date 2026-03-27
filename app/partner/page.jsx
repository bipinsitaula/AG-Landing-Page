import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PartnerForm from './PartnerForm';

export const metadata = { title: 'Corporate Partnership | AG Express' };

export default function PartnerPage() {
  return (
    <>
      <Navbar />
      <PageHeader title="Corporate Partnership" subtitle="Let's grow your business together with special corporate rates." gradient="from-orange-700 via-orange-500 to-orange-400" />

      <div className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Simple Design: Subtle Orange Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-orange-200 to-transparent blur-3xl opacity-40"></div>
          <div className="absolute top-[40%] -left-[10%] w-[30%] h-[40%] rounded-full bg-gradient-to-tr from-orange-100 to-transparent blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-lg border-t-4 border-t-orange-600 border-l border-r border-b border-gray-50" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">Partner With Us</h2>
          <PartnerForm />
        </div>
          </div>
      </div>
      <Footer />
    </>
  );
}


