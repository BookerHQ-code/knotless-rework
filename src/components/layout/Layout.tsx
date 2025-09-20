import { ReactNode } from 'react';
import TopNav from './TopNav';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='min-h-screen flex flex-col bg-[#FFE8C9]'>
      <TopNav />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
