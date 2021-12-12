import React from 'react';
import {MessageDataPropsType} from "./HW1";
import s from "./AlternativeMessage.module.css";

const AlternativeMessage = (props: MessageDataPropsType) => {
    return (
        <div className={s.main}>
            <div className={s.text}>
                <div className={s.name}>{props.name}</div>
                <div className={s.message}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
            <div className={s.avatar}>
                <img src={props.avatar}/>
                <div className={s.angle}>
                    <div className={s.in}></div>
                </div>
            </div>
        </div>
    )
}

export default AlternativeMessage;
