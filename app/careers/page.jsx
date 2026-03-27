import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const metadata = { title: 'Careers | AG Express' };

export default function CareersPage() {
  const benefits = [
    {
      title: 'Competitive Salary & Bonuses',
      description: 'Earn a rewarding salary with performance-based incentives.',
      icon: 'fa-solid fa-hand-holding-dollar',
    },
    {
      title: 'Career Growth',
      description: 'Access skill development and advancement opportunities.',
      icon: 'fa-solid fa-arrow-trend-up',
    },
    {
      title: 'Inclusive Culture',
      description: 'Join a friendly, high-energy, and inclusive work environment.',
      icon: 'fa-solid fa-users',
    },
    {
      title: 'Work-Life Balance',
      description: 'Enjoy flexible hours to balance work and personal life.',
      icon: 'fa-solid fa-scale-balanced',
    },
  ];

  return (
    <>
      <Navbar />
      <PageHeader
        title="Join Our Team"
        subtitle="Build your career in the dynamic world of logistics."
        gradient="from-orange-700 via-orange-500 to-orange-400"
      />

      <main className="bg-gray-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-orange-200 to-transparent blur-3xl opacity-40"></div>
          <div className="absolute top-[40%] -left-[10%] w-[30%] h-[40%] rounded-full bg-gradient-to-tr from-orange-100 to-transparent blur-3xl opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24">

          {/* Intro Section */}
          <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
            <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm mb-4 block">
              🚀 Join the AG Express Team!
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Be part of a global leader in parcel delivery.
            </h2>
            <p className="text-lg text-gray-600">
              Explore exciting career opportunities and deliver excellence with us! We are always looking for passionate individuals to drive our mission forward.
            </p>
          </div>

          {/* Why Join Us Section */}
          <div className="mb-24" data-aos="fade-up" data-aos-delay="100">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900">✨ Why Join AG Express?</h3>
              <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <i className={benefit.icon}></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* No Open Positions Block */}
          <div className="text-center mb-24 relative z-10" data-aos="fade-up" data-aos-delay="200">
            <div className="inline-block bg-white/90 backdrop-blur-sm border-t-4 border-t-orange-500 border border-orange-50 rounded-2xl p-10 shadow-lg max-w-xl w-full">
              <div className="text-orange-400 text-6xl mb-6">
                <i className="fa-solid fa-user-tie"></i>
              </div>
              <h2 className="text-2xl font-bold text-black mb-4">No Open Positions</h2>
              <p className="text-gray-500 max-w-md mx-auto">
                We are currently not hiring, but we are always on the lookout for talent. Check back soon!
              </p>
            </div>
          </div>

          {/* Equal Opportunity & Tags Section */}
          <div className="max-w-4xl mx-auto text-center border-t border-gray-200 pt-12" data-aos="fade-up" data-aos-delay="300">
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              <strong>AG Express is an equal opportunity employer.</strong> We consider all applicants without regard to race, color, religion, gender, gender identity, national origin, genetics, disability, age, or veteran status.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm font-medium text-orange-600">
              <span className="bg-orange-50 px-3 py-1 rounded-full border border-orange-100">#AGExpress</span>
              <span className="bg-orange-50 px-3 py-1 rounded-full border border-orange-100">#NowHiring</span>
              <span className="bg-orange-50 px-3 py-1 rounded-full border border-orange-100">#LogisticsJobs</span>
              <span className="bg-orange-50 px-3 py-1 rounded-full border border-orange-100">#DeliveryJobs</span>
              <span className="bg-orange-50 px-3 py-1 rounded-full border border-orange-100">#JoinOurTeam</span>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}