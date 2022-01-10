import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "./MyRoutes";

function Header() {
    return (
        <nav>
            <NavLink to={PATH.PRE_JUNIOR} className={({isActive}) => isActive ? s.active : s.nav}>Pre-Junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={({isActive}) => isActive ? s.active : s.nav}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={({isActive}) => isActive ? s.active : s.nav}>Junior+</NavLink>
            <NavLink to={''}>404</NavLink>
        </nav>
    )
}

export default Header
