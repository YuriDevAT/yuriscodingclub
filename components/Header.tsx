import Image from 'next/image';
import Link from 'next/link';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="header">
      <Link href="/">
        <a>
          <Image priority src="/images/logo.svg" height={145} width={500} alt="Yuris Coding Club" />
        </a>
      </Link>
      <Navbar />

      <template id="burger-template">
        <button type="button" aria-expanded="false" aria-label="Menu" aria-controls="navbar">
          <svg width="24" height="24" aria-hidden="true">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </button>
      </template>
    </header>
  );
}

export default Header;