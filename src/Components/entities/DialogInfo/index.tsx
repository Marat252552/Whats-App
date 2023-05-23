import Avatar from '@mui/material/Avatar';
import styles from './lib/styles.module.css'
import { Dialog_T } from '../../shared/types';

const DialogInfo = ({dialog}: {dialog: Dialog_T}) => {
    return <div className={styles.mainContainer}>
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
}

export default DialogInfo