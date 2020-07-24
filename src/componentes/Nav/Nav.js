import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem

} from 'reactstrap';

import './nav.css';
import { Link } from 'react-router-dom';



const NavB = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar-div">

      <Navbar className="navbar"  expand="md">
        <div>
          <NavbarBrand >
            <Link to="/" className="navbar-text">Conexão Vênus</Link>
          </NavbarBrand>
        </div>
        <NavbarToggler onClick={toggle}  />
        <div className="navbar-link-div">

          <Collapse isOpen={isOpen} navbar >
            <Nav className="mr-auto" navbar >
              <NavItem>

                <Link to="/maisinformacoes" className="navbar-link">O que é assédio sexual?</Link>
              </NavItem>
              <NavItem>
                <Link to="/informacoes-uteis" className="navbar-link" >Informações úteis</Link>
              </NavItem>
            </Nav>

          </Collapse>
        </div>
      </Navbar>
    </div>

  );
}

export default NavB;