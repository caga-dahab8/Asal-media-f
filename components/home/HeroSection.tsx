import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white">
      {/* Hero Content */}
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-8 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-3 leading-tight tracking-tight">
          Media that
          <br />
          moves forward
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-6 font-normal max-w-2xl mx-auto leading-relaxed">
          Connecting audiences through innovative storytelling across
          television, digital media, and mobile platforms.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <Link
            href="/nasiye"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105"
          >
            Download Nasiye App
          </Link>
          <Link
            href="/about"
            className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Large Product Image Section */}
      <div className="relative bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📺</div>
              <p className="text-xl font-semibold text-gray-700">
                Asal Media Experience
              </p>
              <p className="text-gray-500 mt-1">
                Premium content across all platforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
