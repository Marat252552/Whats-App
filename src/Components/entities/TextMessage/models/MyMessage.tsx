import { MyMessageF_T } from '../lib/types'
import styles from './../lib/styles.module.css'

const MyMessage: MyMessageF_T = ({message}) => {
    return <div className={styles.companionMessageContainer}>
    <div style={{background: 'white', display: 'flex', padding: '5px', borderRadius: '5px'}}>
        {/* Содержимое сообщения */}
        <div className={styles.companionMessage}>
            {message.text}
        </div>
        {/* Время отправки сообщения */}
        <div style={{display: 'flex', alignItems: 'end', fontSize: '10px'}}>
            {message.time}
        </div>
    </div>
</div>
}

export default MyMessage