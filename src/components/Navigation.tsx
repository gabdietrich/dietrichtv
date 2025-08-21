import { Button } from "./ui/button";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isTransitioning?: boolean;
}

export default function Navigation({ currentPage, onPageChange, isTransitioning = false }: NavigationProps) {
  const pages = [
    { id: 'contact', label: 'Contact' }
  ];

  const isHomePage = currentPage === 'home';
  
  // Logo click logic: if on Work page -> go to Home, otherwise -> go to Work
  const handleLogoClick = () => {
    if (currentPage === 'work') {
      onPageChange('home');
    } else {
      onPageChange('work');
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${
      isHomePage 
        ? 'bg-black/30 border-black'
        : 'bg-white/70 border-black' 
    }`}>
      {/* Glass effect overlay */}
      <div className={`absolute inset-0 ${
        isHomePage
          ? 'bg-gradient-to-b from-white/5 to-transparent'
          : 'bg-gradient-to-b from-white/20 to-transparent'
      }`}></div>
      
      <div className="relative max-w-7xl mx-auto px-[15px] py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={handleLogoClick}
            disabled={isTransitioning}
            className={`text-lg font-medium transition-all duration-200 hover:opacity-80 font-['Instrument_Sans'] ${
              isHomePage ? 'text-white' : 'text-black'
            } ${isTransitioning ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}
          >
            dietrich.tv studio
          </button>
          <div className="flex gap-8">
            {pages.map((page) => (
              <Button
                key={page.id}
                variant="ghost"
                onClick={() => onPageChange(page.id)}
                className={`typography-text-link transition-all duration-200 ${
                  isHomePage
                    ? currentPage === page.id 
                      ? 'text-white hover:text-white' 
                      : 'text-white/70 hover:text-white'
                    : currentPage === page.id 
                      ? 'text-black hover:text-black' 
                      : 'text-black/70 hover:text-black'
                } ${isTransitioning ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}
              >
                {page.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}