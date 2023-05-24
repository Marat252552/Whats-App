import Avatar from '@mui/material/Avatar';
import styles from './lib/styles.module.css'
import { Dialog_T } from '../../shared/types';
import {observer} from 'mobx-react-lite'
import DialogsState from '../../state/DialogsState';

const DialogInfo = observer(({dialog}: {dialog: Dialog_T}) => {
    let openDialog = () => {
        DialogsState.setCurrentDialogChatId(dialog.chatId)
        console.log(DialogsState.currentDialogChatId)
    }
    return <div onClick={openDialog} className={styles.mainContainer}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Avatar style={{width: '50px', height: '50px', }}/>
        </div>
        
        <div className={styles.companionMainInfoContainer}>
            <span>{dialog.name}</span>
            <span style={{fontSize: '10px'}}>{dialog.lastMessage}</span>
        </div>

        <div style={{display: 'flex', justifyContent: 'end'}}>
            <span>{dialog.lastMessageTime}</span>
        </div>
    </div>
})

export default DialogInfo