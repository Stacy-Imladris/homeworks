import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {useState} from 'react';
import {requestsAPI} from './api/request-api';
import t from '../h12/common/Themes.module.css';
import s from './Request.module.css'
import {useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {ThemeType} from '../h12/bll/themeReducer';

export const Request = () => {
    const theme = useSelector<AppStoreType, ThemeType>(state => state.theme.theme)

    const [checked, setChecked] = useState<boolean>(false)
    const [response, setResponse] = useState<string>('')

    const sendRequest = () => {
        requestsAPI.postRequest({success: checked})
            .then(res => {
                console.log({...res})
                setResponse(res.data.errorText)
            })
            .catch(e => {
                console.log({...e})
                setResponse(e.response.data.errorText)
            })
    }

    return (
        <div className={s.container}>
            <div className={s.main}>
                <SuperButton onClick={sendRequest}>
                    Send request
                </SuperButton>
                <SuperCheckbox checked={checked}
                               onChangeChecked={setChecked}/>
            </div>
            <div className={s.res}>
                <span className={t[theme + '-text']}>{response}</span>
            </div>
        </div>
    )
}