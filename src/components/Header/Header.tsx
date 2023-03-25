import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <NavLink to="/" style={{ color: "gray", textDecoration: "none" }}>
          React-Bootstrap
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="container">
              <div className="search">
                <div className="row">
                  <div className="col-md-12"> 
                    <div className="d-flex"> 
                      <div className="search-2">
                        <i className='bx bxs-map' ></i>
                        <input
                          name="text"
                          type="text"
                          placeholder="UX Designer"
                        />
                        <button>Search</button> 
                      </div> 
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
