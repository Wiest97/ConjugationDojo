import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';
import './styles/NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
        <nav className="w-navbar">
              <ul>
                <li className="nav-item">
                  <NavLink className="nav-link" tag={Link} to="/">Home</NavLink>
                </li>
                <LoginMenu className="nav-link">
                </LoginMenu>
              </ul>
        </nav>
    );
  }
}
