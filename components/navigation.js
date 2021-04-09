import React from 'react';
import {Navbar, NavbarBrand, Nav, NavLink, NavDropdown} from 'react-bootstrap';
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

import styles from './navigation.module.scss';

const navigation = ({active}) => {
  return (
    <Navbar bg="light" expand="lg" className={styles.Navbar}>
      <NavbarBrand href="/" className={styles.Brand}>
        Big D Classic
      </NavbarBrand>
      <NavbarToggle aria-controls="navbarText"/>
      <NavbarCollapse id="navbarText">
        <Nav className="mr-auto">
          <NavLink href="/schedule">
            Schedule
          </NavLink>
          <NavLink href="/center">
            Bowling Center
          </NavLink>
          <NavLink href="/hotel">
            Host Hotel
          </NavLink>
          <NavLink href="/">
            Results
          </NavLink>
          <NavLink href="/">
            Links
          </NavLink>
          <NavDropdown id="navbar-dropdown" title="More">
            <NavDropdown.Item href="/">
              Rules
            </NavDropdown.Item>
            <NavDropdown.Item href="/">
              Contact
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
};

export default navigation;

// .row
//   %nav.navbar.navbar-expand-lg.navbar-light.bg-light.py-0.col
//     %a.navbar-brand.py-2{href: "/"}
//       -# %img.img-fluid{src:'/images/logo-50x50.jpg', width: 45, height: 45, alt: 'Home'}
//       Big D Classic
//     %button.navbar-toggler{type: "button", 'data-toggle': "collapse", 'data-target': "#navbarText", 'aria-controls': "navbarText", 'aria-expanded': "false", alt: "Toggle navigation"}
//       %span.navbar-toggler-icon
//     #navbarText.collapse.navbar-collapse
//       %ul.navbar-nav.mr-auto.mt-2.mt-lg-0
//         %li.nav-item
//           %a.nav-link{href: '/schedule'}
//             Schedule
//         %li.nav-item
//           %a.nav-link{href: '/center'}
//             Bowling Center
//         %li.nav-item
//           %a.nav-link{href: '/hotel'}
//             Host Hotel
//         %li.nav-item
//           %a.nav-link{href: '/woodys'}
//             Host Bar
//         %li.nav-item
//           %a.nav-link{href: '/results'}
//             Results
//         %li.nav-item
//           %a.nav-link.nav-dropdown-item{href: '/links'}
//             Links
//         %li.nav-item.dropdown
//           %a.nav-link.dropdown-toggle{href: '#', 'data-toggle': "dropdown"}
//             More
//             %b.caret
//           .dropdown-menu
//             %a.nav-link.nav-dropdown-item{href: '/rules'}
//               Rules
//             %a.nav-link.nav-dropdown-item{href: '/contact'}
//               Contact
