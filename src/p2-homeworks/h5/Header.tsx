import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "./MyRoutes";

function Header() {
    return (
        <nav className={s.main}>
            <div className={s.links}>
                <NavLink to={PATH.PRE_JUNIOR}
                         className={({isActive}) => isActive ? s.active : s.nav}>Pre-Junior</NavLink>
                <NavLink to={PATH.JUNIOR}
                         className={({isActive}) => isActive ? s.active : s.nav}>Junior</NavLink>
                <NavLink to={PATH.JUNIOR_PLUS}
                         className={({isActive}) => isActive ? s.active : s.nav}>Junior+</NavLink>
            </div>
            <div className={s.menu}>Menu</div>
        </nav>
    )
}

export default Header