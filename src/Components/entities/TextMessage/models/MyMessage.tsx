import { toJS } from 'mobx'
import { MyMessageF_T } from '../lib/types'
import styles from './../lib/styles.module.css'
import FormatTimestampToTime from '../../../shared/Helpers/FormatTimestampToTime'

const MyMessage: MyMessageF_T = ({message}) => {
    console.log(toJS(message) )
    return <div className={styles.myMessageContainer}>
    <div style={{background: 'white', display: 'flex', padding: '5px', borderRadius: '5px'}}>
        {/* Содержимое сообщения */}
        <div className={styles.myMessage}>
            {message.textMessage}
        </div>
        {/* Время отправки сообщения */}
        <div style={{display: 'flex', alignItems: 'end', fontSize: '10px'}}>
            {FormatTimestampToTime(message.timestamp)}
        </div>
    </div>
</div>
}

export default MyMessage