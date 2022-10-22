import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar" id="mainnav">
      <ul>
        <li>
          <Link href="/about">
            <a aria-current="page">about</a>
          </Link>
        </li>
        <li>
          <Link href="/get-into-coding">
            <a>get into coding</a>
          </Link>
        </li>
        <li>
          <Link href="/create-a-portfolio">
            <a>create a portfolio</a>
          </Link>
        </li>
        <li>
          <Link href="/get-a-job">
            <a>get a job</a>
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