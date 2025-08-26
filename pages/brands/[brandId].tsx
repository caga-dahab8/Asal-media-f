import { useRouter } from "next/router";
import Link from "next/link";
import { siteConfig } from "../../config/siteConfig";

const BrandPage: React.FC = () => {
  const router = useRouter();
  const { brandId } = router.query;
  
  const brand = siteConfig.brands.find(b => b.id === brandId);
  
  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Brand Not Found</h1>
          <Link href="/brands" className="text-blue-600 hover:text-blue-800">
            Back to Brands
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 rounded-3xl mx-auto mb-8 flex items-center justify-center" 
               style={{ backgroundColor: brand.primaryColor }}>
            <span className="text-white font-bold text-3xl">
              {brand.name.charAt(0)}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            {brand.name}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {brand.description}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              What we <span className="font-semibold">offer</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((service) => (
              <div key={service} className="bg-gray-50 rounded-3xl p-8">
                <div className="w-12 h-12 rounded-2xl mb-6 flex items-center justify-center"
                     style={{ backgroundColor: brand.primaryColor }}>
                  <span className="text-white font-bold">S</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Service {service}
                </h3>
                <p className="text-gray-600">
                  Detailed description of the service offered by {brand.name}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Featured <span className="font-semibold">Projects</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <div key={project} className="bg-white rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Project {project}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Brief description of the project and its impact.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-6">
            Work with <span className="font-semibold">{brand.name}</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ready to start your next project? Get in touch with our {brand.name} team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors duration-200"
            >
              Get in Touch
            </Link>
            <Link
              href="/portfolio"
              className="border border-gray-300 hover:border-gray-400 text-gray-900 px-8 py-4 rounded-full text-lg font-medium transition-colors duration-200"
            >
              View All Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandPage;