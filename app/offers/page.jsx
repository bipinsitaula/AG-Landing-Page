import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const metadata = { title: 'Exclusive Offers | AG Express' };

export default function OffersPage() {
  return (
    <>
      <Navbar />
      <PageHeader title="Exclusive Offers" subtitle="Save big on your worldwide logistics with AG Express." gradient="from-orange-600 to-orange-600" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-block bg-white border border-orange-200 rounded-3xl p-10 shadow-2xl" data-aos="fade-up">
          <div className="text-orange-500 text-6xl mb-6"><i className="fa-solid fa-tags"></i></div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">No Special Offers Currently Available</h2>
          <p className="text-gray-500 max-w-md mx-auto">Please check back later for our seasonal discounts and promotional rates for international shipping.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
