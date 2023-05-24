import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { Button, Checkbox, Form, Input } from "antd"
import { useState } from "react"
import styles from './Lib/styles.module.css'
import LoginAPI from "./Api/api"
import { useNavigate } from "react-router-dom"
import UserState from "../../../../state/UserState"

const LoginForm = ({setError}: {setError: (value: string) => void}) => {
    let navigate = useNavigate()
    // Загрузка кнопки "войти" после отправки формы
    let [loading, setLoading] = useState(false)
    // Callback, который вызывается на отправку формы
    const onFinish = async (values: {idInstance: string, apiTokenInstance: string}) => {
        setLoading(true)
        try {
            let { status } = await LoginAPI(values.idInstance, values.apiTokenInstance)
            if(status === 200) {
                navigate('/')
                UserState.setIsLogged(true)
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
                initialValue='1101824273'
                rules={[{ required: true, message: 'Пожалуйста, введите idInstance!' }]}
            >
                <Input prefix={<UserOutlined className={styles.siteFormItemIcon} />} placeholder="idInstance" />
            </Form.Item>

            {/* apiTokenInstance */}
            <Form.Item
                name="apiTokenInstance"
                initialValue='d4eb58a3aa3344fba792b6b53b28a145303f8819c10c4ac18f'
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