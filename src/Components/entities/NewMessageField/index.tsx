import styles from './lib/styles.module.css'
import CustomInput from './models/CustomInput'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

const NewMessageField = () => {
    return <div className={styles.mainContainer}>
        <div className={styles.iconsContainer}>
            <InsertEmoticonIcon />
            <AttachFileIcon />
        </div>
            <CustomInput />
        <div className={styles.iconsContainer}>
            <KeyboardVoiceIcon />
        </div>
    </div>
}

export default NewMessageField