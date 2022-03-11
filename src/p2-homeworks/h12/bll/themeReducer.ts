export type ThemeType = 'day' | 'night'
type InitStateType = {
    theme: ThemeType
}
const initState: InitStateType = {
    theme: 'day'
}

export const themeReducer = (state: InitStateType = initState, action: ChangeThemeActionType): InitStateType => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return {...state, theme: action.payload.theme}
        default:
            return state
    }
};

export type ChangeThemeActionType = ReturnType<typeof changeTheme>
export const changeTheme = (theme: ThemeType) => ({type: 'CHANGE_THEME', payload: {theme}} as const)