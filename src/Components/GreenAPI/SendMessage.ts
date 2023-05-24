import GreenAPIInstance from "./Instance"
import {AxiosResponse} from 'axios'

type API_T = (chatId: string, message: string, idInstance: string, apiTokenInstance: string) => Promise<AxiosResponse<{
    idMessage: string
}, any>>

const SendMessageAPI: API_T = (chatId, message, idInstance, apiTokenInstance) => {
    return GreenAPIInstance.post(`/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, {
        chatId, message
    })
}

export default SendMessageAPI