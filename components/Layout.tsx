import { ReactNode } from 'react';

import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/router';

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const isHome = router.pathname === '/';

  return (
    <>
      <a href="#main" className="skip-link" >Skip to main content</a>
      {!isHome && <Header />}
      <main className="main-container" id="main">
        {children}
      </main>
      <Footer />
    </>
  );
}