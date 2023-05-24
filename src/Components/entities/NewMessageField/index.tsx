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

const NewMessageField = observer(() => {
    let [value, setValue] = useState('')
    let sendMessage = () => {
        MessagesState.addMessage(DialogsState.currentDialogChatId, value, Date.now().toString(), 'outgoing')
        setValue('')
        // console.log(toJS MessagesState.messages)
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