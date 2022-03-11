import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {SuperDoubleRange} from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'
import t from '../h12/common/Themes.module.css'
import {AlternativeSuperDoubleRange} from './common/AlternativeSuperDoubleRange/AlternativeSuperDoubleRange';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {ThemeType} from '../h12/bll/themeReducer';

function HW11() {
    const theme = useSelector<AppStoreType, ThemeType>(state => state.theme.theme)

    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const changeValue = (value: number) => {
        if (value < value2) {
            setValue1(value)
        }
    }

    const changeTwoValue = (value: [number, number] | number[]) => {
        setValue1(value[0])
        setValue2(value[1])
    }

    return (
        <div>
            <hr/>
            <div className={s.main}>
                <div className={s.input}>
                    <span className={`${s.num} ${t[theme + '-text']}`}>{value1}</span>
                    <SuperRange
                        onChangeRange={changeValue}
                        value={value1}
                    />
                </div>
                <div className={s.input}>
                    <span className={`${s.num} ${t[theme + '-text']}`}>{value1}</span>
                    <SuperDoubleRange
                        value={[value1, value2]}
                        onChangeRange={changeTwoValue}
                    />
                    <span className={`${s.num} ${t[theme + '-text']}`}>{value2}</span>
                </div>
                {/*для личного творчества, могу проверить*/}
                {/*<AlternativeSuperRange/>*/}
                <div className={s.input}>
                    <span className={`${s.num} ${t[theme + '-text']}`}>{value1}</span>
                    <AlternativeSuperDoubleRange
                        value={[value1, value2]}
                        onChangeRange={changeTwoValue}
                    />
                    <span className={`${s.num} ${t[theme + '-text']}`}>{value2}</span>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default HW11
