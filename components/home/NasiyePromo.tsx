import Link from "next/link";

const NasiyePromo: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-red-500 to-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Experience <span className="font-semibold">Nasiye</span>
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Your gateway to premium entertainment, news, and interactive content. 
              Download the app and join millions of users worldwide.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                <span>Live streaming and on-demand content</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                <span>Personalized recommendations</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-4"></div>
                <span>Multi-device synchronization</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="bg-white text-red-600 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200 text-center"
              >
                Download for iOS
              </a>
              <a
                href="#"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-red-600 transition-colors duration-200 text-center"
              >
                Download for Android
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <span className="text-red-600 font-bold text-2xl">N</span>
                </div>
                <p className="text-lg opacity-75">App Preview</p>
                <p className="text-sm opacity-60 mt-2">Screenshots coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NasiyePromo;