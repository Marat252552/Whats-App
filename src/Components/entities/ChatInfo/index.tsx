import Avatar from '@mui/material/Avatar';
import styles from './lib/styles.module.css'
import { StateChat_T } from '../../shared/types';
import {observer} from 'mobx-react-lite'
import ChatsState from '../../state/ChatsState';

const ChatInfo = observer(({chat}: {chat: StateChat_T}) => {
    let openChat = () => {
        ChatsState.setCurrentChatId(chat.chatId)
    }
    return <div onClick={openChat} className={styles.mainContainer}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Avatar style={{width: '50px', height: '50px', }}/>
        </div>
        
        <div className={styles.companionMainInfoContainer}>
            <span>{chat.name || chat.chatId}</span>
        </div>
    </div>
})

export default ChatInfo