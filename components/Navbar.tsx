import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar" id="mainnav">
      <ul>
        <li>
          <Link href="/about" aria-current="page">
            about
          </Link>
        </li>
        <li>
          <Link href="/get-into-coding">get into coding
          </Link>
        </li>
        <li>
          <Link href="/create-a-portfolio">
            create a portfolio
          </Link>
        </li>
        <li>
          <Link href="/get-a-job">
            get a job
          </Link>
        </li>
        <li>
          {/* <Link href="/junior-to-senior"> */}
          <p className="tooltip">junior to senior
            <span className="tooltipText">
              coming soon
            </span></p>
          {/* </Link> */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;