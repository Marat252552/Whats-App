import styles from './lib/styles.module.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import GroupsIcon from '@mui/icons-material/Groups';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';


const MainInfo = () => {
    return <div className={styles.container}>
        <div style={{width: '100%', display: 'flex', alignItems: 'center'}}>
            <Avatar style={{width: '35px', height: '35px'}}/>
        </div>
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            <GroupsIcon className={styles.icon}/>
            <DonutLargeIcon className={styles.icon}/>
            <ChatIcon className={styles.icon}/>
            <MoreVertIcon className={styles.icon}/>
        </div>
    </div>
}

export default MainInfo