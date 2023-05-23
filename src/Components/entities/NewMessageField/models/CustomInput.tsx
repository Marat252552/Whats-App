import styles from './../lib/styles.module.css'

const CustomInput = (props: {value: string, setValue: any}) => {
    return <>
        <input 
            onChange={e => props.setValue(e.target.value)}
            placeholder='Введите сообщение'
            className={styles.customInput}
            value={props.value}
        />
    </>
}

export default CustomInput