import styles from './lib/styles.module.css'
import ChatInfo from "../ChatInfo"
import { observer } from 'mobx-react-lite'
import ChatsState from "../../state/ChatsState"

const ChatsList = observer(() => {

    if (!ChatsState.chats[0]) {
        return <div className={styles.nochatsContainer}>
            No chats
        </div>
    } else {
        return <div style={{ height: '80vh' }}>
            <div className={styles.chatsContainer}>
                {ChatsState.chats.map(chat => {
                    return <ChatInfo key={chat.name} chat={chat} />
                })}
            </div>
        </div>
    }
})

export default ChatsList