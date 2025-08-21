interface LandingPageProps {
  onNavigate?: (page: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  const handleViewWork = () => {
    if (onNavigate) {
      onNavigate('work');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black opacity-80" />
        {/* Video element placeholder */}
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        >
          <source src="#" type="video/mp4" />
          {/* Placeholder for video */}
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-[15px]">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="mb-16">
            <h1 className="typography-h5 text-white/90 mb-2">
              dietrich.tv studio
            </h1>
          </div>

          {/* Main Statement */}
          <div className="relative">
            {/* Red decorative circles */}
            <div className="absolute -top-4 left-1/4 w-16 h-16 bg-red-500 rounded-full opacity-80 animate-pulse" />
            <div className="absolute top-12 right-1/3 w-12 h-12 bg-red-500 rounded-full opacity-60 animate-pulse delay-1000" />
            <div className="absolute bottom-8 left-1/3 w-20 h-20 bg-red-500 rounded-full opacity-70 animate-pulse delay-500" />
            
            <div className="typography-h2 md:text-5xl lg:text-6xl leading-tight">
              <p className="mb-4">
                we are a <em className="italic">mixed-media</em> production
              </p>
              <p className="mb-4">
                company based in são paulo <em className="italic">brazil</em> —
              </p>
              <p className="mb-4">
                working in the intersection of design, <em className="italic">film</em>
              </p>
              <p>
                production & post-production.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16">
            <button 
              onClick={handleViewWork}
              className="typography-text-link-2 text-white/80 hover:text-white border-b border-white/30 hover:border-white pb-1 transition-colors"
            >
              View Our Work →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}