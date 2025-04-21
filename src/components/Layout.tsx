
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
            src="https://lovable.dev/lovable-uploads/photo-1487958449943-2429e8be8625.jpeg" 
            alt="Emirates Islamic Bank" 
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
            © {new Date().getFullYear()} ADCB Bank. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

