import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <nav className="footer-menu">
        <ul className="footer-menu-list">
          <li className="footer-menu-name">
            <Link to="#">About Us</Link>
          </li>
          <li className="footer-menu-name">
            <Link to="#">Contact Us</Link>
          </li>
          <li className="footer-menu-name">
            <Link to="#">Terms and Conditions</Link>
          </li>
          <li className="footer-menu-name">
            <Link to="#">Privacy and Cookies</Link>
          </li>
          <li className="footer-menu-name">
            <Link to="#">Privacy Options</Link>
          </li>
          <li className="footer-menu-name">
            <Link to="#">Help</Link>
          </li>
          <li className="footer-menu-name">
            <Link to="#">Redeem Voucher</Link>
          </li>
        </ul>
      </nav>
      <div className="footer-kingdom">
        <p className="kingom p-0">
          United Kingdom and Republic of Ireland |
          <span>
            <Link to="#">Deutschland und Österreich</Link>
          </span>
        </p>
      </div>
      <p className="copyright">&copy; Sky UK All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
