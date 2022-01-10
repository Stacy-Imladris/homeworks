import React from 'react';
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData_1 = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Stacy Imladris',
    message: 'Homework is done! I really did it myself. Thank you, IT-incubator!',
    time: '03:49',
}

const messageData_2 = {
    avatar: 'http://s020.radikal.ru/i710/1311/b6/1d6e1d8d58d7.jpg',
    name: 'IT-Incubator',
    message: 'Good job! :)',
    time: '21:40',
}

export type MessageDataPropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function HW1() {
    return (
        <div>
            <hr/>
            <Message
                avatar={messageData_1.avatar}
                name={messageData_1.name}
                message={messageData_1.message}
                time={messageData_1.time}
            />
            <AlternativeMessage
                avatar={messageData_2.avatar}
                name={messageData_2.name}
                message={messageData_2.message}
                time={messageData_2.time}
            />
            <hr/>
        </div>
    )
}

export default HW1;
