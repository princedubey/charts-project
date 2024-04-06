import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);

  return (
    <Navbar expand="xxxl" className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">CHART DASHBOARD</Link>
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setShowOffcanvas(!showOffcanvas)} aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          show={showOffcanvas}
          onHide={handleCloseOffcanvas}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Prince Dubey</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link onClick={handleCloseOffcanvas} to="/">Home</Link>
              <Link onClick={handleCloseOffcanvas} to="/line-chart">Line-Chart</Link>
              <Link onClick={handleCloseOffcanvas} to="/pie-chart">Pie-Chart</Link>
              <Link onClick={handleCloseOffcanvas} to="/bar-chart">Bar-Chart</Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
