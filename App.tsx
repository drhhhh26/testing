import React, { useState } from 'react';
import { MenuCard } from './components/MenuCard';
import { NavItem } from './types';
import { LomdotPage } from './components/LomdotPage';

type ViewState = 'home' | 'tutorials';

const App: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const menuItems: NavItem[] = [
    {
      id: 'tutorials',
      title: 'לומדות',
      iconClass: 'fa-solid fa-laptop-medical',
      delay: 200,
    },
    {
      id: 'quizzes',
      title: 'בחנים',
      iconClass: 'fa-solid fa-clipboard-check',
      delay: 300,
    },
    {
      id: 'literature',
      title: 'ספרות מקצועית',
      iconClass: 'fa-solid fa-book-medical',
      delay: 400,
    },
  ];

  const handleNavClick = (id: string) => {
    setActiveItem(id);
    
    setTimeout(() => {
      if (id === 'tutorials') {
        setCurrentView('tutorials');
        setActiveItem(null);
      } else {
        console.log(`Navigating to: ${id}`);
        setActiveItem(null);
      }
    }, 300);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  if (currentView === 'tutorials') {
    return <LomdotPage onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen w-full bg-luxury flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-sage/40 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-[-15%] left-[-15%] w-[500px] h-[500px] bg-bronze/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Content Container */}
      <main className="w-full max-w-md z-10 flex flex-col gap-10">
        
        {/* Header Section */}
        <header className="text-center animate-fade-in-up">
          <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white shadow-lg shadow-sage/50 text-bronze">
            <i className="fa-solid fa-star-of-life text-4xl animate-pulse-slow"></i>
          </div>
          
          <h1 className="text-4xl font-bold text-charcoal tracking-tight mb-2">
            מדור רפואה
          </h1>
          <div className="h-1 w-12 bg-bronze mx-auto rounded-full mb-3"></div>
          <h2 className="text-lg text-bronze font-medium tracking-wide">
            בא״פ העורף
          </h2>
        </header>

        {/* Navigation Menu */}
        <nav className="flex flex-col gap-5 w-full px-2">
          {menuItems.map((item) => (
            <MenuCard 
              key={item.id} 
              item={item} 
              onClick={handleNavClick} 
            />
          ))}
        </nav>

        {/* Footer info */}
        <footer className="mt-12 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <p className="text-xs text-charcoal/50 font-medium">
            © 2024 כל הזכויות שמורות
          </p>
        </footer>

      </main>

      {/* Optional: Feedback layer */}
      {activeItem && (
        <div className="fixed inset-0 bg-charcoal/5 z-50 pointer-events-none transition-opacity duration-300"></div>
      )}
    </div>
  );
};

export default App;