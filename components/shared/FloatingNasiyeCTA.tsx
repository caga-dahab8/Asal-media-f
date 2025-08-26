import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const FloatingNasiyeCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const router = useRouter();

  // Don't show on Nasiye page
  if (router.pathname === '/nasiye') {
    return null;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // Show after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isDismissed || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-slide-up">
      <div className="relative bg-gradient-to-br from-black to-gray-900 text-white rounded-3xl p-6 shadow-2xl max-w-sm border border-gray-800 backdrop-blur-xl">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-3 -right-3 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110 font-light"
        >
          ×
        </button>
        
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
            <span className="text-white font-light text-xl">N</span>
          </div>
          <div>
            <h3 className="font-light text-lg">Download Nasiye</h3>
            <p className="text-sm text-gray-400 font-light">Premium entertainment awaits</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Link
            href="/nasiye"
            className="flex-1 bg-white text-black px-4 py-3 rounded-2xl text-sm font-medium text-center hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Learn More
          </Link>
          <a
            href="#"
            className="flex-1 border border-white/20 px-4 py-3 rounded-2xl text-sm font-medium text-center hover:bg-white/10 transition-all duration-300 backdrop-blur-sm hover:scale-105"
          >
            Download
          </a>
        </div>
        
        {/* Floating particles */}
        <div className="absolute -top-2 -left-2 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default FloatingNasiyeCTA;