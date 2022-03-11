import React, {useState} from 'react'
import {checkAC, homeWorkReducer, sortAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'
import t from '../h12/common/Themes.module.css'
import {useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {ThemeType} from '../h12/bll/themeReducer';

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const theme = useSelector<AppStoreType, ThemeType>(state => state.theme.theme)

    const [people, setPeople] = useState<Array<UserType>>(initialPeople)

    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={`${s.line} ${t[theme + '-text']}`}>
            <div className={s.name}>{p.name}</div>
            <div className={s.age}>{p.age}</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortAC('up')))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortAC('down')))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, checkAC(18)))

    return (
        <div className={s.container}>
            <div className={s.list}>
                {finalPeople}
            </div>
            <div>
                <SuperButton onClick={sortUp}>sort up</SuperButton>
                <SuperButton onClick={sortDown}>sort down</SuperButton>
                <SuperButton onClick={check18}>check 18</SuperButton>
            </div>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
        </div>
    )
}

export default HW8
