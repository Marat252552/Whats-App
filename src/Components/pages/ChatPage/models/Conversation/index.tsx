import { useState, useEffect } from "react"
import CompanionMainInfo from "../../../../entities/ConversationMainInfo"
import { StateChat_T } from "../../../../shared/types"
import ConversationMessages from "../../../../entities/ConversationMessages"
import NewMessageField from "../../../../entities/NewMessageField"
import { observer } from 'mobx-react-lite'
import ChatsState from "../../../../state/ChatsState"
import styles from './lib/styles.module.css'

const Conversation = observer(() => {
    let [chat, setChat]: [StateChat_T, any] = useState({
        chatId: '',
        name: ''
    })
    useEffect(() => {
        let requiredDialog = ChatsState.chats.find(el => {
            return el.chatId === ChatsState.currentChatId
        })
        setChat(requiredDialog)
    }, [ChatsState.currentChatId])

    if(ChatsState.currentChatId === '') {
        return <div className={styles.noChatChosen}>
            <p style={{background: 'white', padding: '5px', borderRadius: '5px'}}>Пожалуйста, добавьте чат</p>
        </div>
    } else {
        return <div style={{ display: 'flex', flexDirection: 'column' }}>
        <CompanionMainInfo chat={chat} />
        <ConversationMessages />
        <NewMessageField />
    </div>
    }
})

export default Conversation