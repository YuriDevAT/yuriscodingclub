import { ReactNode } from 'react';

import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#main">Skip to main content</a>
      <Header />
      <main className="container" id="main">
        {children}
      </main>
      <Footer />
    </>
  );
}