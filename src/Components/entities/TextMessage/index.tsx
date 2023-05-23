import { TextMessage_T } from "../../shared/types"
import styles from './lib/styles.module.css'
import { TextMessageF_T } from "./lib/types"

const TextMessage: TextMessageF_T = ({ message }) => {
    if (message.person === 0) {
        return <div className={styles.myMessageContainer}>
            <div style={{background: '#D9FDD3', display: 'flex', padding: '5px', borderRadius: '5px'}}>
                <div className={styles.myMessage}>{message.text}</div>
                <div style={{display: 'flex', alignItems: 'end'}}>{message.time}</div>
            </div>
        </div>
    } else {
        return <div className={styles.companionMessageContainer}>
            <div style={{background: 'white', display: 'flex', padding: '5px', borderRadius: '5px'}}>
                <div className={styles.companionMessage}>
                    {message.text}
                </div>
                <div style={{display: 'flex', alignItems: 'end'}}>
                    {message.time}
                </div>
            </div>
        </div>
    }
}

export default TextMessage