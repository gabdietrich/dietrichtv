import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import WorkPage from './components/WorkPage';
import ContactPage from './components/ContactPage';
import ProjectPage from './components/ProjectPage';

interface RouteState {
  page: string;
  projectId?: number;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [displayedPage, setDisplayedPage] = useState('home');
  const [currentProjectId, setCurrentProjectId] = useState<number | null>(null);
  const [displayedProjectId, setDisplayedProjectId] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Parse current URL to determine page and project
  const parseUrl = (): RouteState => {
    const path = window.location.pathname;
    
    if (path === '/' || path === '') {
      return { page: 'home' };
    } else if (path === '/work') {
      return { page: 'work' };
    } else if (path === '/contact') {
      return { page: 'contact' };
    } else if (path.startsWith('/project/')) {
      const projectId = parseInt(path.split('/')[2]);
      if (!isNaN(projectId)) {
        return { page: 'project', projectId };
      }
    }
    
    // Default fallback
    return { page: 'home' };
  };

  // Initialize page state from URL
  useEffect(() => {
    const route = parseUrl();
    setCurrentPage(route.page);
    setDisplayedPage(route.page);
    setCurrentProjectId(route.projectId || null);
    setDisplayedProjectId(route.projectId || null);
  }, []);

  // Listen for browser back/forward events
  useEffect(() => {
    const handlePopState = () => {
      const route = parseUrl();
      handleNavigateInternal(route.page, route.projectId, false); // false = don't push to history
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigateInternal = (page: string, projectId?: number, pushToHistory: boolean = true) => {
    // Don't start a new transition if one is already in progress
    if (isTransitioning) return;
    
    // If navigating to the same page, no transition needed
    if (page === currentPage && (!projectId || projectId === currentProjectId)) return;
    
    setIsTransitioning(true);
    setCurrentPage(page);
    
    // Update project ID state
    if (projectId) {
      setCurrentProjectId(projectId);
    } else {
      setCurrentProjectId(null);
    }

    // Update URL if needed
    if (pushToHistory) {
      let newPath = '/';
      if (page === 'work') {
        newPath = '/work';
      } else if (page === 'contact') {
        newPath = '/contact';
      } else if (page === 'project' && projectId) {
        newPath = `/project/${projectId}`;
      }
      
      if (window.location.pathname !== newPath) {
        window.history.pushState({ page, projectId }, '', newPath);
      }
    }
    
    // After fade-out completes, change the displayed content and fade back in
    setTimeout(() => {
      setDisplayedPage(page);
      if (projectId) {
        setDisplayedProjectId(projectId);
      } else {
        setDisplayedProjectId(null);
      }
      // Reset scroll position to top when changing pages
      window.scrollTo(0, 0);
      setIsTransitioning(false);
    }, 300); // 300ms for fade-out
  };

  const handleNavigate = (page: string, projectId?: number) => {
    handleNavigateInternal(page, projectId, true);
  };

  const renderPage = () => {
    switch (displayedPage) {
      case 'home':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'work':
        return <WorkPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'project':
        return displayedProjectId ? (
          <ProjectPage projectId={displayedProjectId} onNavigate={handleNavigate} />
        ) : (
          <WorkPage onNavigate={handleNavigate} />
        );
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-black relative">
      {currentPage !== 'home' && (
        <Navigation 
          currentPage={currentPage} 
          onPageChange={handleNavigate} 
          isTransitioning={isTransitioning}
        />
      )}
      <div 
        className={`transition-opacity duration-300 ease-out ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {renderPage()}
      </div>
      
      {/* White fade overlay */}
      <div 
        className={`fixed inset-0 bg-white pointer-events-none z-40 transition-opacity duration-300 ease-out ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}