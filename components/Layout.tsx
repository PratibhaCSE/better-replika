// components/Layout.tsx
import { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto px-6 md:px-12 mt-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
