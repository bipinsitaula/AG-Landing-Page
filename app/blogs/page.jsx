import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const metadata = { title: 'Our Blog | AG Express' };

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <PageHeader title="Our Blog" subtitle="Latest updates and insights from the logistics world." gradient="from-orange-400 to-orange-500" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-block bg-white border border-gray-100 rounded-3xl p-10 shadow-xl" data-aos="fade-up">
          <div className="text-orange-200 text-6xl mb-6"><i className="fa-solid fa-newspaper"></i></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No Posts Yet</h2>
          <p className="text-gray-500 max-w-md mx-auto">We are working on bringing you the most exciting news and helpful logistical tips. Stay tuned!</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
