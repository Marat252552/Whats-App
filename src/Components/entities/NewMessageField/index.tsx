import styles from './lib/styles.module.css'
import CustomInput from './models/CustomInput'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import MessagesState from '../../state/MessagesState';
import {observer} from 'mobx-react-lite'
import DialogsState from '../../state/DialogsState';
import UserState from '../../state/UserState';
import SendMessageAPI from '../../GreenAPI/SendMessage';

const NewMessageField = observer(() => {
    let [value, setValue] = useState('')
    let sendMessage = async () => {
        let response = await SendMessageAPI(DialogsState.currentDialogChatId, value, UserState.idInstance, UserState.apiTokenInstance)
        if(response.status === 200) {
            console.log(response.data.idMessage)
            MessagesState.addMessage(DialogsState.currentDialogChatId, value, response.data.idMessage, 'outgoing')
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