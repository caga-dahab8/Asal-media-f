const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            About <span className="font-semibold">Asal Media Group</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are a unified media conglomerate dedicated to creating, distributing, and innovating 
            across the entertainment landscape through our four distinctive brands.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                Our <span className="font-semibold">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To connect audiences worldwide through innovative storytelling, cutting-edge technology, 
                and exceptional content experiences that inspire, inform, and entertain.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe in the power of media to bridge cultures, spark conversations, 
                and create meaningful connections in an increasingly digital world.
              </p>
            </div>
            <div className="bg-gray-50 rounded-3xl p-12 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <p className="text-gray-600">Mission Visualization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Our <span className="font-semibold">Story</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-4">2010</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Foundation</h3>
              <p className="text-gray-600">
                Asal Media Group was founded with a vision to revolutionize media and entertainment.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 text-center">
              <div className="text-3xl font-bold text-green-600 mb-4">2015</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expansion</h3>
              <p className="text-gray-600">
                Launched multiple brands and expanded into digital media and production services.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 text-center">
              <div className="text-3xl font-bold text-red-600 mb-4">2024</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Introduced Nasiye platform, connecting all our brands under one unified ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Leadership <span className="font-semibold">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visionary leaders driving innovation and excellence across all our brands.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((leader) => (
              <div key={leader} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6"></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Leadership Member {leader}</h3>
                <p className="text-gray-600 mb-2">Executive Position</p>
                <p className="text-sm text-gray-500">
                  Brief description of leadership experience and vision.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6">
              Awards & <span className="font-semibold">Recognition</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { year: "2023", award: "Best Media Innovation" },
              { year: "2022", award: "Excellence in Broadcasting" },
              { year: "2021", award: "Digital Content Leadership" },
              { year: "2020", award: "Industry Pioneer Award" }
            ].map((award, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 text-center">
                <div className="text-4xl mb-4">🏆</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{award.award}</div>
                <div className="text-gray-600">{award.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
