const services = [
  {
    title: "Production",
    description: "End-to-end content creation from concept to delivery",
    icon: "🎬",
    features: [
      "Film & TV Production",
      "Documentary Creation",
      "Commercial Production",
      "Post-Production Services",
      "Script Development",
      "Casting Services"
    ],
    brands: ["Masrax Production", "Asal TV"]
  },
  {
    title: "Broadcasting & Streaming",
    description: "Television and digital platform management",
    icon: "📺",
    features: [
      "Live Broadcasting",
      "VOD Platforms",
      "Content Distribution",
      "Audience Analytics",
      "Multi-platform Streaming",
      "Technical Operations"
    ],
    brands: ["Asal TV", "Nasiye"]
  },
  {
    title: "Digital Media",
    description: "Modern digital content and social media solutions",
    icon: "💻",
    features: [
      "Social Media Content",
      "Digital Campaigns",
      "Influencer Marketing",
      "Content Strategy",
      "Brand Development",
      "Online Engagement"
    ],
    brands: ["Jil Media", "Nasiye"]
  },
  {
    title: "Advertising & Marketing",
    description: "Strategic marketing and brand promotion campaigns",
    icon: "📢",
    features: [
      "Brand Strategy",
      "Creative Campaigns",
      "Media Planning",
      "Digital Advertising",
      "Market Research",
      "Performance Analytics"
    ],
    brands: ["Jil Media", "Asal TV"]
  },
  {
    title: "Mobile Platform",
    description: "App development and mobile content distribution",
    icon: "📱",
    features: [
      "Mobile App Development",
      "Content Aggregation",
      "User Experience Design",
      "Push Notifications",
      "In-app Purchases",
      "Cross-platform Support"
    ],
    brands: ["Nasiye"]
  },
  {
    title: "Consulting",
    description: "Expert guidance for media and entertainment ventures",
    icon: "💡",
    features: [
      "Strategy Development",
      "Market Analysis",
      "Technology Integration",
      "Business Growth",
      "Industry Insights",
      "Custom Solutions"
    ],
    brands: ["All Brands"]
  }
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Our <span className="font-semibold">Services</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive media solutions that bring your vision to life across all platforms and audiences.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-gray-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start mb-6">
                  <div className="text-4xl mr-6">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    What's Included
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs text-gray-500 mb-2">Available through:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.brands.map((brand, idx) => (
                      <span
                        key={idx}
                        className="bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Our <span className="font-semibold">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From initial concept to final delivery, we follow a proven methodology that ensures exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your vision and requirements" },
              { step: "02", title: "Strategy", desc: "Developing the perfect approach and timeline" },
              { step: "03", title: "Creation", desc: "Bringing your project to life with expertise" },
              { step: "04", title: "Delivery", desc: "Launching and optimizing for maximum impact" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-6">
            Ready to get <span className="font-semibold">started?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help bring your media project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors duration-200"
            >
              Start a Project
            </a>
            <a
              href="/portfolio"
              className="border border-gray-300 hover:border-gray-400 text-gray-900 px-8 py-4 rounded-full text-lg font-medium transition-colors duration-200"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;