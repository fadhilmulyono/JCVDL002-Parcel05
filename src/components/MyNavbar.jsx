import React from "react";
import { Navbar, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, NavbarBrand, NavbarText, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class MyNavbar extends React.Component {

render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <NavbarBrand>Parcel Group 5</NavbarBrand>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                    <NavItem active>
                        <NavLink href="/home">Home</NavLink>
                        <span class="sr-only">(current)</span>
                    </NavItem>
                    <li class="nav-item">
                        <NavLink href="/">About</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink href="/">Services</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink href="/">Contact</NavLink>
                    </li>
                    <li class="nav-item dropdown">
                        <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Hello, username
                        </DropdownToggle>
                        <DropdownMenu end>
                            <DropdownItem>
                                <Link to="/cart">Cart (0)</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/history">History</Link>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={this.props.logoutUser}>
                                Logout
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
        )
    }
}

export default (MyNavbar);