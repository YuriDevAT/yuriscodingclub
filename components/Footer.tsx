import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="sitemap">
        <Link href="/">
         Go to homepage
        </Link>
      </div>
      <div className="copyright">
        <p> Made with <span style={{ color: "#CB2578" }}>&#10084;</span> and <span>&#9835;</span> by Julia Undeutsch.</p>
        <p>&copy; Yuris Coding Club 2021 - {currentYear}. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;