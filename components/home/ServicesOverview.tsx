import Link from "next/link";

const services = [
  {
    title: "Production",
    description: "End-to-end content creation from concept to delivery",
    icon: "🎬",
    color: "bg-blue-500",
  },
  {
    title: "Broadcasting",
    description: "Television and digital platform management",
    icon: "📺",
    color: "bg-green-500",
  },
  {
    title: "Digital Media",
    description: "Modern digital content and social media solutions",
    icon: "�",
    color: "bg-purple-500",
  },
  {
    title: "Consulting",
    description: "Expert guidance for media and entertainment ventures",
    icon: "💡",
    color: "bg-orange-500",
  },
];

const ServicesOverview: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
            What we do
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive media services that bring your vision to life across
            all platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-6`}
              >
                <span className="text-xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200"
          >
            View All Services
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
