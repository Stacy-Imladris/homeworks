import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('Enter your name')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let withoutSpace = e.currentTarget.value.trim()
        if (withoutSpace){
            setName(withoutSpace)
            setError("Name is correct!")
        }
        else {
            setError("Name is require!")
            setName("")
        }
    }
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name}!`)
        setName('')
        setError('Enter your name')
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer