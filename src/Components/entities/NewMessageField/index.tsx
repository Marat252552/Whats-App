import styles from './lib/styles.module.css'
import CustomInput from './models/CustomInput'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

const NewMessageField = () => {
    let [value, setValue] = useState('')
    let sendMessage = () => {
        console.log(value)
        setValue('')
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
}

export default NewMessageField