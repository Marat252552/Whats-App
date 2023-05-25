import Avatar from '@mui/material/Avatar';
import styles from './lib/styles.module.css'
import { Dialog_T } from '../../shared/types';
import {observer} from 'mobx-react-lite'
import DialogsState from '../../state/DialogsState';
import FormatTimestampToTime from '../../shared/Helpers/FormatTimestampToTime';
import MessagesState from '../../state/MessagesState';
import { toJS } from 'mobx';

const DialogInfo = observer(({dialog}: {dialog: Dialog_T}) => {
    let openDialog = () => {
        DialogsState.setCurrentDialogChatId(dialog.chatId)
        console.log(DialogsState.currentDialogChatId)
    }
    let dialogAllMessages = MessagesState.messages.filter(message => {
        return message.chatId === dialog.chatId
    })
    let dialogLastMessage = dialogAllMessages[0]
    console.log(toJS(dialogLastMessage) )
    return <div onClick={openDialog} className={styles.mainContainer}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Avatar style={{width: '50px', height: '50px', }}/>
        </div>
        
        <div className={styles.companionMainInfoContainer}>
            <span>{dialog.name || dialog.chatId}</span>
            <span style={{fontSize: '10px'}}>{dialog.lastMessageText || ''}</span>
        </div>

        <div style={{display: 'flex', justifyContent: 'end'}}>
            <span>{FormatTimestampToTime(dialogLastMessage.timestamp)}</span>
        </div>
    </div>
})

export default DialogInfo