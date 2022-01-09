import React, {useState} from 'react'
import Affairs from './Affairs'
import s from './HW2.module.css'

// types
export type AffairPriorityType = "high" | "middle" | "low"
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'Study', priority: 'high'},
    {_id: 2, name: 'Books', priority: 'low'},
    {_id: 3, name: 'Skyrim', priority: 'low'},
    {_id: 4, name: 'React', priority: 'high'},
    {_id: 5, name: 'JS / TS', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    switch (filter) {
        case "high":
            return affairs.filter(a => a.priority === 'high');
        case "middle":
            return affairs.filter(a => a.priority === 'middle');
        case "low":
            return affairs.filter(a => a.priority === 'low');
        default:
            return affairs;
    }
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    return affairs.filter( a => a._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div className={s.main}>
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
