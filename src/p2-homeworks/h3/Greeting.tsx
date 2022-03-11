import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import t from '../h12/common/Themes.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {ThemeType} from '../h12/bll/themeReducer';

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const theme = useSelector<AppStoreType, ThemeType>(state => state.theme.theme)

    const button = error === "Name is require!" || name.length === 0;
    const inputClass = error === "Name is require!" ? s.error : s.ok
    const forError = error === "Name is require!" ? s.forError : s.forOk

    return (
        <div className={s.cont}>
            <SuperInputText
                value={name}
                onChange={setNameCallback}
                error={error}
                spanClassName={forError}
                className={inputClass}
            />
            <div>
                <SuperButton disabled={button} onClick={addUser} className={s.button}>add</SuperButton>
                <span className={t[theme + '-text']}>Total number: {totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting