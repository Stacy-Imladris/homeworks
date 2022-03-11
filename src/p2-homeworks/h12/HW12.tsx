import React from "react";
import s from "./HW12.module.css";
import t from './common/Themes.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeTheme, ChangeThemeActionType, ThemeType} from './bll/themeReducer';
import {Dispatch} from 'redux';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';

const themes = ['day', 'night']

function HW12() {
    const theme = useSelector<AppStoreType, ThemeType>(state => state.theme.theme)
    const dispatch = useDispatch<Dispatch<ChangeThemeActionType>>()

    const onChangeCallback = (theme: ThemeType) => {
        dispatch(changeTheme(theme))
    }

    return (
        <div className={`${s.container} ${t[theme]}`}>
            <span className={t[theme + '-text']}>
                homeworks 12
            </span>
            <SuperSelect
                options={themes}
                value={theme}
                onChangeOption={onChangeCallback}
            />
        </div>
    );
}

export default HW12;
