import GreenAPIInstance from "./Instance"
import {AxiosResponse} from 'axios'

type API_T = (idInstance: string, apiTokenInstance: string) => Promise<AxiosResponse<{
    receiptId: number,
    body: {
        idMessage: string,
        timestamp: number,
        senderData: {
            chatId: string,
            chatName: string,
            sender: string,
            senderName: string
        }
        messageData: {
            typeMessage: string,
            textMessageData: {
                textMessage: string
            }
        }
    }
} | null, any>>

const GetNotificationAPI: API_T = (idInstance, apiTokenInstance) => {
    return GreenAPIInstance.get(`/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`)
}

export default GetNotificationAPI