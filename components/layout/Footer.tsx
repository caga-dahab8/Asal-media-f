import Link from "next/link";
import { siteConfig } from "../../config/siteConfig";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Asal Media Group</h3>
            <p className="text-gray-600 text-sm mb-4 max-w-md">
              Connecting brands through innovative media solutions. Home to Asal TV, Jil Media, Masrax Production, and Nasiye.
            </p>
            <div className="flex space-x-4">
              {siteConfig.socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {siteConfig.navigation.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Our Brands</h4>
            <ul className="space-y-2">
              {siteConfig.brands.map((brand) => (
                <li key={brand.id}>
                  <Link href={`/brands/${brand.id}`} className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* App Download Section */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Download Nasiye App</h4>
              <div className="flex space-x-4">
                <a href="#" className="inline-block">
                  <div className="bg-black text-white px-4 py-2 rounded-lg text-xs">
                    App Store
                  </div>
                </a>
                <a href="#" className="inline-block">
                  <div className="bg-black text-white px-4 py-2 rounded-lg text-xs">
                    Google Play
                  </div>
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Asal Media Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
