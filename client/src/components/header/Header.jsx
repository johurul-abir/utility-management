import { Link, useLocation } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
//import logo from "../assets/img/logo.png";
import "./Header.scss";

const Header = () => {
  const location = useLocation();

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h2 className="text-info">BRP</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={Link}
                to="/"
                className={location.pathname === "/" ? "text-info" : undefined}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/notice"
                className={
                  location.pathname === "/notice" ? "text-info" : undefined
                }
              >
                Notice
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/team"
                className={
                  location.pathname === "/team" ? "text-info" : undefined
                }
              >
                Team Member
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                <button className="btn btn-info">Login</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
