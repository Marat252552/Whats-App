import styles from './../lib/styles.module.css'

const CustomInput = () => {
    return <>
        <input 
            placeholder='Введите сообщение'
            className={styles.customInput}
        />
    </>
}

export default CustomInput