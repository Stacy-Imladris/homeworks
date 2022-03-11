import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";
import {themeReducer} from '../../h12/bll/themeReducer';

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
})

export type AppStoreType = ReturnType<typeof reducers>

export const store = createStore(reducers)

// @ts-ignore
window.store = store // for dev
