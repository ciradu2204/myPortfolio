
import React, { useState } from 'react'
import {Nav, Bars, NavMenu, NavLink, CloseBar} from './NavbarElements'
const NavBar = () =>{
    
     const [barClicked, setBarClicked] = useState(true);
     const [closeBarClicked, setCloseBarClicked] = useState(false);
     const [menuMobileOpen, setMenuMobileOpen] = useState(false);

    const OnBarClick = () =>{

        setBarClicked(prev => !prev);
        setCloseBarClicked(prev => !prev);
        setMenuMobileOpen(prev => !prev);

    }


    const OnCloseBarClick = () =>{
        setBarClicked(prev => !prev);
        setCloseBarClicked(prev => !prev);
        setMenuMobileOpen(prev => !prev);
    }

    return (
        <>
        <Nav>
            <Bars onClick={OnBarClick} barclicked={barClicked? 1: 0}/>
            <CloseBar onClick={OnCloseBarClick} closebarclicked={closeBarClicked?1:0}/>
            <NavMenu  menumobileopen= {menuMobileOpen?1:0}> 
                <NavLink to="/" exact activeClassName="any" datalinktext='HOME' >
                    HOME 
                </NavLink>
                <NavLink to="/about" activeClassName="any" datalinktext='ABOUT'>
                    ABOUT 
                </NavLink>
                <NavLink to="/work" activeClassName="any" datalinktext='WORK'>
                    WORK 
                </NavLink>
                <NavLink to="/blog" activeClassName="any" datalinktext='BLOG'>
                    BLOG 
                </NavLink>
                <NavLink to="/cv" activeClassName="any" datalinktext='CV'>
                    CV 
                </NavLink>

            </NavMenu>

        </Nav>

        </>
    )

}

export default NavBar;