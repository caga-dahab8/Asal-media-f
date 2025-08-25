import Link from "next/link";

const services = [
  {
    title: "Production",
    description: "End-to-end content creation from concept to delivery",
    icon: "🎬",
    features: ["Film Production", "TV Shows", "Digital Content", "Post-Production"]
  },
  {
    title: "TV/VOD",
    description: "Broadcasting and video-on-demand platform management",
    icon: "📺",
    features: ["Live Broadcasting", "Streaming", "Content Distribution", "Audience Analytics"]
  },
  {
    title: "Advertising",
    description: "Strategic marketing and brand promotion campaigns",
    icon: "📢",
    features: ["Digital Marketing", "Brand Strategy", "Media Planning", "Creative Campaigns"]
  },
  {
    title: "Consulting",
    description: "Expert guidance for media and entertainment ventures",
    icon: "💡",
    features: ["Strategy Development", "Market Analysis", "Technology Integration", "Business Growth"]
  }
];

const ServicesOverview: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            What we <span className="font-semibold">do</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive media services that bring your vision to life across all platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white rounded-3xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105"
          >
            View All Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;