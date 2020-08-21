import React, { useState } from 'react'
import UseBaseContext from '../ContextApi/UseBaseContext'
import { Button, Form, Nav, Navbar, NavbarBrand, NavItem, InputGroup, Input, InputGroupAddon } from 'reactstrap';

const Header = ()=> {
    /* get the context instance */
    const { setData } = UseBaseContext();

    /* a must declaration to set and get the data */
    const [searchVal, setSearchVal] = useState('');

    /* responsible for handling the changes */
    function handleChange(e) {
        setSearchVal(e.target.value);
    }

    //handle the search click button
    function onSearchClick(e) {
        e.preventDefault();
        /**
         * Standard way to set or get the data
         * ACROSS THE UNIVERSE!
         */
        setData(searchVal, "search");
    }

    return (
        <Navbar className="sticky-menu z-index-1" color="dark" light expand="md">
            <NavbarBrand className="text-white" href="/"><b>GB</b>News</NavbarBrand>
            <Nav className="right-search">
                <NavItem>
                    <Form onSubmit={onSearchClick}>
                            <InputGroup>
                                <Input placeholder="Search" onChange={handleChange} />
                                <InputGroupAddon addonType="append">
                                    <Button onClick={onSearchClick} color="secondary">Search</Button>
                                </InputGroupAddon>
                            </InputGroup>
                     </Form>     
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default Header;