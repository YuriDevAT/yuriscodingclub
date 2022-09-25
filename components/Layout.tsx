import { ReactNode } from 'react';

import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#main" className="skip-link" >Skip to main content</a>
      <Header />
      <main className="main-container" id="main">
        {children}
      </main>
      <Footer />
    </>
  );
}