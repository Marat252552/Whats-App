import { CompanionMessageF_T } from '../lib/types'
import styles from './../lib/styles.module.css'
import FormatTimestampToTime from '../../../shared/Helpers/FormatTimestampToTime'

const CompanionMessage: CompanionMessageF_T = ({message}) => {
    return <div className={styles.myMessageContainer}>
    <div style={{background: '#D9FDD3', display: 'flex', padding: '5px', borderRadius: '5px'}}>
        <div className={styles.myMessage}>{message.textMessage}</div>
        <div style={{display: 'flex', alignItems: 'end', fontSize: '10px'}}>{FormatTimestampToTime(message.timestamp)}</div>
    </div>
</div>
}

export default CompanionMessage