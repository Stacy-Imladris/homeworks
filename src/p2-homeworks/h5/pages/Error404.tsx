import React from 'react'
import s from './Error.module.css'
import {PATH} from "../MyRoutes";
import {NavLink} from "react-router-dom";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";

function Error404() {
    return (
        <div className={s.container}>
            <div className={s.error}>404</div>
            <div className={s.text}>Page not found!</div>
            <div className={s.textNav}>Maybe, you want to see our <NavLink to={PATH.PRE_JUNIOR} className={s.nav}>Pre-Junior</NavLink> page?</div>
            <div>In case you decide to leave this awesome application, press button:
                <div className={s.joke}><SuperButton>Leave</SuperButton></div>
            </div>
        </div>
    )
}

export default Error404
