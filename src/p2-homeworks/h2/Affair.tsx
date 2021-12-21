import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affair.module.css"

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
        backgroundColor: props.affair.priority === "high" ? "#cb0c0c" :
            props.affair.priority === "middle" ? "#ee6800" : "#5a9f00",
    }

    return (
        <div className={s.affair}>
            <div className={s.name}>{props.affair.name}</div>
            <div className={s.priority} style={Style}>{props.affair.priority}</div>
            <div className={s.button}>
                <button onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
