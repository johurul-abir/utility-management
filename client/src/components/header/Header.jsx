import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
//import logo from "../assets/img/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            BRP
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/notice">
                Notice
              </Nav.Link>
              <Nav.Link as={Link} to="/team">
                Team Member
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                <button className="btn btn-primary">Login</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <header className="header header-custom header-fixed header-one">
        <div className="container">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <a id="mobile_btn" href="">
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </a>
              <a href="index.html" className="navbar-brand logo">
                <Link to="/">
                  <h2>BRP</h2>
                </Link>
              </a>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <a id="menu_close" className="menu-close" href="">
                  <i className="fas fa-times" />
                </a>
              </div>
              <ul className="main-nav">
                <li className="has-submenu megamenu active">
                  <Link to="/">Home</Link>
                </li>
                <li className="searchbar">
                  <a href="">
                    <i className="feather-search" />
                  </a>
                </li>

                {location.pathname == "/dashboard" ? (
                  " "
                ) : (
                  <>
                 
                    <li className="register-btn">
                      <Link to="/login" className="btn btn-primary log-btn">
                        <i className="feather-lock" />
                        Login
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </header> */}
    </>
  );
};

export default Header;
