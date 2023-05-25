import styles from './lib/styles.module.css'
import CustomInput from './models/CustomInput'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import MessagesState from '../../state/MessagesState';
import {observer} from 'mobx-react-lite'
import UserState from '../../state/UserState';
import SendMessageAPI from '../../GreenAPI/SendMessage';
import ChatsState from '../../state/ChatsState';

const NewMessageField = observer(() => {
    let [value, setValue] = useState('')
    let sendMessage = async () => {
        let response = await SendMessageAPI(ChatsState.currentChatId, value, UserState.idInstance, UserState.apiTokenInstance)
        if(response.status === 200) {
            MessagesState.addMessage(ChatsState.currentChatId, value, response.data.idMessage, 'outgoing', (Date.now()) * 0.001)
            setValue('')
        }
    }
    return <div className={styles.mainContainer}>
        <div className={styles.iconsContainer}>
            <InsertEmoticonIcon />
            <AttachFileIcon />
        </div>
            <CustomInput value={value} setValue={setValue}/>
        <div className={styles.iconsContainer}>
            {
                (value === '')?
                <KeyboardVoiceIcon />
                :
                <SendIcon onClick={sendMessage}/>
            }
        </div>
    </div>
})

export default NewMessageField