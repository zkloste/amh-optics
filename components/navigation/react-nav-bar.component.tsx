import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  // { text: "Contact", href: "/contact" },
];

const ReactNavBar = () => {
  return (
    <Container>
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <Container>
          <Link href="/">
            <Navbar.Brand as="a" href="/">
              AMH Optics
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/">
                <Nav.Link as="a" href="/">
                  Home
                </Nav.Link>
              </Link>
              <Link href="/about">
                <Nav.Link as="a" href="/about">
                  About
                </Nav.Link>
              </Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <Link href="/services">
                  <NavDropdown.Item as="a" href="/services">
                    Real Estate
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Item href="#action/3.2">Sports</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Events</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default ReactNavBar;
