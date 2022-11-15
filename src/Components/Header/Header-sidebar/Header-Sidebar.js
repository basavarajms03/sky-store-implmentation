import { Link, NavLink } from "react-router-dom";
import "./Header-sidebar.css";

//Get all the menus from the parent component to child component
function HeaderSidebar(props) {
  function handleCloseMenu() {
    props.setMenuOpen(false);
  }

  return (
    <div className="navigation-bars" id="menu">
      <div className="navigation desktop">
        <ul className="nav-bar">
          {props.menuItems
            ? props.menuItems.map((menu, itemIndex) => {
                return (
                  <li
                    className={`nav-menu ${
                      menu.menuClassName ? " " + menu.menuClassName : ""
                    }`}
                    key={itemIndex}
                  >
                    <NavLink
                      to={menu.menuLink}
                      className={(state) =>
                        state.isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      {menu.menuName}
                      <span className="sub-menu-arrow">
                        {menu.subMenus && menu.subMenus.length > 0 ? (
                          <i className="fas fa-chevron-down"></i>
                        ) : (
                          ""
                        )}
                      </span>
                    </NavLink>
                    {menu.subMenus && menu.subMenus.length > 0 ? (
                      <ul className="nav-sub-bar">
                        {menu.subMenus.map((subMenu, index) => {
                          return (
                            <li
                              className="nav-sub-menu"
                              key={itemIndex + index}
                            >
                              <NavLink
                                to={subMenu.menuLink}
                                className={(state) =>
                                  state.isActive
                                    ? "sub-menu-link active"
                                    : "sub-menu-link"
                                }
                              >
                                {subMenu.menuName}
                              </NavLink>
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      ""
                    )}
                  </li>
                );
              })
            : ""}
        </ul>
      </div>

      {/* Mobile sidebar navigation */}
      <div
        className="mobile-sidebar"
        id="sidebar"
        style={{ left: props.isMenuOpen ? "0px" : "-300px" }}
      >
        <div className="close-sidebar">
          <i
            className="fas fa-times close-icon"
            onClick={handleCloseMenu.bind(this)}
          ></i>
        </div>
        <ul className="menu-items">
          <li className="menu-list" onClick={handleCloseMenu.bind(this)}>
            <Link to={"/"} className="menu-link">
              Home
            </Link>
          </li>
        </ul>
        <ul className="menu-items">
          <li className="menu-list" onClick={handleCloseMenu.bind(this)}>
            <Link to={"/"} className="menu-link">
              Sign In
            </Link>
          </li>
          <li className="menu-list" onClick={handleCloseMenu.bind(this)}>
            <Link to={"/"} className="menu-link">
              Sign Up
            </Link>
          </li>
        </ul>
        <ul className="menu-items">
          <li className="menu-list" onClick={handleCloseMenu.bind(this)}>
            <Link to={"/movies"} className="menu-link">
              Movies
            </Link>
          </li>
          <li className="menu-list" onClick={handleCloseMenu.bind(this)}>
            <Link to={"/"} className="menu-link">
              Sky Store Premiere
            </Link>
          </li>
          <li className="menu-list" onClick={handleCloseMenu.bind(this)}>
            <Link to={"/"} className="menu-link">
              Sale
            </Link>
          </li>
          <li className="menu-list" onClick={handleCloseMenu.bind(this)}>
            <Link to={"/"} className="menu-link">
              Sky VIP
            </Link>
          </li>
          <li className="menu-list" onClick={handleCloseMenu.bind(this)}>
            <Link to={"/"} className="menu-link">
              TV
            </Link>
          </li>
        </ul>
        <ul className="menu-items">
          <li className="menu-list" onClick={handleCloseMenu.bind(this)}>
            <Link to={"/"} className="menu-link">
              Redeem Voucher
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderSidebar;
