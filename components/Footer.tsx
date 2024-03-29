import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="sitemap">
        <Link href="/">
          <a>Go to homepage</a>
        </Link>
        <p><b>Hacktoberfest 2023</b></p>
        <p>YurisCodingClub is a maintainer project during Hacktoberfest. Issues are provided to all kind of contributors, <br />such as first-time-contributors and no-code-contributors. </p>
        {/* <p>YCC will be part of Hacktoberfest 2023 as well. But you can contribute the whole year.</p> */}
        <a href="https://github.com/YurisCodingClub">Check out the source projects</a>

      </div>
      <div className="copyright">
        <p> Made with <span style={{ color: "#CB2578" }}>&#10084;</span> and <span>&#9835;</span> by Julia Undeutsch.</p>
        <p>&copy; Yuris Coding Club {currentYear}. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;