import { useState, useEffect } from 'react'
import styles from './lib/styles.module.css'
import TextMessage from '../TextMessage'
import { TextMessage_T } from '../../shared/types'
import {observer} from 'mobx-react-lite'
import DialogsState from '../../state/DialogsState'
import MessagesState from '../../state/MessagesState'

const ConversationMessages = observer(() => {
    let [messages, setMessages] = useState<TextMessage_T[]>([
        {chatId: '', idMessage: '', senderId: '', senderName: '', textMessage: '', timestamp: 0, type: 'incoming', typeMessage: 'textMessage'}
    ])
    useEffect(() => {
        let newMessages = MessagesState.messages.filter(el => {
            return el.chatId === DialogsState.currentDialogChatId
        })
        setMessages(newMessages)
    }, [DialogsState.dialogs])
    return <div className={styles.mainContainer}>
        {messages.map(message => {
            return <TextMessage message={message}/>
        })}
    </div>
})

export default ConversationMessages