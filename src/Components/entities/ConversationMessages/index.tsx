import { useState } from 'react'
import styles from './lib/styles.module.css'
import TextMessage from '../TextMessage'
import { TextMessage_T } from '../../shared/types'

const ConversationMessages = () => {
    let [messages, setMessages] = useState<TextMessage_T[]>([
        {person: 0, text: 'Привет пппппп ddddddddddddddddddddddd dddddddddddd ddddddddddddddd ddddddddddddddd dddddddddddddd ddddddddddddd wefewrwer', time: '00:00'},
        {person: 1, text: 'Пока', time: '00:00'}
    ])
    return <div className={styles.mainContainer}>
        {messages.map(message => {
            return <TextMessage message={message}/>
        })}
    </div>
}

export default ConversationMessages