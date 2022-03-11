import React from 'react';
import {MessageDataPropsType} from "./HW1";
import s from "./Message.module.css";
import t from '../h12/common/Themes.module.css'
import {useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {ThemeType} from '../h12/bll/themeReducer';

const Message = (props: MessageDataPropsType) => {
    const theme = useSelector<AppStoreType, ThemeType>(state => state.theme.theme)

    const avatarClassName = `${s.avatar} ${props.messageLeft ? s.avatarLeft : s.avatarRight}`
    const inClassName = `${s.in} ${props.messageLeft ? s.inLeft : s.inRight}`
    const textClassName = `${s.text} ${props.messageLeft ? s.textLeft : s.textRight}`
    const mainClassName = `${s.main} ${props.messageLeft ? s.mainLeft : s.mainRight}`

    return (
        <div>
            <div className={mainClassName}>
                <div className={avatarClassName}>
                    <img src={props.avatar} alt={''}/>
                    <div className={s.angle}>
                        <div className={`${inClassName} ${t[theme]}`}></div>
                    </div>
                </div>
                <div className={textClassName}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.message}>{props.message}</div>
                    <div className={s.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message;
