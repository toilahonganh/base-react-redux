import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <NavLink to="/" className='navbar-brand'>Trang chủ</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/users" className='nav-link'>User</NavLink>
                        <NavLink to="/admin" className='nav-link'>Admin</NavLink>
                    </Nav>

                    <Nav>
                        <button className='btn-signup'>Đăng ký</button>
                        <button className='btn-login'>Đăng nhập</button>

                        {/* <NavDropdown title="Settings" id="basic-nav-dropdown">
                            <NavDropdown.Item>Login</NavDropdown.Item>
                            <NavDropdown.Item>
                                Logout
                            </NavDropdown.Item>
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;