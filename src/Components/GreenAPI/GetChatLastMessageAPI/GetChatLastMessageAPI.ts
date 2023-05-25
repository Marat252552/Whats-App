import GreenAPIInstance from "../Instance"
import { API_T } from "./types"


const GetChatLastMessageAPI: API_T = (idInstance, apiTokenInstance, chatId) => {
    return GreenAPIInstance.post(`/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`, {
        chatId,
        count: 1
    })
}

export default GetChatLastMessageAPI