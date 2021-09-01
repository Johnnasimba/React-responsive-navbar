import React from 'react';
import style from 'styled-components';

const  NavbarItem = style.nav`

`;
const NavbarLogo =  style.h1`
`;
const MenuIcon = style.div`
`;

const Navbar = () => {
    return (
        <NavbarItem>
            <NavbarLogo>React</NavbarLogo>
            <MenuIcon>

            </MenuIcon>
            <ul>
                <li><a href="/">menu </a></li>
            </ul>
        </NavbarItem>
    )
}


export default Navbar;