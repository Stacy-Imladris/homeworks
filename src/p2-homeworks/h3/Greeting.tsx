import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

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

    const button = error === "Name is require!" || name.length === 0;
    const inputClass = error === "Name is require!" ? s.error : s.ok
    const forError = error === "Name is require!" ? s.forError : s.forOk

    return (
        <div>
            <SuperInputText
                value={name}
                onChange={setNameCallback}
                error={error}
                spanClassName={forError}
                className={inputClass}
            />
            <div className={s.cont}>
                <SuperButton disabled={button} onClick={addUser} className={s.button}>add</SuperButton>
                <span>Total number: {totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting