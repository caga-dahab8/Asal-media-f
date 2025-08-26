const NasiyePromo: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-red-500 to-red-600 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
            Experience Nasiye
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
            Your gateway to premium entertainment, news, and interactive
            content. Download the app and join millions of users worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: "📱",
              title: "Live & On-Demand",
              desc: "Stream content anytime, anywhere",
            },
            {
              icon: "🎯",
              title: "Personalized",
              desc: "AI-powered recommendations",
            },
            {
              icon: "🌐",
              title: "Multi-Device",
              desc: "Seamless synchronization",
            },
          ].map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-lg text-gray-400 font-light">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* App Preview */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-16 mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-4xl font-semibold mb-6">
                Built for Apple Intelligence
              </h3>
              <p className="text-xl text-gray-300 mb-8 font-light">
                Experience the future of entertainment with our AI-powered
                platform.
              </p>
            </div>
            <div className="flex-1">
              <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-3xl p-12 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl">
                    <span className="text-white font-bold text-4xl">N</span>
                  </div>
                  <p className="text-xl text-white">Nasiye App</p>
                  <p className="text-gray-400 mt-2">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download CTAs */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a
              href="#"
              className="bg-white text-black px-12 py-6 rounded-full text-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center"
            >
              <svg
                className="w-8 h-8 mr-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download for iPhone
            </a>
            <a
              href="#"
              className="border-2 border-white text-white px-12 py-6 rounded-full text-xl font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <svg
                className="w-8 h-8 mr-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Download for Android
            </a>
          </div>
          <p className="text-gray-400 text-lg">
            Available on iOS 15+ and Android 10+
          </p>
        </div>
      </div>
    </section>
  );
};

export default NasiyePromo;
