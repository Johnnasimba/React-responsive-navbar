import React, { useState } from 'react';
import style from 'styled-components';
import { Button } from '../button/button.component';
import { MenuItems } from './menu-items';

import './navbar.styles.css'

const  NavbarItem = style.nav`
    background: linear-gradient(90deg, rgb(110, 94, 254) 0%, rgb(73, 63, 251, 1) 100%);
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
`;
const NavbarLogo =  style.h1`
    color: #fff;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
`;
const ReactIcon = style.i`
    margin-left: 0.5rem;
    font-sizes: 1.6rem;
`;
const MenuIcon = style.div`
    display: none;
`;

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

  
    return (
        <NavbarItem>
            <NavbarLogo>React <ReactIcon className="fab fa-react"></ReactIcon> </NavbarLogo>
            <MenuIcon onClick={() => setClicked(!clicked)}>
                <i className={clicked? 'fas fa-times': 'fas fa-bars'} ></i>
            </MenuIcon>
            <ul className={clicked? 'nav-menu active': 'nav-menu'}>
                {
                    MenuItems.map((item, index)=> (
                        <li key= {index}>
                            <a className={item.name} href={item.url}> {item.title} </a>
                        </li>
                    ))
                }
                
            </ul>
            <Button>Sign Up</Button>
        </NavbarItem>
    )
}


export default Navbar;