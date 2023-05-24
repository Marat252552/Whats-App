import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { Button, Checkbox, Form, Input } from "antd"
import { useState } from "react"
import styles from './Lib/styles.module.css'
import { useNavigate } from "react-router-dom"
import UserState from "../../../../state/UserState"
import GetAccountSettings from "../../../../GreenAPI/GetAccountSettings"

const LoginForm = ({setError}: {setError: (value: string) => void}) => {
    let navigate = useNavigate()
    // Загрузка кнопки "войти" после отправки формы
    let [loading, setLoading] = useState(false)
    // Callback, который вызывается на отправку формы
    const onFinish = async (values: {idInstance: string, apiTokenInstance: string}) => {
        setLoading(true)
        try {
            let { status } = await GetAccountSettings(values.idInstance, values.apiTokenInstance)
            if(status === 200) {
                navigate('/')
                UserState.setIsLogged(true)
                UserState.setApiTokenInstance(values.apiTokenInstance)
                UserState.setIdInstance(values.idInstance)
            }
        } catch (e: any) {
            if(e.response.status === 403) {
                setError('Неверный idInstance или apiTokenInstance')
            }
            console.log(e)
        } finally {
            setLoading(false)
        }
    };
    return <div style={{ background: 'white', padding: '30px 50px 0 50px', borderRadius: '20px' }}>
        <Form
            name="normal_login"
            className={styles.loginForm}
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            {/* idInstance */}
            <Form.Item
                name="idInstance"
                initialValue='1101824428'
                rules={[{ required: true, message: 'Пожалуйста, введите idInstance!' }]}
            >
                <Input prefix={<UserOutlined className={styles.siteFormItemIcon} />} placeholder="idInstance" />
            </Form.Item>

            {/* apiTokenInstance */}
            <Form.Item
                name="apiTokenInstance"
                initialValue='ecf9ff2618884dc091393ad97932189c38d183b5deb3433287'
                rules={[{ required: true, message: 'Пожалуйста, введите apiTokenInstance!' }]}
            >
                <Input
                    prefix={<LockOutlined className={styles.siteFormItemIcon} />}
                    placeholder="apiTokenInstance"
                />
            </Form.Item>

            {/* Кнопка "войти" */}
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading} className={styles.loginFormButton}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    </div>
}

export default LoginForm