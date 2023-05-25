import { useEffect } from "react"
import styles from './Lib/styles.module.css'
import LoginForm from "./Models/LoginForm"
import UserState from "../../state/UserState"
import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router-dom"
import {message} from 'antd'

const AuthPage = observer(() => {
    // Authorization errors displayer
    const [messageApi, contextHolder] = message.useMessage();
    const setError = (value: string) => {
        messageApi.open({
            type: 'error',
            content: value,
        });
    }
    // Authorization check. If user is logged then redirect him on ChatPage
    let navigate = useNavigate()
    useEffect(() => {
        if(UserState.isLogged) {
            navigate('/')
        }
    }, [])
    return <div className={styles.auth_page}>
        {contextHolder}
        <LoginForm setError={setError}/>
    </div>
})

export default AuthPage