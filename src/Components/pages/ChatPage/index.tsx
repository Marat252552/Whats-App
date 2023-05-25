import Conversation from "./models/Conversation"
import Navbar from "./models/Navbar"
import styles from './lib/styles.module.css'
import { useEffect } from 'react'
import { observer } from "mobx-react-lite"
import UserState from "../../state/UserState"
import { useNavigate } from "react-router-dom"

const ChatPage = observer(() => {
    // Authorization check
    let navigate = useNavigate()
    useEffect(() => {
        if (!UserState.isLogged) {
            navigate('/login')
        }
    }, [])
    return <div className={styles.mainContainer}>
        {/* Navbar consists of user main info and all chats list */}
        <Navbar />
        {/* Current chat (opened chat) */}
        <Conversation />
    </div>
})

export default ChatPage