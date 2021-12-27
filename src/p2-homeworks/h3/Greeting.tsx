import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

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

    const button = error === "Name is require!" || name.length === 0 ? true : false;
    const inputClass = error === "Name is require!" ? s.error : s.ok
    const forError = error === "Name is require!" ? s.forError : s.forOk

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button disabled={button} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div>
                <span className={forError}>{error}</span>
            </div>
        </div>
    )
}

export default Greeting