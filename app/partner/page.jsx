import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const metadata = { title: 'Corporate Partnership | AG Express' };

export default function PartnerPage() {
  return (
    <>
      <Navbar />
      <PageHeader title="Corporate Partnership" subtitle="Let's grow your business together with special corporate rates." gradient="from-orange-500 to-orange-600" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-orange-50" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Partner With Us</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                <input type="text" placeholder="John Doe" required className="w-full bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none rounded-xl px-4 py-3 text-sm font-medium transition placeholder-gray-400" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                <input type="email" placeholder="john@example.com" required className="w-full bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none rounded-xl px-4 py-3 text-sm font-medium transition placeholder-gray-400" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Number <span className="text-red-500">*</span></label>
                <input type="tel" placeholder="+1 234 567 8900" required className="w-full bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none rounded-xl px-4 py-3 text-sm font-medium transition placeholder-gray-400" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">PAN/VAT Number</label>
                <input type="text" placeholder="ABCDE1234F" className="w-full bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none rounded-xl px-4 py-3 text-sm font-medium transition placeholder-gray-400" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Business Registration No</label>
                <input type="text" placeholder="Registration number" className="w-full bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none rounded-xl px-4 py-3 text-sm font-medium transition placeholder-gray-400" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Location <span className="text-red-500">*</span></label>
                <input type="text" placeholder="City, Country" required className="w-full bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none rounded-xl px-4 py-3 text-sm font-medium transition placeholder-gray-400" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Account Type</label>
                <select className="w-full bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none rounded-xl px-4 py-3 text-sm font-medium transition text-gray-600">
                  <option value="">Select Account Type</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Ecommerce">E-commerce</option>
                  <option value="SME">SME / Small Business</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Reference</label>
                <input type="text" placeholder="From whom you hear about us?" className="w-full bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none rounded-xl px-4 py-3 text-sm font-medium transition placeholder-gray-400" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Parcel Count (per week) <span className="text-red-500">*</span></label>
                <select required className="w-full bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none rounded-xl px-4 py-3 text-sm font-medium transition text-gray-600">
                  <option value="">Select Volume</option>
                  <option value="1-50">1 - 50</option>
                  <option value="51-200">51 - 200</option>
                  <option value="201-500">201 - 500</option>
                  <option value="500+">500+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Shipment Type <span className="text-red-500">*</span></label>
                <select required className="w-full bg-gray-50 border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none rounded-xl px-4 py-3 text-sm font-medium transition text-gray-600">
                  <option value="">Select Shipment Type</option>
                  <option value="Documents">Documents Only</option>
                  <option value="Parcels">Parcels &amp; Goods</option>
                  <option value="Freight">Heavy Freight</option>
                  <option value="Mixed">Mixed Categories</option>
                </select>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center justify-between max-w-xs mt-6">
              <div className="flex items-center">
                <input type="checkbox" required className="w-6 h-6 border-gray-300 rounded text-orange-500 focus:ring-orange-500 cursor-pointer" />
                <span className="ml-3 text-sm font-medium text-gray-700">I&apos;m not a robot</span>
              </div>
              <div className="flex flex-col items-center">
                <i className="fa-brands fa-google text-2xl text-blue-500 mb-1 opacity-80"></i>
                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">reCAPTCHA</span>
              </div>
            </div>

            <div className="pt-4">
              <button type="button" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-orange-500/30">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
