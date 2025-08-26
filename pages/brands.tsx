import Link from "next/link";
import { siteConfig } from "../config/siteConfig";

const Brands: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Our <span className="font-semibold">Brands</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Four distinctive brands united by excellence, innovation, and a commitment to exceptional media experiences.
          </p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {siteConfig.brands.map((brand, index) => (
              <Link
                key={brand.id}
                href={`/brands/${brand.id}`}
                className="group block"
              >
                <div className="bg-gray-50 rounded-3xl p-12 h-96 flex flex-col justify-between transition-all duration-300 hover:bg-gray-100 hover:scale-105">
                  <div>
                    <div className="w-20 h-20 rounded-3xl mb-8 flex items-center justify-center" 
                         style={{ backgroundColor: brand.primaryColor }}>
                      <span className="text-white font-bold text-2xl">
                        {brand.name.charAt(0)}
                      </span>
                    </div>
                    <h2 className="text-4xl font-light text-gray-900 mb-4">
                      {brand.name}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {brand.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    Explore {brand.name}
                    <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Unified Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              One <span className="font-semibold">Vision</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              While each brand maintains its unique identity and expertise, they all share our commitment 
              to innovation, quality, and creating meaningful connections with audiences worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 text-center">
              <div className="text-4xl mb-6">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                Uncompromising quality in every project, from concept to delivery.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 text-center">
              <div className="text-4xl mb-6">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                Pushing boundaries with cutting-edge technology and creative solutions.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 text-center">
              <div className="text-4xl mb-6">🌍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Connection</h3>
              <p className="text-gray-600">
                Building bridges between cultures and communities through media.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;