import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="sitemap">
        <Link href="/">
          <a>Go to homepage</a>
        </Link>
        <p><b>Hacktoberfest 2022</b></p>
        <p>Join Hacktoberfest by contributing to open source projects I provide for Yuris Coding Club.</p>
        <a href="https://github.com/YurisCodingClub">Check out the source projects</a>
      </div>
      <div className="copyright">
        <p> Made with <span style={{ color: "#d82c82" }}>&#10084;</span> and <span>&#9835;</span> by Julia Undeutsch.</p>
        <p>&copy; Yuris Coding Club 2022 . All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;