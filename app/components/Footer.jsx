import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center mb-6">
              <Image src="/logo-ag.png" alt="AG Express Logo" width={120} height={40} className="h-8 w-auto" />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
              Connecting you to the world with fast, secure, and reliable shipping logistics.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-extrabold mb-6 text-gray-900 flex items-center">
              <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span> Quick Links
            </h3>
            <ul className="space-y-3 text-gray-500 font-medium text-sm">
              <li><Link href="/tracking" className="hover:text-orange-500 transition flex items-center"><i className="fa-solid fa-angle-right mr-2 text-orange-300"></i> Track Shipment</Link></li>
              <li><Link href="/about" className="hover:text-orange-500 transition flex items-center"><i className="fa-solid fa-angle-right mr-2 text-orange-300"></i> About Us</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition flex items-center"><i className="fa-solid fa-angle-right mr-2 text-orange-300"></i> Contact Support</Link></li>
              <li><Link href="/offers" className="hover:text-orange-500 transition flex items-center"><i className="fa-solid fa-angle-right mr-2 text-orange-300"></i> Promotions</Link></li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-lg font-extrabold mb-6 text-gray-900 flex items-center">
              <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span> Coverage
            </h3>
            <ul className="space-y-3 text-gray-500 font-medium text-sm grid grid-cols-2 gap-x-2">
              <li>Hong Kong</li><li>Nepal</li>
              <li>Malaysia</li><li>Singapore</li>
              <li>Macau</li><li>UK</li>
              <li>China</li><li>USA</li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-lg font-extrabold mb-6 text-gray-900 flex items-center">
              <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span> Connect With Us
            </h3>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition"><i className="fa-brands fa-tiktok"></i></a>
              <a href="#" className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-semibold gap-4">
          <p>&copy; 2026 AG Express. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-orange-500">Terms of Use</Link>
            <Link href="#" className="hover:text-orange-500">Privacy Policy</Link>
            <Link href="#" className="hover:text-orange-500">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
