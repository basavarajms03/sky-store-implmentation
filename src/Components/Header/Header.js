import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderSidebar from "./Header-sidebar/Header-Sidebar";
import "./Header.css";

let menuItems = [
  {
    menuName: "Home",
    menuLink: "/"
  },
  {
    menuName: "Movies",
    menuLink: "/movies",
    subMenus: [
      {
        menuName: "New To Rent",
        menuLink: "/movies/new-to-rent"
      },
      {
        menuName: "New To Buy",
        menuLink: "/movies/new-to-buy"
      },
      {
        menuName: "Pre-Order",
        menuLink: "/movies/pre-order"
      },
      {
        menuName: "Movie Box Sets",
        menuLink: "/movies/movie-box-sets"
      },
      {
        menuName: "Official Film Chart",
        menuLink: "/movies/official-film-chart"
      },
      {
        menuName: "Browse",
        menuLink: "/movies/browse"
      },
      {
        menuName: "A to Z",
        menuLink: "/movies/a-z"
      }
    ]
  },
  {
    menuName: "Sky Store Premiere",
    menuLink: "/sky-store-premiere"
  },
  {
    menuName: "Sale",
    menuLink: "/sale",
    subMenus: [
      {
        menuName: "Store Picks",
        menuLink: "/sale/store-picks"
      },
      {
        menuName: "Under £3 / €4",
        menuLink: "/sale/under34"
      },
      {
        menuName: "Under £4 / €5",
        menuLink: "/sale/under45"
      },
      {
        menuName: "Under £5 / €6",
        menuLink: "/sale/under56"
      }
    ]
  },
  {
    menuName: "Sky VIP",
    menuLink: "/sky-vip",
    subMenus: [
      {
        menuName: "Sky VIP Gift",
        menuLink: "/sky-vip/sky-vip-gifts"
      }
    ]
  },
  {
    menuName: "TV",
    menuLink: "/tv",
    subMenus: [
      {
        menuName: "All",
        menuLink: "/tv/all"
      },
      {
        menuName: "Most Popular",
        menuLink: "/tv/most-popular"
      },
      {
        menuName: "New To Store",
        menuLink: "/tv/new-to-store"
      },
      {
        menuName: "Drama",
        menuLink: "/tv/drama"
      },
      {
        menuName: "Comedy",
        menuLink: "/tv/comedy"
      },
      {
        menuName: "Kids",
        menuLink: "/tv/kids"
      }
    ]
  },
  {
    menuName: "Redeem Voucher",
    menuLink: "/redeem-voucher",
    menuClassName: "highlighted"
  }
];

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="row top-header-bar">
        <div className="col-md-4 col-2 browse-section pl-0">
          <h6 className="m-0" onClick={() => setMenuOpen(!isMenuOpen)}>
            <i className="fas fa-bars bar-icon"></i>
            <span className="browse-text">Browse</span>
          </h6>
        </div>
        <div className="col-md-4 col-8 logo-section">
          <Link to={"/"}>
            <img
              src={
                "https://www.skystore.com/versions/6.5.8/assets/img/sky-logo@2x.png"
              }
              alt="Logo"
            />
          </Link>
        </div>
        <div className="col-md-4 col-2 auth-section pr-0">
          <div className="search-bar-mobile">
            <i className="fas fa-search"></i>
          </div>
          <ul className="auth-texts p-0">
            <li className="signIn">
              <Link to={"http://"}>Sign In</Link>
            </li>
            <li>
              <Link to={"http://"}>Sign Up</Link>
            </li>
          </ul>
          <div className="search-bar-desktop">
            <div className="search-bar">
              <input type="text" placeholder="Search" />
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation-header">
        <HeaderSidebar menuItems={menuItems} />
      </div>
      <div className="navigation-header-mobile">
        <HeaderSidebar isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </div>
  );
}

export default Header;
