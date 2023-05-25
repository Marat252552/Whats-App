import Conversation from "./models/Conversation"
import Navbar from "./models/Navbar"
import styles from './lib/styles.module.css'
import { useEffect } from 'react'
import GetChatsAPI from "../../GreenAPI/GetChatsAPI"
import { observer } from "mobx-react-lite"
import UserState from "../../state/UserState"
import GetChatLastMessageAPI from "../../GreenAPI/GetChatLastMessageAPI/GetChatLastMessageAPI"
import MessagesState from "../../state/MessagesState"
import DialogsState from "../../state/DialogsState"
import GetContactFullInfoAPI from "../../GreenAPI/GetContactFullInfoAPI/GetContactFullInfo"
import { Chat_T } from "../../shared/types"

const Workspace = observer(() => {
    useEffect(() => {
        let { idInstance, apiTokenInstance } = UserState
        let GetChatLastMessage = async (chat: Chat_T) => {
            try {
                let GetChatLastMessage_response = await GetChatLastMessageAPI(idInstance, apiTokenInstance, chat.id)
                let chatLastMessage = GetChatLastMessage_response.data[0]
                let { chatId, textMessage, timestamp, idMessage, type } = chatLastMessage
                MessagesState.addMessage(chatId, textMessage, idMessage, type, timestamp)

                DialogsState.addDialog(chat.id, chat.id, textMessage, timestamp)
            } catch (e) {
                setTimeout(() => {
                    GetChatLastMessage(chat)
                }, 500)
            }
        }
        let GetChats = async () => {
            try {
                let chats = (await GetChatsAPI(idInstance, apiTokenInstance)).data
                console.log(chats)
                chats.forEach((chat) => GetChatLastMessage(chat))
            } catch (e) {
                console.log(e)
            }
        }
        GetChats()
    }, [])

    return <div className={styles.mainContainer}>
        <Navbar />
        <Conversation />
    </div>
})

export default Workspace