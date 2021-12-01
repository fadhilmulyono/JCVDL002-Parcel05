import React from "react";
import { NavbarToggler, Collapse, NavLink, Navbar, Nav, NavItem, UncontrolledDropdown, DropdownToggle, NavbarBrand, NavbarText, DropdownMenu, DropdownItem } from 'reactstrap'
import { Link } from 'react-router-dom';

class MyNavbar extends React.Component {

render() {
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Parcel Group 5</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Products</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Hello, username
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <Link href="/">Cart</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link href="/">History</Link>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                <Link href="/">Logout</Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        )
    }
}

export default (MyNavbar);