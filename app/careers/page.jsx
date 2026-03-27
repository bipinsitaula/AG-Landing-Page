import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const metadata = { title: 'Careers | AG Express' };

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <PageHeader title="Join Our Team" subtitle="Build your career in the dynamic world of logistics." gradient="from-orange-500 to-orange-500" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-block bg-white border border-gray-100 rounded-3xl p-10 shadow-xl" data-aos="fade-up">
          <div className="text-orange-400 text-6xl mb-6"><i className="fa-solid fa-user-tie"></i></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Open Positions</h2>
          <p className="text-gray-500 max-w-md mx-auto">We are currently not hiring, but we are always on the lookout for talent. Check back soon!</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
