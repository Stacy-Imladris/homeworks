import React from 'react'
import s from './Error.module.css'
import {PATH} from "../MyRoutes";
import {NavLink} from "react-router-dom";

function Error404() {
    return (
        <div className={s.container}>
            <div className={s.error}>404</div>
            <div className={s.text}>Page not found!</div>
            <div>Maybe, you want to see our <NavLink to={PATH.PRE_JUNIOR} className={s.nav}>Pre-Junior</NavLink> page?</div>
        </div>
    )
}

export default Error404
