import React from "react";
import PropTypes from "prop-types";
import "./scss/_nav.scss";
import { connect } from "react-redux";
import * as belloteroActions from "../../store/actions";
import { Link } from "react-router-dom";

const NavBar = props => {
  const { navItems, setActiveNav, getNavItems } = props;
  React.useEffect(() => {
    getNavItems();
  }, [getNavItems]);

  return (
    <header>
      <nav className="navbar navbar-expand navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="assets/images/bellotero.svg" alt="" />
          </a>
          <ul className="navbar-nav">
            {navItems.map((nav, index) => (
              <li
                key={index}
                className={nav.active ? "nav-item active" : "nav-item"}
              >
                <Link
                  className="nav-link"
                  to={nav.route}
                  onClick={() => setActiveNav(nav.text)}
                >
                  {nav.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

NavBar.propTypes = { navItems: PropTypes.array.isRequired };
const mapStateToProps = state => {
  return {
    navItems: state.navItems,    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNavItems: () => dispatch(belloteroActions.getNavItems()),
    setActiveNav: text => dispatch(belloteroActions.onClickNavHandler(text))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
