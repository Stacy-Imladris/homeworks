import React from 'react'
import s from '../c8-SuperDoubleRange/SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

export const AlternativeSuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    //const [arr, setArr] = useState<[number, number]>(value ? value : [0, 100])


    return (
        <>
            <div className={s.container}>

            </div>
        </>
    )
}