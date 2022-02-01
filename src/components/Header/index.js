import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import { signout } from '../../actions';

/**
* @author
* @function Header
**/

export const Header = (props) => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(signout());
    }

    const loggedIn = () => {
        return (
            <Nav >
                <li className='nav-item'>
                    <span className='nav-link' onClick={logout} >Signout</span>
                </li>
            </Nav >
        )
    }

    const nonLoggedIn = () => {
        return (
            <Nav >
                <li className='nav-item'>
                    <NavLink to="/signin" className='nav-link'>Signin</NavLink>
                </li>
            </Nav >
        )
    }

    return (
        <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" style={{ zIndex: 1, cursor: 'pointer' }}>
            <Container fluid>
                {/* <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand> */}
                <Link to="/" className='navbar-brand'>Admin Dashboard</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    {auth.authenticate ? loggedIn() : nonLoggedIn()}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}