import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {AppStoreType} from "./bll/store";
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import s from './HW10.module.css'

function HW10() {
    // useSelector, useDispatch
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        // dispatch
        dispatch(loadingAC(true))
        // setTimeout
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
    };

    return (
        <div className={s.container}>
            <div>{isLoading ? <div className={s.progress}><div></div></div>
                : <SuperButton onClick={setLoading}>set loading</SuperButton>}
            </div>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
        </div>
    )
}

export default HW10
