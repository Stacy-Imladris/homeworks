import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from "./Affairs.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (priority: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter("all")
    }
    const setHigh = () => {
        props.setFilter("high")
    }
    const setMiddle = () => {
        props.setFilter("middle")
    }
    const setLow = () => {
        props.setFilter("low")
    }

    return (
        <div className={s.container}>
            <div>
                <div className={s.title}>My ToDoList:</div>
                <SuperButton onClick={setAll} className={s.button}>All</SuperButton>
                <SuperButton onClick={setHigh} className={s.button}>High</SuperButton>
                <SuperButton onClick={setMiddle} className={s.button}>Middle</SuperButton>
                <SuperButton onClick={setLow} className={s.button}>Low</SuperButton>
                <div className={s.all}>{mappedAffairs}</div>
            </div>
        </div>
    )
}

export default Affairs
