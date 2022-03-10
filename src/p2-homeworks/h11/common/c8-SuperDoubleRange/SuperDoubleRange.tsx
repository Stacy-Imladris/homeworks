import React from 'react'
import s from './SuperDoubleRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

export const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {

    const onChangeCallback = (arr: [number, number]) => {
        onChangeRange && onChangeRange(arr)
    }
    const onChange = (val: number, n: number) => {
        if (value) {
            let condition = n === 0 ? val < value[1] : val > value[0]
            if (condition) {
                onChangeCallback(n === 0 ? [val, value[1]] : [value[0], val])
            }
        }
    }

    return (
        <>
            <div className={s.container}>
                <input type="range" min={0} step={1} max={100} value={value ? value[0] : 0}
                       onChange={(e) => onChange(+e.currentTarget.value, 0)} className={s.slider}/>
                <input type="range" min={0} step={1} max={100} value={value ? value[1] : 100}
                       onChange={(e) => onChange(+e.currentTarget.value, 1)} className={s.slider1}/>
            </div>
        </>
    )
}