import React from 'react';
import Message from "./Message";
import s from './HW1.module.css'

const messageData_1 = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Stacy Imladris',
    message: 'Homework is done! I really did it myself. Thank you, IT-incubator!',
    time: '03:49',
}

const messageData_2 = {
    avatar: 'http://pm1.narvii.com/6852/19fba6ebc1b4fb11524b9eede9b0e6609c24dd88v2_00.jpg',
    name: 'IT-Incubator',
    message: 'Good job! :)',
    time: '21:40',
}

export type MessageDataPropsType = {
    avatar: string
    name: string
    message: string
    time: string
    messageLeft?: boolean
}

function HW1() {
    return (
        <div>
            <hr/>
            <div className={s.mainCont}>
                <Message
                    avatar={messageData_1.avatar}
                    name={messageData_1.name}
                    message={messageData_1.message}
                    time={messageData_1.time}
                    messageLeft
                />
                <Message
                    avatar={messageData_2.avatar}
                    name={messageData_2.name}
                    message={messageData_2.message}
                    time={messageData_2.time}
                    messageLeft={false}
                />
            </div>
            <hr/>
        </div>
    )
}

export default HW1;
