import Link from "next/link";
import { siteConfig } from "../../config/siteConfig";

const BrandShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Our <span className="font-semibold">Brands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four distinct brands, one unified vision of excellence in media and entertainment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.brands.map((brand, index) => (
            <Link
              key={brand.id}
              href={`/brands/${brand.id}`}
              className="group"
            >
              <div className="bg-gray-50 rounded-3xl p-8 h-80 flex flex-col justify-between transition-all duration-300 hover:bg-gray-100 hover:scale-105">
                <div>
                  <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center" 
                       style={{ backgroundColor: brand.primaryColor }}>
                    <span className="text-white font-bold text-xl">
                      {brand.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {brand.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {brand.description}
                  </p>
                </div>
                
                <div className="flex items-center text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                  Learn more
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;