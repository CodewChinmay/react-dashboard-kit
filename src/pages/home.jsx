function Home() {
    return (
      <div className="min-h-screen flex flex-col">
        {/* Main Promo Section */}
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center space-y-6 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent leading-tight">
            Build Stunning Dashboards
            <br className="hidden md:block" /> in Minutes, Not Weeks
          </h1>
  
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Accelerate your React development with pre-built, customizable components.
            Create enterprise-grade dashboards with a beautiful design system out of the box.
          </p>
  
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.npmjs.com/package/react-dashboard-kit"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started →
            </a>
            <a
              href="#features"
              className="border border-white/20 hover:border-white/40 text-white font-medium py-4 px-8 rounded-lg transition-all hover:bg-white/5"
            >
              Explore Features
            </a>
          </div>
        </main>
  
        {/* Statistics Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Downloads Card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-xl shadow-2xl hover:-translate-y-2 transition-transform duration-300">
              <div className="relative">
                <div className="absolute -top-4 -right-4 text-7xl font-black opacity-5">
                  2K+
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  2,000+
                </h3>
                <p className="mt-2 text-gray-400">Monthly Downloads</p>
              </div>
            </div>
  
            {/* Components Card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-xl shadow-2xl hover:-translate-y-2 transition-transform duration-300">
              <div className="relative">
                <div className="absolute -top-4 -right-4 text-7xl font-black opacity-5">
                  50+
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  50+
                </h3>
                <p className="mt-2 text-gray-400">Custom Components</p>
              </div>
            </div>
  
            {/* Integration Card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-xl shadow-2xl hover:-translate-y-2 transition-transform duration-300">
              <div className="relative">
                <div className="absolute -top-4 -right-4 text-5xl font-black opacity-5">
                  React
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  React 18+
                </h3>
                <p className="mt-2 text-gray-400">Compatible Version</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Home;
  