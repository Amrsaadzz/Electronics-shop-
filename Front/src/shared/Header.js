import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import '../styles/header.css';
import { GetAuthUser, RemoveAuthUser } from '../helper/Storge';

const Header = () => {
  const auth = GetAuthUser();
  const navigate = useNavigate();

  const logout = () => {
    RemoveAuthUser();
    navigate('/app');
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to={'/'} className='nav-link'>OnTime</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className='nav-link' to={'/'}>Home</Link>
              {auth && (
                <Link className='nav-link' to={'/mangeboards'}>TeamLeaderBoard</Link>
              )}
              {!auth && (
                <>
                  <Link className='nav-link' to={'/login'}>Login</Link>
                  <Link className='nav-link' to={'/register'}>Register</Link>
                </>
              )}
            </Nav>
            <Nav className="ms-auto">
              {auth && <Link className='nav-link' onClick={logout}>Logout</Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
