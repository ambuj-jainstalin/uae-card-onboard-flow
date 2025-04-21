
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 md:px-8">
          <img 
            src="/lovable-uploads/cfed4b12-413a-446f-9085-adcf9de91b60.png" 
            alt="Logo" 
            className="h-10 object-contain"
          />
        </div>
      </header>
      
      <main className="container mx-auto px-4 md:px-8 py-8">
        {children}
      </main>
      
      <footer className="bg-white py-6 mt-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Purple Bank. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
