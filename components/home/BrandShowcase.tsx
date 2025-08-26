import Link from "next/link";
import { siteConfig } from "../../config/siteConfig";

const BrandShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3 tracking-tight">
            Our Brands
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Four distinct brands, one unified vision of excellence in media and
            entertainment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.brands.map((brand, index) => (
            <Link
              key={brand.id}
              href={`/brands/${brand.id}`}
              className="group block"
            >
              <div className="bg-gray-50 rounded-2xl p-6 h-72 flex flex-col justify-between transition-all duration-300 hover:bg-gray-100 hover:shadow-lg">
                <div>
                  <div
                    className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                    style={{ backgroundColor: brand.primaryColor }}
                  >
                    <span className="text-white font-semibold text-xl">
                      {brand.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">
                    {brand.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {brand.description}
                  </p>
                </div>

                <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
