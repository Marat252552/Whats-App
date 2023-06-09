import { Avatar } from "@mui/material"
import { StateChat_T } from "../../shared/types"
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styles from './lib/styles.module.css'

const CompanionMainInfo = ({ chat }: { chat: StateChat_T }) => {
    return <div className={styles.mainContainer}>
            <div className={styles.iconsContainer}>
                <Avatar style={{width: '35px', height: '35px'}}/>
            </div>

            <div className={styles.companionMainInfoContainer}>
                <span>{chat?.name || chat?.chatId || 'Имя пользователя'}</span>
                <span style={{fontSize: '10px'}}>был(-а) сегодня в 00:00</span>
            </div>

            <div className={styles.iconsContainer}>
                <SearchIcon style={{fontSize: '20px'}}/>
                <MoreVertIcon style={{fontSize: '20px'}}/>
            </div>
        </div>
}

export default CompanionMainInfo