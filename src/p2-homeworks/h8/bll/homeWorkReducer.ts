import {UserType} from "../HW8";

export type sortActionType = ReturnType<typeof sortAC>
export type checkActionType = ReturnType<typeof checkAC>
type ActionTypes = sortActionType | checkActionType

export const homeWorkReducer = (state: Array<UserType>, action: ActionTypes): Array<UserType> => {
    switch (action.type) {
        case 'sort': {
            const test = action.payload === 'up' ? [1, -1] : [-1, 1]
            return [...state].sort((a, b) => a.name > b.name ? test[0] : a.name < b.name ? test[1] : 0) // все варианты рабочие, какой лучше не знаю)

            /*const result = [...state].sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
            return action.payload === 'up' ? result : result.reverse()*/

            /*return [...state].sort((a, b) => action.payload === 'up' ? (a.name > b.name ? 1 : a.name < b.name ? -1 : 0)
                    : (a.name < b.name ? 1 : a.name > b.name ? -1 : 0))*/
        }
        case 'check': {
            return state.filter(u => u.age >= action.payload)
        }
        default: return state
    }
}

export const sortAC = (payload: 'up' | 'down') => {
    return {type: 'sort', payload} as const
}
export const checkAC = (payload: number) => {
    return {type: 'check', payload} as const
}