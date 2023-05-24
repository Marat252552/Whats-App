import styles from './lib/styles.module.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import GroupsIcon from '@mui/icons-material/Groups';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import {useState} from 'react'
import {Modal, Input} from 'antd'
import DialogsState from '../../state/DialogsState';
import { Dialog_T } from '../../shared/types';
import {observer} from 'mobx-react-lite'

const MainInfo = observer(() => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    let [chatId, setChatId] = useState('')

    const showModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false)
    }

    const handleOk = () => {
        DialogsState.addDialog(chatId)
        setChatId('')
        closeModal()
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return <div className={styles.container}>
        <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
            <Avatar style={{ width: '35px', height: '35px' }} />
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <GroupsIcon className={styles.icon} />
            <DonutLargeIcon className={styles.icon} />
            <ChatIcon onClick={showModal} className={styles.icon} />
            <MoreVertIcon className={styles.icon} />
        </div>
        <Modal title="Добавить диалог" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            Введите chatId
            <Input value={chatId} placeholder='chatId' onChange={e => {setChatId(e.target.value)}}/>
        </Modal>
    </div>
})

export default MainInfo