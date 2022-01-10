import React from 'react'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'
import Error404 from './pages/Error404'
import {Route, Routes, Navigate} from 'react-router-dom'

export enum PATH {
    PRE_JUNIOR = '/pre-junior',
    JUNIOR = '/junior',
    JUNIOR_PLUS = '/junior-plus',
}

function MyRoutes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Routes>
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                <Route path='/' element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default MyRoutes
