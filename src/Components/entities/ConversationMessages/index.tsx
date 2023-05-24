import { useState, useEffect } from 'react'
import styles from './lib/styles.module.css'
import TextMessage from '../TextMessage'
import { TextMessage_T } from '../../shared/types'
import {observer} from 'mobx-react-lite'
import {toJS} from 'mobx'
import DialogsState from '../../state/DialogsState'
import MessagesState from '../../state/MessagesState'

const ConversationMessages = observer(() => {
    let [messages, setMessages] = useState<TextMessage_T[]>([
        {chatId: '', idMessage: '', senderId: '', senderName: '', textMessage: '', timestamp: 0, type: 'incoming', typeMessage: 'textMessage'}
    ])
    // useEffect(() => {
    //     let newMessages = MessagesState.messages.filter(el => {
    //         return el.chatId === DialogsState.currentDialogChatId
    //     })
    //     console.log(messages)
    //     setMessages(newMessages)
    // }, [toJS(MessagesState.messages) ])
    return <div className={styles.mainContainer}>
        <button onClick={() => {
            console.log(toJS(MessagesState.messages))
            console.log(toJS(DialogsState.currentDialogChatId))
        }}>Analyze</button>
        {MessagesState.messages.filter(el => {
            return el.chatId === DialogsState.currentDialogChatId
        }).map(message => {
            return <TextMessage key={message.idMessage} message={message}/>
        })}
    </div>
})

export default ConversationMessages