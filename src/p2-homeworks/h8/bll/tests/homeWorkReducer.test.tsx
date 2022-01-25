import React from 'react'
import {checkAC, homeWorkReducer, sortAC} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[]

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, sortAC('up'))
    const testArray = initialState.map(u => u.name).sort((a, b) => a > b ? 1 : -1)

    expect(newState.length).toBe(6)
    expect(newState[0].name).toBe('Александр')
    expect(newState.map(u => u.name)).toStrictEqual(testArray)
})

test('sort name down', () => {
    const newState = homeWorkReducer(initialState, sortAC('down'))
    const testArray = initialState.map(u => u.name).sort((a, b) => a < b ? 1 : -1)

    expect(newState.length).toBe(6)
    expect(newState[0].name).toBe('Кот')
    expect(newState.map(u => u.name)).toStrictEqual(testArray)
})

test('check age 18', () => {
    const newState = homeWorkReducer(initialState, checkAC(18))

    expect(newState.length).toBe(4)
    expect(newState.every(u => u.age >= 18)).toBeTruthy()
})
