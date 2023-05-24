import AxiosInstance from "../../../shared/AxiosInstance"

const SendMessageAPI = (chatId: string, message: string, apiTokenInstance: string, idInstance: string) => {
    return AxiosInstance.post('/messages/send', {
        chatId, message, apiTokenInstance, idInstance
    })
}

export default SendMessageAPI