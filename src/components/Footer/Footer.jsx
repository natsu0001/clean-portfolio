import "./Footer.css" ;

const Footer = () => (
  <footer className="footer">
    <a
      href="https://github.com/natsu0001"
      target="_blank"
      rel="noopener noreferrer"
      className="link footer__link"
    >
      © {new Date().getFullYear()} Abhishek Talukdar
    </a>
  </footer>
);

export default Footer;
