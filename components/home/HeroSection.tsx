import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
          Media that
          <br />
          <span className="font-semibold">moves forward</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto font-light">
          Connecting audiences through innovative storytelling across television, digital media, and mobile platforms.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="/nasiye"
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105"
          >
            Download Nasiye App
          </Link>
          <Link
            href="/about"
            className="border border-gray-300 hover:border-gray-400 text-gray-900 px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105"
          >
            Learn More
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;