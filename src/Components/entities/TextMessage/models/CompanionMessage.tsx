import { CompanionMessageF_T } from '../lib/types'
import styles from './../lib/styles.module.css'

const CompanionMessage: CompanionMessageF_T = ({message}) => {
    return <div className={styles.myMessageContainer}>
    <div style={{background: '#D9FDD3', display: 'flex', padding: '5px', borderRadius: '5px', maxWidth: '70%'}}>
        <div className={styles.myMessage}>{message.text}</div>
        <div style={{display: 'flex', alignItems: 'end', fontSize: '10px'}}>{message.time}</div>
    </div>
</div>
}

export default CompanionMessage