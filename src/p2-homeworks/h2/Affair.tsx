import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affair.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const Style = {
        backgroundColor: props.affair.priority === "high" ? "#e14848" :
            props.affair.priority === "middle" ? "#cb811e" : "#88cc2a",
    }

    return (
        <div className={s.affair}>
                <div className={s.name}>{props.affair.name}</div>
                <div className={s.priority} style={Style}>{props.affair.priority}</div>
            <div>
                <SuperButton onClick={deleteCallback}>X</SuperButton>
            </div>
        </div>
    )
}

export default Affair
